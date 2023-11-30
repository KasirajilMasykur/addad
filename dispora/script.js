// Mendapatkan elemen gambar dan jumlah total gambar
const images = document.querySelectorAll(".slideshow-images img");
const totalImages = images.length;

// Inisialisasi indeks gambar saat ini
let currentIndex = 0;

// Fungsi untuk menampilkan gambar selanjutnya
function showNextImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = "block";
}

// Fungsi untuk memulai slideshow secara otomatis
function startSlideshow() {
    setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik (3000 ms)
}
 function showDetails(boxNumber) {
        var detailsContent = document.getElementById('details-' + boxNumber);
        if (detailsContent.style.display === 'block') {
            detailsContent.style.display = 'none';
        } else {
            detailsContent.style.display = 'block';
        }
    }
	document.addEventListener("DOMContentLoaded", function () {
    const btnDetails = document.querySelectorAll(".btn-details");
    const popups = document.querySelectorAll(".popup");

    btnDetails.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            // Tampilkan popup sesuai dengan indeks kotak yang diklik
            popups[index].style.display = "block";
        });
    });

    // Tutup popup ketika area luar popup diklik
    popups.forEach((popup) => {
        popup.addEventListener("click", function (event) {
            if (event.target === this) {
                this.style.display = "none";
            }
        });
    });
});
// Fungsi untuk membuka pop-up
function openPopup(popupSelector) {
    var popup = document.querySelector(popupSelector);
    if (popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Mencegah gulir latar belakang
    }
}

// Fungsi untuk menutup pop-up
function closePopup(popupSelector) {
    var popup = document.querySelector(popupSelector);
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // Mengembalikan gulir latar belakang
    }
}

// Memilih semua tombol "Selengkapnya" dengan class "btn-details"
var detailButtons = document.querySelectorAll('.btn-details');

// Tambahkan event listener ke setiap tombol "Selengkapnya"
detailButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var popupSelector = this.getAttribute('data-popup');
        openPopup(popupSelector);
    });
});

// Memilih semua tombol "Tutup" pada pop-up dengan class "close-btn"
var closeButtons = document.querySelectorAll('.close-btn');

// Tambahkan event listener ke setiap tombol "Tutup"
closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var popupSelector = this.getAttribute('data-popup-close');
        closePopup(popupSelector);
    });
});


// Memulai slideshow saat halaman dimuat
startSlideshow();
