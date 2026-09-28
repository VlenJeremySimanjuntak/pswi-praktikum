# Laporan Praktikum Pengembangan Situs Web I
## Minggu 3 Sesi 2: Formulir Dasar dan Pengujian Perilaku Kontrol

- **Nama**: [Nama Lengkap Anda]
- **NIM**: [NIM Anda]
- **Program Studi**: D4 Teknologi Rekayasa Perangkat Lunak

---

### Gambaran Umum dan Cara Menjalankan Halaman
Pada praktikum sesi ini, fokus pengerjaan diarahkan pada perancangan antarmuka formulir pendaftaran kegiatan kampus yang sepenuhnya berbasis kontrol native HTML5[cite: 7]. Seluruh struktur dibangun dengan memperhatikan kejelasan relasi label serta semantik elemen interaktif[cite: 7].

Halaman ini dijalankan melalui server lokal menggunakan ekstensi Live Server pada Visual Studio Code, sehingga diakses melalui protokol HTTP lokal (`http://127.0.0.1:5500/...` atau `http://localhost:...`)[cite: 7]. Pengujian fungsional awal membuktikan bahwa keterhubungan atribut `for` pada label dan atribut `id` pada elemen input bekerja dengan tepat: setiap kali teks label diklik, kursor fokus browser langsung berpindah aktif ke bidang kontrol yang dituju[cite: 7].

---

### Catatan Eksperimen Pengiriman Data dan Perilaku Form
Pengujian perilaku transmisi data dilakukan dengan mengamati susunan URL query string pada saat submit (`method="get"`) serta inspeksi objek `FormData` melalui tab Console DevTools peramban menggunakan perintah `const form = document.querySelector("form"); [...new FormData(form).entries()];`[cite: 7].

Dari serangkaian percobaan yang dilakukan, diperoleh beberapa catatan teknis[cite: 7]:
1. **Perilaku Tombol Radio**: Opsi kehadiran Luring dan Daring berhasil bekerja secara bergantian (eksklusif) karena keduanya disatukan di bawah nama grup data yang identik, yaitu `name="mode"`[cite: 7]. Peramban hanya meneruskan satu nilai pilihan yang aktif saat submit dilakukan[cite: 7].
2. **Eksperimen Penghapusan Atribut `name`**: Ketika atribut `name` pada kontrol input nama dihapus sementara, bidang input tersebut tetap dapat diketik di browser, tetapi nilainya sama sekali tidak muncul pada URL maupun entri `FormData`[cite: 7]. Hal ini membuktikan bahwa atribut `name` adalah kunci mutlak agar data kontrol dikirimkan ke server[cite: 7].
3. **Eksperimen Atribut `disabled`**: Penambahan atribut `disabled` pada bidang input menyebabkan kontrol terkunci secara visual dan datanya secara otomatis diabaikan oleh peramban selama proses pengiriman[cite: 7].

---

### Pembahasan Analisis dan Pertanyaan Mandiri
Berdasarkan hasil eksperimen dan pengamatan dokumen spesifikasi web, berikut analisis mengenai konsep kontrol formulir yang dipelajari[cite: 7]:

* **Penggunaan Tipe Data Telepon**: Bidang telepon dikonfigurasi menggunakan `type="tel"`, bukan `type="number"`[cite: 7]. Nomor telepon merupakan data identitas teks berdigit, bukan besaran kuantitas matematis yang membutuhkan operasi hitung. Jika menggunakan tipe angka (`number`), angka nol di awal nomor ponsel (seperti `08...`) akan dipangkas otomatis oleh browser sebagai *leading zero*. Selain itu, tipe telepon memungkinkan perangkat seluler menampilkan antarmuka keypad angka lengkap dengan karakter khusus seperti tanda plus (`+`) atau strip (`-`).
* **Perbedaan Fungsi `label` dan `legend`**: Elemen `<label>` terikat secara spesifik pada satu bidang kontrol kontrol input tertentu melalui atribut `for` dan `id`[cite: 7]. Sebaliknya, elemen `<legend>` bertindak sebagai judul kelompok kontekstual yang memayungi beberapa kontrol terkait di dalam sebuah `<fieldset>`, seperti pada kelompok pemilihan kehadiran atau kelompok pilihan minat topik[cite: 7].
* **Perbedaan Peran `id` dan `name`**: Atribut `id` adalah tanda pengenal unik dokumen (DOM) di sisi peramban yang dimanfaatkan untuk relasi aksesibilitas label, target penataan gaya CSS, serta manipulasi skrip[cite: 7]. Sementara itu, atribut `name` merupakan nama variabel parameter (*key*) yang dibawa oleh peramban dalam representasi pasangan *key-value* saat payload formulir dikirimkan[cite: 7].
* **Perilaku Checkbox yang Tidak Dicentang**: Pada saat formulir dikirimkan, kotak centang (*checkbox*) yang berada dalam status tidak aktif (*unchecked*) sepenuhnya dilewati oleh mesin peramban[cite: 7]. Namanya tidak akan dicantumkan di URL maupun entri pengiriman data, berbeda dengan input teks kosong yang tetap mengirimkan nama kunci beserta nilai string kosong.

---

### Validasi dan Dokumentasi Pengujian
Seluruh struktur dokumen pada `index.html` telah diperiksa secara mandiri melalui *W3C Nu HTML Checker*[cite: 7]. Hasil pengujian menunjukkan bahwa dokumen berstatus valid tanpa adanya temuan kesalahan struktur penutupan elemen maupun duplikasi pengenal ID[cite: 7]. Tangkapan layar dari hasil query URL, inspeksi Console `FormData`, serta hasil validasi disimpan pada direktori `bukti/`[cite: 7].

---

### AI Use Statement
Penggunaan kecerdasan artifisial pada pengerjaan sesi ini difokuskan untuk menelaah perilaku native peramban terkait pengabaian kontrol berstatus `disabled` dan mekanisme penanganan checkbox kosong menurut standar spesifikasi WHATWG[cite: 7]. Semua temuan dikonfirmasi secara mandiri melalui eksperimen langsung pada DevTools peramban dan validator W3C tanpa melibatkan data pribadi atau kredensial rahasia[cite: 7].