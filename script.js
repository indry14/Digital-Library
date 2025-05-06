// Data buku
const recommendationBooksData = [
  { id: 1, title: "Rumah untuk Alie", description: "Sebuah kisah tentang pencarian jati diri dan keluarga sejati", cover: "rumah alie.jpg" },
  { id: 2, title: "Laut Bercerita", description: "Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur...", cover: "laut cerita.jpg" },
  { id: 3, title: "Sabtu bersama Bapak", description: "Pesan cinta seorang ayah kepada anak-anaknya melalui video tiap sabtu.", cover: "sabtu sama bapak.jpg" },
  { id: 4, title: "The Power of Now", description: "Buku ini mengajak pembaca untuk melepaskan beban masa lalu dan kecemasan masa depan,dengan hidup sepenuhnya disaat ini... ", cover: "power of now.jpg" },
  { id: 5, title: "Teruslah Bodoh Jangan Pintar", description: "Kisah motivasi pelajar meraih impian tinggi.", cover: "bodoh pintar.jpg" },
];

const topBooksData = [
  { id: 4, title: "Fourth Wing", description: "Novel fantasi romantis tentang akademi naga.", cover: "fourth wing.jpg" },
  { id: 5, title: "Orang Orang Biasa", description: "menceritakan kisah sepuluh orang bersahabat yang berjuang untuk membiayai kuliah Aini, anak salah satu dari mereka, di Fakultas Kedokteran.", cover: "orang orang biasa.jpg" },
  { id: 6, title: "To Kill a Mockingbird", description: "Sebuah kisah tentang keadilan,rasisme,dan masa kecil di Amerika.", cover: "to kill a mockingbird.jpg" }
];

// Gabungkan semua buku untuk explore
const allBooks = [...recommendationBooksData, ...topBooksData];

// Render Recommendation
const recommendationBooks = document.getElementById("recommendationBooks");
recommendationBooksData.forEach(book => {
  const card = createBookCard(book);
  recommendationBooks.appendChild(card);
});

// Render Top Books
const topBooksList = document.getElementById("topBooksList");
topBooksData.forEach(book => {
  const card = createBookCard(book);
  topBooksList.appendChild(card);
});

// Render Explore (semua buku)
const exploreBooksList = document.getElementById("exploreBooksList");
allBooks.forEach(book => {
  const card = createBookCard(book);
  exploreBooksList.appendChild(card);
});

// Fungsi lainnya tetap
function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.cover}" alt="Cover" class="book-cover">
    <h3>${book.title}</h3>
  `;
  card.onclick = () => openBookPopup(book);
  return card;
}

function openBookPopup(book) {
  document.getElementById("bookTitle").innerText = book.title;
  document.getElementById("bookCover").src = book.cover;
  document.getElementById("bookDescription").innerText = book.description;
  openPopup('bookPopup');
}

function readBook() {
  alert("Fitur membaca buku masih dalam pengembangan!");
}

function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function searchBook() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const bookList = document.getElementById("bookList");
  if (input === "") {
    bookList.innerHTML = "";
    return;
  }
  const foundBook = allBooks.find(book => book.title.toLowerCase().includes(input));
  if (foundBook) {
    openBookPopup(foundBook);
  } else {
    alert("Book not found!");
  }
}

function openProfile() {
  document.getElementById('profilePopup').style.display = 'flex';
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}

function showEditProfile() {
  document.getElementById('profileMain').style.display = 'none';
  document.getElementById('editProfile').style.display = 'block';
}

function showChangePassword() {
  document.getElementById('profileMain').style.display = 'none';
  document.getElementById('changePassword').style.display = 'block';
}

function backToMain() {
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
  document.getElementById('profileMain').style.display = 'block';
}

function saveProfile() {
  const name = document.getElementById('editFullName').value;
  const username = document.getElementById('editUsername').value;
  const email = document.getElementById('editEmail').value;
  document.getElementById('profileName').textContent = name || "Your Name";
  backToMain();
}

function savePassword() {
  const oldPass = document.getElementById('oldPassword').value;
  const newPass = document.getElementById('newPassword').value;
  alert("Password changed.");
  backToMain();
}

function triggerImageUpload() {
  document.getElementById('imageUpload').click();
}

function changeProfileImage() {
  const file = document.getElementById('imageUpload').files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profileImage').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function signOut() {
  document.getElementById('profileName').textContent = "Your Name";
  document.getElementById('editFullName').value = "";
  document.getElementById('editUsername').value = "";
  document.getElementById('editEmail').value = "";
  document.getElementById('profileImage').src = "https://via.placeholder.com/100";
  alert("Signed out.");
  document.getElementById('profilePopup').style.display = 'none';
}

function openProfilePopup() { // Nama fungsi diubah dari openProfile menjadi openProfilePopup
  document.getElementById('profilePopup').style.display = 'flex';
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}

function closeProfilePopup() {
  document.getElementById('profilePopup').style.display = 'none';
  // Optional: Reset tampilan ke layar utama profil saat ditutup
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}



