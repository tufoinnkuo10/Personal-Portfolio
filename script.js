window.onload = () => {
  const burger = document.querySelector('#hamburger');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.add('showing');
  });

  const iconx = document.querySelector('.iconx');

  iconx.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('showing');
  });

  const mobileMenuList = document.querySelector('.mobile-menu ul');

  mobileMenuList.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('showing');
  });
};
