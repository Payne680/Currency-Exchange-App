const addCurrencyBtn = document.querySelector('.add-currency-btn');

// eslint-disable-next-line no-unused-vars
function addCurrencyBtnClick(event) {
  addCurrencyBtn.classList.toggle('open');
}

addCurrencyBtn.addEventListener('click', addCurrencyBtnClick);

export default addCurrencyBtnClick;
