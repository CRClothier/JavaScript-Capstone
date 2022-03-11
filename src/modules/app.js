import '../assets/css/styles.css';
import makeProductList from './makeProductList.js';
import '../assets/css/comment.css';
import setEvents from './displaySection.js';
import { sendLikes } from './commentAPI.js';
import { updateProductsArray } from './productCounter.js';
import './commentPopup.js';
import './menu.js';

setEvents();
makeProductList('smartphones');
makeProductList('laptops');
makeProductList('lighting');
updateProductsArray();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-heart')) {
    const itemID = e.target.getAttribute('item-id');
    sendLikes(itemID);
    const card = e.target.closest('div');
    const countItem = card.querySelector('.likes-count');
    countItem.textContent = Number(countItem.textContent) + 1;
    e.target.classList.remove('bi-heart');
    e.target.classList.add('bi-heart-fill');
  }
});

document.addEventListener('load', () => {
  makeProductList('smartphones');
  makeProductList('laptops');
  makeProductList('lighting');
});
