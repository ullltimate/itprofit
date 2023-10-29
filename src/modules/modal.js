export function showModal(){
  const modal = document.querySelector('.modal');
  const btnOpen = document.querySelector('.contacts-form__help-button');
  const btnClose = document.querySelector('.modal-content__close');
  const body = document.querySelector('body');

  btnOpen.addEventListener('click', (e) => {
    modal.classList.toggle('modal__open');
  });
  btnClose.addEventListener('click', () => {
    modal.classList.toggle('modal__open');
  })
}