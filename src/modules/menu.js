document.addEventListener('click', (e) => {
  const menuOpen = document.querySelector('.bi-list');
  const menuClose = document.querySelector('.menu-close');
  const menu = document.querySelector('.categories');
  if (e.target.classList.contains('bi-list')) {
    menu.style.display = 'block';
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';
  }
  if (e.target.classList.contains('menu-close')) {
    menu.style.display = 'none';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
  }
});
