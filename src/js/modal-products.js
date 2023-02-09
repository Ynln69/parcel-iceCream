/* PORDUCT MODAL-ICECREAM*/
(() => {
  const refs = {
    openIcecreamBtn: document.querySelector('[data-icecream-open]'),
    closeIcecreamBtn: document.querySelector('[data-icecream-close]'),
    icecream: document.querySelector('[data-icecream]'),
  };

  refs.openIcecreamBtn.addEventListener('click', toggleIcecream);
  refs.closeIcecreamBtn.addEventListener('click', toggleIcecream);

  function toggleIcecream() {
    document.body.classList.toggle('modal-open');
    refs.icecream.classList.toggle('is-hidden');
  }
})();

/* PORDUCT MODAL-ICECOFFEE*/
(() => {
  const refs = {
    openIcecoffeeBtn: document.querySelector('[data-icecoffee-open]'),
    closeIcecoffeeBtn: document.querySelector('[data-icecoffee-close]'),
    icecoffee: document.querySelector('[data-icecoffee]'),
  };

  refs.openIcecoffeeBtn.addEventListener('click', toggleIcecoffee);
  refs.closeIcecoffeeBtn.addEventListener('click', toggleIcecoffee);

  function toggleIcecoffee() {
    document.body.classList.toggle('modal-open');
    refs.icecoffee.classList.toggle('is-hidden');
  }
})();

/* PORDUCT MODAL-MILKSHAKE*/
(() => {
  const refs = {
    openMilkshakeBtn: document.querySelector('[data-milk-open]'),
    closeMilkshakeBtn: document.querySelector('[data-milk-close]'),
    milkshake: document.querySelector('[data-milk]'),
  };

  refs.openMilkshakeBtn.addEventListener('click', toggleMilkshake);
  refs.closeMilkshakeBtn.addEventListener('click', toggleMilkshake);

  function toggleMilkshake() {
    document.body.classList.toggle('modal-open');
    refs.milkshake.classList.toggle('is-hidden');
  }
})();
