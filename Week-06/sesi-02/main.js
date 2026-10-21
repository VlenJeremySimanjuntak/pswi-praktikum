const btnOverflow = document.getElementById('btn-overflow');
const overflowBox = document.getElementById('overflow-box');
const btnLongText = document.getElementById('btn-longtext');
const catalogList = document.getElementById('catalog-list');
const testForm = document.getElementById('test-form');
const formFeedback = document.getElementById('form-feedback');

btnOverflow.addEventListener('click', () => {
  overflowBox.classList.toggle('is-broken');
  if (overflowBox.classList.contains('is-broken')) {
    overflowBox.textContent = 'Status Rusak (Before): Elemen ini dipaksa width: 900px sehingga memicu scroll horizontal di layar sempit.';
  } else {
    overflowBox.textContent = 'Status Normal (After): Lebar kotak ini mengikuti max-width: 100% sehingga aman di layar 320px.';
  }
});

btnLongText.addEventListener('click', () => {
  const newCard = document.createElement('article');
  newCard.className = 'card';
  newCard.innerHTML = `
    <img src="https://picsum.photos/seed/del50/600/340" alt="Ilustrasi Pengujian Data Panjang">
    <div class="card-body">
      <span class="badge">Uji Kasus Batas</span>
      <h2>Kartu Uji Teks Tanpa Spasi</h2>
      <p>KODE_REGISTRASI_PRAKTIKUM_SANGAT_PANJANG_TANPA_SPASI_UNTUK_MEMBUKTIKAN_MIN_WIDTH_0_PADA_GRID_TETAP_AMAN_1234567890</p>
      <a href="#form-uji" class="card-link">Ajukan Peminjaman &rarr;</a>
    </div>
  `;
  catalogList.appendChild(newCard);
});

testForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const namaInput = document.getElementById('nama-lengkap');
  const nilaiNama = namaInput.value.trim();

  if (!nilaiNama) {
    formFeedback.textContent = 'Peringatan: Nama dan NIM tidak boleh kosong!';
    formFeedback.style.color = '#dc2626';
    namaInput.focus();
    return;
  }

  formFeedback.textContent = `Berhasil: Pengajuan atas nama "${nilaiNama}" telah dicatat.`;
  formFeedback.style.color = '#16a34a';
});