# Praktikum Pengembangan Situs Web I (4141103)
## Minggu 6 Sesi 3: Gambar Responsif, Fluid Sizing, dan Preferensi Pengguna

### 1. Cara Menjalankan
1. Buka folder `pswi-week-06/sesi-03/` menggunakan Visual Studio Code.
2. Pastikan file gambar `assets/foto-320.jpg` dan `assets/foto-640.jpg` sudah tersedia.
3. Klik kanan pada `index.html` dan pilih **Open with Live Server**.
4. Buka **DevTools (F12)**, matikan *cache* pada tab **Network**, dan periksa properti gambar melalui tab **Console** atau **Elements**.

### 2. Penjelasan Konsep & Implementasi
- **Gambar Fleksibel & Kandidat Resolusi:** Aturan `img { max-width: 100%; height: auto; }` memastikan rasio aspek gambar tetap terjaga tanpa overflow. Atribut `srcset` menyediakan kandidat `320w` dan `640w`, sedangkan `sizes` menginstruksikan perkiraan lebar render browser pada tiap rentang breakpoint.
- **Fluid Sizing (`clamp`):** Heading `h1` menggunakan `clamp(1.75rem, 1.2rem + 2vw, 3rem)` sehingga ukuran teks bertransisi halus mengikuti viewport tanpa melampaui batas batas bawah (1.75rem) dan batas atas (3rem).
- **Container Query:** `.card-wrap` ditetapkan sebagai konteks kontainer via `container-type: inline-size`. Aturan `@container (min-width: 30rem)` memperbesar padding kartu saat lebar kontainer kartu mencapai 30rem, terlepas dari ukuran total viewport browser.
- **Preferensi Pengguna (`prefers-reduced-motion`):** Aturan `@media (prefers-reduced-motion: reduce)` menonaktifkan properti `transition` dan `transform: hover` guna memenuhi standar aksesibilitas bagi pengguna dengan sensitivitas gerakan vestibular.

### 3. Matriks Hasil Pengujian

| Kasus | Kondisi / Tindakan | Harapan | Hasil Aktual | Status / Bukti |
| :--- | :--- | :--- | :--- | :--- |
| **Gambar Path & Resolusi** | Periksa Network saat layar diset ke 320px dan 1200px (disable cache). | Aset termuat tanpa 404; browser memilih kandidat sesuai ukuran display. | Browser memuat `foto-320.jpg` pada layar kecil dan `foto-640.jpg` pada layar lebar (`currentSrc` valid). | Sesuai harapan (`bukti/gambar-network.png`) |
| **Container Sempit / Lebar** | Klik tombol *Ubah Ukuran Kontainer Kartu* tanpa mengubah viewport browser. | Query container bekerja sesuai ruang elemen pembungkusnya, bukan viewport. | Padding kartu mengecil saat kontainer disempitkan ke 20rem dan membesar saat kembali ke 100%. | Sesuai harapan (`bukti/container-query.png`) |
| **Fluid Font & Zoom** | Zoom halaman hingga 200% pada DevTools dan amati tab Computed. | Teks tetap terbaca utuh, hierarki terjaga, tidak memicu scroll horizontal tak diinginkan. | Font clamp menyesuaikan proporsi, teks melipat rapi (`overflow-wrap`). | Sesuai harapan (`bukti/zoom-font.png`) |
| **Reduced Motion** | Emulasikan `prefers-reduced-motion: reduce` melalui menu Rendering di DevTools. | Transisi opsional pada tombol dan kartu dihilangkan. | Efek kartu terangkat saat hover mati seketika tanpa menghilangkan isi konten kartu. | Sesuai harapan (`bukti/reduced-motion.png`) |

### 4. AI Use Statement
- **Alat:** Gemini AI
- **Tujuan:** Merancang kode HTML semantik, aturan CSS fluid sizing, sintaks container query, serta matriks pengujian pengamatan.
- **Bagian Bantuan:** Pembuatan struktur `index.html`, stylesheet responsif `style.css`, serta pengujian event di `main.js`.
- **Verifikasi:** Seluruh kode dijalankan di server lokal, diverifikasi lewat Chrome DevTools (Device Mode, Rendering Tab, Network 200 OK), serta dipastikan tidak memicu broken layout pada 320px.