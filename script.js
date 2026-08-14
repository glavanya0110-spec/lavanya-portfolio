
const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const cats = card.dataset.cat || '';
      const show = filter === 'all' || cats.includes(filter);
      card.classList.toggle('hidden-card', !show);
    });
  });
});
