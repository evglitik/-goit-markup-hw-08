(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-open-menu"),
    closeMenuBtn: document.querySelector(".mobail-menu__close-btn"),
    menu: document.querySelector(".mobail-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("mobail-menu--open");
  }
})();