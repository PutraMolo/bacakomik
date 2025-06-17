// js/comicDetail.js

document.addEventListener('DOMContentLoaded', () => {
    const detailComicCover = document.getElementById('detailComicCover');
    const detailComicTitle = document.getElementById('detailComicTitle');
    const detailComicGenre = document.getElementById('detailComicGenre');
    const detailComicAuthor = document.getElementById('detailComicAuthor');
    const detailComicStatus = document.getElementById('detailComicStatus');
    const detailComicSynopsis = document.getElementById('detailComicSynopsis');
    const readNowButton = document.querySelector('.comic-detail-page .btn-primary');

    const comicData = {
        'comic_a': {
            title: 'Petualangan Angkasa',
            genre: 'Sci-Fi, Petualangan',
            author: 'Penulis A',
            status: 'Berlanjut',
            synopsis: 'Petualangan luar angkasa yang mendebarkan. Ikuti perjalanan seorang astronot muda yang terdampar di planet asing dan harus menemukan jalan pulang sambil menghadapi berbagai makhluk aneh dan tantangan.',
            cover: 'images/cover/comic_a_cover.jpg',
            readerLink: 'reader.html?comic=comic_a'
        },
        'comic_b': {
            title: 'Misteri Kota Tua',
            genre: 'Fantasi, Misteri',
            author: 'Penulis B',
            status: 'Tamat',
            synopsis: 'Di tengah kota tua yang penuh rahasia, seorang detektif muda berusaha memecahkan serangkaian kejadian misterius yang melibatkan sihir kuno dan entitas tak dikenal. Setiap sudut kota menyembunyikan petunjuk yang membawa pada kebenaran yang mengejutkan.',
            cover: 'images/cover/comic_b_cover.jpg',
            readerLink: 'reader.html?comic=comic_b'
        }
        // Tambahkan data komik lainnya
    };

    function loadComicDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const comicId = urlParams.get('id');

        if (comicId && comicData[comicId]) {
            const comic = comicData[comicId];
            detailComicCover.src = comic.cover;
            detailComicTitle.textContent = comic.title;
            detailComicGenre.textContent = comic.genre;
            detailComicAuthor.textContent = comic.author;
            detailComicStatus.textContent = comic.status;
            detailComicSynopsis.textContent = comic.synopsis;
            readNowButton.href = comic.readerLink;
        } else {
            // Handle jika komik tidak ditemukan
            detailComicTitle.textContent = 'Komik Tidak Ditemukan';
            detailComicGenre.textContent = '';
            detailComicAuthor.textContent = '';
            detailComicStatus.textContent = '';
            detailComicSynopsis.textContent = 'Detail komik tidak tersedia.';
            detailComicCover.src = 'https://via.placeholder.com/300x450?text=Komik+Tidak+Ditemukan';
            readNowButton.style.display = 'none'; // Sembunyikan tombol baca
        }
    }

    loadComicDetails();
});