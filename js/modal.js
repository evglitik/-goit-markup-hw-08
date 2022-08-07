(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener('click', modalOpen);
  refs.closeModalBtn.addEventListener('click', modalCloseBtn);

  function modalOpen() {
    refs.modal.classList.remove('is-hidden');
    refs.modal.addEventListener('click', modalCloseBg)
  }

  function modalCloseBtn() {
    refs.modal.classList.add('is-hidden');
  }

  function modalCloseBg(e) {
    if (e.target === refs.modal) {
      refs.modal.removeEventListener('click', modalCloseBg);
      modalCloseBtn();
    }
  }
})();