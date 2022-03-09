import { fetchSingleProduct, getComments } from './commentAPI.js';
import {
  displayContent,
  displayComments,
  drawStars,
} from './displayPopup.js';
import submitComment from './commentSubmit.js';
import Counter from './count.js';

const Count = new Counter();

const buttonComment = document.getElementById('submit');

buttonComment.addEventListener('click', () => {
  const id = 8;
  fetchSingleProduct(id).then((product) => {
    displayContent(product);
    drawStars(product.rating);
  });
});

buttonComment.addEventListener('click', () => {
  getComments(1).then((comments) => {
    comments.forEach((comment) => displayComments(comment));
  });
  Count.getCommentsCount(1);
});

buttonComment.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(submitComment());
});
