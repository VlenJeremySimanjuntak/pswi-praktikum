# Laporan Praktikum Pengembangan Situs Web I
## Minggu 4 Sesi 2: Selector, Cascade, dan Box Model

- **Nama**: [Nama Lengkap Anda]
- **NIM**: [NIM Anda]
- **Program Studi**: D4 Teknologi Rekayasa Perangkat Lunak

---

### Ringkasan Kegiatan dan Pengamatan
Praktikum Minggu 4 Sesi 2 difokuskan pada pembedahan kalkulasi internal peramban dalam memproses stylesheet eksternal, menyelesaikan konflik aturan selektor melalui spesifisitas, serta mengukur dimensi geometris elemen menggunakan box model[cite: 1]. Seluruh pengujian diamati langsung menggunakan DevTools pada peramban melalui koneksi server lokal[cite: 1].

---

### Matriks Pengujian Mandiri
Berdasarkan serangkaian uji coba yang dijalankan, berikut hasil perbandingan antara kondisi yang diharapkan dan hasil aktual[cite: 1]:

| Kasus / Skenario | Input / Tindakan | Hasil yang Diharapkan | Hasil Aktual | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Koneksi CSS Normal** | Menghubungkan berkas `style.css` via `<link>` | Berkas termuat berstatus 200 di tab Network dan latar berubah | Permintaan 200 OK tercatat di Network, latar body berubah #f4f6fa | Lulus[cite: 1] |
| **Kasus Gagal: CSS Path Salah** | Sengaja mengubah href menjadi `href="style-salah.css"` | Status 404 Not Found pada tab Network dan tata letak menjadi polos | Permintaan berstatus merah 404 di Network, styling tidak teraplikasi | Lulus[cite: 1] |
| **Konflik Specificity** | Menerapkan `.card p` (bobot 0-1-1) dan `.notice` (bobot 0-1-0) | Aturan lebih spesifik menang (.card p) meski urutan notice di bawah | Teks berwarna ungu, deklarasi warna oranye pada .notice dicoret | Lulus[cite: 1] |
| **Kasus Batas: content-box** | `.card` diberi width 240px, padding 16px, border 2px (default) | Total lebar fisik elemen terhitung mengembang menjadi 276px | Panel Computed mencatat lebar total 276px (240 + 32 + 4) | Lulus[cite: 1] |
| **Kasus Batas: border-box** | Menambahkan `box-sizing: border-box;` pada class `.card` | Total lebar fisik elemen terkunci tepat sebesar 240px | Panel Computed mengonfirmasi lebar fisik tetap 240px | Lulus[cite: 1] |

---

### Analisis Teknis Hasil Pengamatan
1. **Mekanisme Cascade dan Specificity**:
   Percobaan membuktikan bahwa urutan penulisan kode CSS (cascade) hanya menjadi penentu jika dua aturan memiliki nilai bobot spesifisitas yang seimbang[cite: 1]. Dalam kasus latihan, selector turunan `.card p` menggabungkan satu penanda class dan satu penanda tag HTML (nilai 0-1-1), yang secara matematis lebih kuat daripada `.notice` yang hanya membawa satu penanda class (nilai 0-1-0)[cite: 1]. Akibatnya, peramban mencoret (*strikethrough*) aturan warna oranye dan mempertahankan warna ungu[cite: 1].

2. **Dinamika Model Kotak (Box Model)**:
   Secara baku (*default*), peramban menerapkan model `content-box` di mana properti `width` hanya mengatur ruang konten teks murni[cite: 1]. Akibatnya, penambahan padding dan border akan memperbesar ukuran fisik luar kotak di layar[cite: 1]. Penerapan `box-sizing: border-box` mengubah kalkulasi tersebut: nilai batas $240\text{px}$ dijadikan acuan total terluar, sehingga ruang konten di dalam secara otomatis menyesuaikan ukurannya menjadi $240 - 32 - 4 = 204\text{px}$[cite: 1].

---

### AI Use Statement
Kecerdasan artifisial dimanfaatkan untuk mendalami formula perhitungan bobot spesifisitas CSS menurut pedoman MDN serta memverifikasi alur kalkulasi dimensi border-box[cite: 1]. Seluruh skenario pengujian diverifikasi secara mandiri melalui panel Elements, Styles, Network, dan Computed pada peramban[cite: 1]. Tidak ada data pribadi atau rahasia yang diunggah ke alat AI[cite: 1].