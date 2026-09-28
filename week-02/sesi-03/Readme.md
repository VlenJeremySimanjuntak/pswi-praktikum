# Praktikum Pengembangan Situs Web I (4141103)
## Minggu 2 Sesi 3: Tautan, Gambar, Tabel, Metadata, dan Validasi HTML

### 1. Identitas Mahasiswa
- **Nama**: [Nama Lengkap Mahasiswa]
- **NIM**: [NIM Mahasiswa]
- **Program Studi**: D4 Teknologi Rekayasa Perangkat Lunak
- **Tautan Repositori**: [Tautan GitHub Repositori Utama]

---

### 2. Deskripsi Proyek
Proyek ini merupakan pengembangan situs web multi-halaman (*multipage*) untuk Komunitas Web Mahasiswa yang terdiri dari tiga halaman utama: Beranda (`index.html`), Jadwal Kegiatan (`kegiatan.html`), dan Informasi Kontak (`kontak.html`). Seluruh halaman disusun menggunakan struktur semantik HTML5 murni, navigasi relatif yang konsisten, penataan media gambar yang terstruktur, tabel data tabular, dan metadata unik pada setiap halaman.

---

### 3. Cara Menjalankan Halaman
1. Buka folder `pswi-praktikum` atau folder `sesi-03` menggunakan Visual Studio Code.
2. Pastikan ekstensi *Live Server* telah terpasang.
3. Klik kanan pada berkas `index.html` lalu pilih **Open with Live Server**.
4. Halaman akan terbuka pada peramban melalui server lokal dengan alamat protokol `http://localhost:5500/` (bukan menggunakan protokol file fisik `file:///`).
5. Navigasi antarhalaman dapat diuji dengan mengklik tautan pada bilah menu navigasi atau menggunakan papan ketik (*keyboard*).

---

### 4. Struktur Berkas dan Direktori
```text
sesi-03/
├── index.html            # Halaman utama (Beranda) profil organisasi
├── kegiatan.html         # Halaman jadwal kegiatan, tautan eksternal, dan media
├── kontak.html           # Halaman informasi kontak, alamat semantik, dan jam buka
├── images/               # Direktori penyimpanan media gambar lokal
│   └── lokakarya-html.jpg# Gambar dokumentasi kegiatan lokakarya
├── README.md             # Dokumentasi umum, lisensi aset, dan refleksi
└── laporan-validasi.md   # Laporan audit pengujian fungsional dan validator W3C