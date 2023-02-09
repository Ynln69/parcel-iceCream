(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-franchise-open]'),
    closeModalBtn: document.querySelector('[data-franchise-close]'),
    modal: document.querySelector('[data-franchise]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
