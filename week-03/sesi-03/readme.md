# Laporan Praktikum Pengembangan Situs Web I
## Minggu 3 Sesi 3: Validasi Native dan Aksesibilitas Form

- **Nama**: [Nama Lengkap Anda]
- **NIM**: [NIM Anda]
- **Program Studi**: D4 Teknologi Rekayasa Perangkat Lunak

---

### Gambaran Umum dan Penyiapan Halaman
Praktikum Minggu 3 Sesi 3 melanjutkan formulir pendaftaran kegiatan kampus dengan menerapkan mekanisme validasi bawaan peramban (HTML5 Native Constraints) dan standar aksesibilitas interaksi papan ketik. 

Halaman dijalankan melalui server lokal (Live Server). Seluruh elemen kontrol dihubungkan dengan berkas stylesheet eksternal yang mengatur indikator visual `focus-visible`, memastikan setiap bidang yang aktif memiliki cincin fokus berkontras tinggi dan mudah dikenali.

---

### Hasil Pengujian Validasi Native dan Batasan Nilai
Pengujian dilakukan secara bertahap pada setiap kontrol untuk melihat respons peramban dalam menolak data yang tidak sesuai format:

1. **Pengujian Kuantitas Tiket (`type="number"`)**:
   - Memasukkan angka 0 atau 6: Peramban menolak pengiriman data dan memunculkan peringatan batasan nilai minimal 1 dan maksimal 5.
   - Memasukkan angka desimal 1.5: Peramban menolak karena atribut `step="1"` hanya mengizinkan bilangan bulat.
   - Memasukkan angka 1 atau 5: Formulir menerima input tersebut sebagai batas valid.

2. **Pengujian Format Kode Peserta (`pattern="[0-9]{6}"`)**:
   - Memasukkan nilai `12345` (kurang dari 6 digit) atau `abc123` (mengandung huruf): Formulir langsung menolak submit dan meminta pengguna mencocokkan format yang diminta.
   - Memasukkan nilai dengan nol di awal seperti `001234`: Peramban menerima nilai tersebut secara utuh tanpa menghilangkan karakter nol karena bidang ini menggunakan `type="text"`, bukan numerik.
   - **Peran `inputmode="numeric"`**: Perlu digarisbawahi bahwa `inputmode` hanya berfungsi memunculkan papan ketik angka pada perangkat layar sentuh/seluler, namun tidak bertindak sebagai validasi data. Validasi format angka sepenuhnya ditegakkan oleh atribut `pattern`.

3. **Keterhubungan Aksesibilitas (`aria-describedby`)**:
   - Elemen input kode peserta dikaitkan langsung dengan petunjuk `<small id="kode-help">` melalui atribut `aria-describedby="kode-help"`. Pada panel Accessibility di DevTools peramban, terlihat bahwa deskripsi petunjuk terbaca mendampingi nama kontrol input sehingga ramah bagi pengguna pembaca layar (*screen reader*).

---

### Evaluasi Aksesibilitas Papan Ketik (Keyboard Navigation)
Pengujian navigasi dilakukan murni hanya menggunakan papan ketik tanpa menyentuh kursor mouse:
- Pengguna dapat melompat dari bilah URL ke seluruh elemen kontrol input secara berurutan menggunakan tombol **Tab**, dan bergerak mundur dengan **Shift + Tab**.
- Pemilihan opsi radio pada grup mode kehadiran serta pemilihan menu dropdown dilakukan menggunakan **tombol panah atas/bawah**.
- Pemilihan kotak centang (checkbox) topik diaktifkan menggunakan tombol **Space**.
- Formulir dapat dikirimkan secara langsung menggunakan tombol **Enter** pada saat fokus berada di tombol submit[cite: 8].
- Gaya penanda fokus `outline: 3px solid #175cd3` dengan `outline-offset: 3px` terbukti sangat membantu pelacakan posisi navigasi pengguna tanpa merusak tata letak dokumen[cite: 8].

---

### Eksperimen Bypass Sisi Klien dan Urgensi Validasi Server
Sebagai bagian dari eksperimen kegagalan terarah, atribut `required` dan batasan `min`/`max` sempat dihapus secara paksa melalui panel Elements pada DevTools peramban[cite: 8]. Hasilnya, peramban mengizinkan formulir kosong terkirim[cite: 8].

Hal ini memberikan kesimpulan teknis yang sangat penting: **Validasi HTML di sisi klien (browser) hanya berfungsi sebagai pemandu kenyamanan pengguna (*user experience*) agar tidak salah memasukkan data, bukan sebagai benteng keamanan utama[cite: 8].** Pengguna dapat dengan mudah mematikan JavaScript atau memanipulasi atribut DOM di browser[cite: 8]. Oleh sebab itu, sistem backend di sisi server tetap mutlak wajib memvalidasi ulang seluruh data yang masuk sebelum diproses atau disimpan ke basis data[cite: 8].

---

### AI Use Statement
Penggunaan kecerdasan artifisial pada sesi ini ditujukan untuk menelaah perbedaan fungsional antara atribut `inputmode` dan validasi ekspresi reguler `pattern`, serta mengevaluasi panduan WCAG 2.2 terkait penggunaan `aria-describedby`[cite: 8]. Semua saran diterapkan dan diverifikasi secara langsung melalui pengujian keyboard dan validator dokumen[cite: 8]. Tidak ada data pribadi atau kredensial yang dibagikan ke dalam model kecerdasan artifisial[cite: 8].