const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const welcomeOverlay = document.getElementById('overlay-welcome');

if (!Cookies.get("ve-kincardine-essentials-welcome")) {
  modal.classList.add('active');
  welcomeOverlay.classList.add('active');
}

for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', function() {
    const modal = document.querySelector(this.getAttribute('data-modal-target'));
    openModal(modal); 
  })
}

welcomeOverlay.addEventListener('click', function() {
  const modals = document.querySelectorAll('.modal.active');
  for (let i = 0; i < modals.length; i++) {
    closeModal(modals[i]);
  }
})

for (let i = 0; i < closeModalButtons.length; i++) {
  closeModalButtons[i].addEventListener('click', function() {
    const modal = document.querySelector(this.getAttribute('data-close-button'));
    closeModal(modal);
  }) 
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  welcomeOverlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  welcomeOverlay.classList.remove('active');
  Cookies.set("ve-kincardine-essentials-welcome", true, {expires: 31});
}