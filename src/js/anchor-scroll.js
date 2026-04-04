document.addEventListener('click', function (event) {
  const link = event.target.closest('a');
  if (!link || !link.hash) return;

  const target = document.querySelector(link.hash);
  if (!target) return;

  event.preventDefault();

  target.scrollIntoView({ behavior: 'smooth' });

  setTimeout(function () {
    window.location.hash = link.hash;
  }, 700);
});
