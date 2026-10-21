const btnToggle = document.getElementById('btn-toggle-container');
const cardWrapper = document.getElementById('card-wrapper');
const statusCard = document.getElementById('status-card');
const statusTitle = document.getElementById('status-title');
const containerStatus = document.getElementById('container-status');

btnToggle.addEventListener('click', () => {
  cardWrapper.classList.toggle('narrow');

  if (cardWrapper.classList.contains('narrow')) {
    statusCard.classList.remove('is-default');
    statusCard.classList.add('is-narrow');
    statusTitle.textContent = 'Status Kontainer: Sempit (20rem / ~320px)';
    containerStatus.textContent = 'Kondisi @container (min-width: 30rem) tidak aktif. Padding kartu mengecil menjadi 1rem.';
  } else {
    statusCard.classList.remove('is-narrow');
    statusCard.classList.add('is-default');
    statusTitle.textContent = 'Status Kontainer: Lebar Standar (100%)';
    containerStatus.textContent = 'Kondisi @container (min-width: 30rem) aktif. Padding kartu bertambah menjadi 1.75rem.';
  }
});