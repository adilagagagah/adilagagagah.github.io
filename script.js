// Fungsi untuk menangani klik pada tautan
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Menambahkan event listener untuk setiap tautan
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // event.preventDefault(); // Mencegah perilaku default dari tautan
        var targetSectionId = link.getAttribute('href').substring(1); // Mengambil id section dari href
        scrollToSection(targetSectionId);
    });
});