import { fetchSingleProduct, sendLikes } from './commentAPI.js';
import { displayPopup, drawStars } from './displayPopup.js';

const buttonComment = document.getElementById('submit');

buttonComment.addEventListener('click', () => {
  const id = 1;
  fetchSingleProduct(id).then((product) => {
    displayPopup(product);
    drawStars(product.rating.rate);
  });
});

sendLikes(3);
