
// TAHAP 1: KARDUS VARIABEL (Simpan Skor)
let skor = 0;

// TAHAP 2: DETEKTIF DOM (Temukan Target di HTML)
const tombolDukung = document.getElementById("tombol-dukung");
const teksSkor = document.getElementById("angka-skor");

// TAHAP 3: PASANG CCTV EVENT (Respons Klik)
tombolDukung.addEventListener("click", () => {
    
    skor = skor + 1; 
    
    teksSkor.innerText = skor;
    
    if (skor === 5) {
        alert("Wah, luar biasa! Terima kasih atas 5 dukungannya!");
    }
});