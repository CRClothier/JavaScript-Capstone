import '../assets/css/styles.css';
import makeProductList from './makeProductList.js';
import '../assets/css/comment.css';
import setEvents from './displaySection.js';
import { sendLikes } from './commentAPI.js';
import './displayPopup.js';
import { updateProductsArray } from './productCounter.js';

setEvents();
makeProductList('smartphones');
makeProductList('laptops');
makeProductList('lighting');
updateProductsArray();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-heart')) {
    const itemID = e.target.getAttribute('item-id');
    sendLikes(itemID);
    e.target.classList.remove('bi-heart');
    e.target.classList.add('bi-heart-fill');
    makeProductList('smartphones');
    makeProductList('laptops');
    makeProductList('lighting');
  }
});