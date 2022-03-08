import { fetchSingleProduct, sendLikes } from './commentAPI.js';
import displayPopup from './displayPopup.js';

const buttonComment = document.getElementById('submit');

buttonComment.addEventListener('click', () => {
  const id = 1;
  fetchSingleProduct(id).then((product) => {
    displayPopup(product);
  });
});

sendLikes(3);
