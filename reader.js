// js/reader.js

document.addEventListener('DOMContentLoaded', () => {
    const comicPageElement = document.getElementById('comicPage');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const pageInfoElement = document.getElementById('pageInfo');
    const readerComicTitleElement = document.getElementById('readerComicTitle');

    // Data komik (contoh)
    // Di aplikasi nyata, data ini mungkin dari API atau JSON
    const comicsData = {
        'comic_a': {
            title: 'Petualangan Angkasa',
            pages: [
                'images/comic_a/page_01.jpg',
                'images/comic_a/page_02.jpg',
                'images/comic_a/page_03.jpg',
                'images/comic_a/page_04.jpg',
                'images/comic_a/page_05.jpg'
            ]
        },
        'comic_b': {
            title: 'Misteri Kota Tua',
            pages: [
                'images/comic_b/page_01.jpg',
                'images/comic_b/page_02.jpg',
                'images/comic_b/page_03.jpg'
            ]
        }
        // Tambahkan data komik lain di sini
    };

    let currentComicId = '';
    let comicPages = [];
    let currentPageIndex = 0;

    /**
     * Mengambil ID komik dari parameter URL (misal: reader.html?comic=comic_a)
     */
    function getComicIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('comic');
    }

    /**
     * Memuat data komik berdasarkan ID dan menginisialisasi pembaca.
     */
    function loadComic() {
        currentComicId = getComicIdFromUrl();

        if (currentComicId && comicsData[currentComicId]) {
            const comic = comicsData[currentComicId];
            readerComicTitleElement.textContent = comic.title;
            comicPages = comic.pages;
            currentPageIndex = 0; // Selalu mulai dari halaman pertama saat komik dimuat
            updateComicPage();
        } else {
            // Handle jika komik tidak ditemukan atau tidak ada ID
            readerComicTitleElement.textContent = 'Komik Tidak Ditemukan';
            comicPageElement.src = 'https://via.placeholder.com/800x1200?text=Komik+Tidak+Ditemukan';
            prevButton.disabled = true;
            nextButton.disabled = true;
            pageInfoElement.textContent = '';
        }
    }

    /**
     * Fungsi untuk memperbarui tampilan halaman komik.
     */
    function updateComicPage() {
        if (comicPages.length > 0) {
            comicPageElement.src = comicPages[currentPageIndex];
            pageInfoElement.textContent = `Halaman ${currentPageIndex + 1} dari ${comicPages.length}`;
        } else {
            comicPageElement.src = 'https://via.placeholder.com/800x1200?text=Tidak+Ada+Halaman';
            pageInfoElement.textContent = '';
        }


        // Mengatur status tombol 'Sebelumnya' dan 'Berikutnya'
        prevButton.disabled = currentPageIndex === 0;
        nextButton.disabled = currentPageIndex === comicPages.length - 1;
    }

    // Event Listener untuk tombol 'Sebelumnya'.
    prevButton.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateComicPage();
        }
    });

    // Event Listener untuk tombol 'Berikutnya'.
    nextButton.addEventListener('click', () => {
        if (currentPageIndex < comicPages.length - 1) {
            currentPageIndex++;
            updateComicPage();
        }
    });

    // Panggil fungsi untuk memuat komik saat halaman dimuat
    loadComic();
});