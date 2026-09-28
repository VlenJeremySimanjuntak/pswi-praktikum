# Catatan Pengujian Struktur Semantik (Minggu 2 Sesi 2)

## 1. Pemeriksaan DevTools
- Bahasa Dokumen (`lang="id"`): Lulus
- Judul Tab Browser (`title`): Lulus
- Hierarki Heading (`h1` -> `h2` -> `h3`): Lulus
- Landmark HTML5 (`header`, `nav`, `main`, `aside`, `footer`): Ditemukan
- Navigasi Internal (`href="#id"`): Lulus

## 2. Eksperimen Kegagalan Terarah
| Gejala | Bukti | Penyebab | Perbaikan | Hasil |
| :--- | :--- | :--- | :--- | :--- |
| Tautan navigasi tidak meloncat | URL berubah ke #tentangg namun halaman diam | Nilai href tidak cocok dengan atribut id section | Menyelaraskan atribut id menjadi "tentang" | Berhasil |
| Error pada Validator W3C | Pesan: Element main not allowed as child of header | Elemen `<main>` ditaruh di dalam `<header>` | Memindahkan tag `<main>` sejajar setelah `<header>` | Lulus Validasi |
| Penutupan otomatis oleh DOM | Tag penutup `</article>` hilang pada source code | Tag tidak ditutup manual | Menambahkan `</article>` penutup secara eksplisit | Bersih |

## 3. AI Use Statement
Tidak menggunakan bantuan AI / (Atau cantumkan alat, pertanyaan prompt, dan cara verifikasinya).