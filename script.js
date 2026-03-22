const menuToggle = document.querySelector('.menu-toggle');
const listHeader = document.querySelector('.list-header');

menuToggle.addEventListener('click', () => {
  listHeader.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  listHeader.classList.remove('show');
});
