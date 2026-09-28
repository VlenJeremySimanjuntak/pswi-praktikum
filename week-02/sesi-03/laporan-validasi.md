# Laporan Pengujian dan Validasi HTML (Minggu 2 Sesi 3)

## 1. Matriks Pengujian Fungsional
| Kasus Uji | Tindakan | Hasil yang Diharapkan | Status |
| :--- | :--- | :--- | :--- |
| Navigasi Multipage | Klik tautan bolak-balik antara index, kegiatan, dan kontak | Halaman berpindah mulus tanpa error 404 | Lulus |
| Aksesibilitas Keyboard | Menavigasi situs menggunakan Tab dan Enter tanpa mouse | Semua link dapat difokuskan dan diaktifkan | Lulus |
| Gambar Hilang (Fallback) | Mengubah src gambar ke nama file yang salah secara sengaja | Browser menampilkan teks alt yang deskriptif | Lulus |
| Tabel Semantik | Menginspeksi struktur caption, thead, tbody, th scope | Pembaca layar mampu mengaitkan data sel dengan header | Lulus |
| Pembesaran Zoom 200% | Mengubah zoom peramban menjadi 200% | Seluruh data teks dan tabel tetap terbaca tanpa terpotong | Lulus |

## 2. Hasil Validasi Nu HTML Checker
- `index.html`: Validasi berhasil (No errors or warnings to show).
- `kegiatan.html`: Validasi berhasil setelah menambahkan atribut caption pada tabel.
- `kontak.html`: Validasi berhasil tanpa kendala.

## 3. Sumber Aset dan Lisensi
- Gambar `images/lokakarya-html.jpg`: Dokumentasi pribadi / lisensi domain publik Unsplash (Foto kegiatan belajar mahasiswa).

## 4. AI Use Statement
Saya menggunakan AI untuk merekomendasikan skenario uji navigasi keyboard dan meninjau pesan warning tabel pada Nu HTML Checker. Kode dan atribut diuji secara mandiri di browser dan validator. Tidak ada data pribadi atau rahasia yang dikirimkan.