window.onload = () => {
  const burger = document.querySelector('#hamburger');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.add('show');

  } );

  const iconx = document.querySelector(".iconx");

  iconx.addEventListener("click", (event)=>{
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.remove("show");
  });
};
