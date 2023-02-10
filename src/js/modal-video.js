(() => {
  const refs = {
    openAboutBtn: document.querySelector('[data-how-made-open]'),
    closeAboutBtn: document.querySelector('[data-how-made-close]'),
    about: document.querySelector('[data-how-made]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

  function toggleAbout() {
    document.body.classList.toggle('modal-open');
    refs.about.classList.toggle('is-hidden');
  }
})();
