(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-buy-now-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
