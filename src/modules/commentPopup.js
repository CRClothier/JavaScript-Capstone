import { fetchSingleProduct, getComments } from './commentAPI.js';
import {
  displayContent,
  displayComments,
  drawStars,
  changeThumbnails,
} from './displayPopup.js';
import submitComment from './commentSubmit.js';
import Counter from './count.js';

const Count = new Counter();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('comments')) {
    const buttonComment = document.getElementById('submit');
    const { id } = e.target;
    buttonComment.setAttribute('item_id', id);
    const popup = document.querySelector('.comments-popup ');
    popup.style.display = 'block';

    fetchSingleProduct(id).then((product) => {
      displayContent(product);
      drawStars(product.rating);
    });

    getComments(id).then((comments) => {
      if (comments) {
        comments.forEach((comment) => displayComments(comment));
        Count.getCommentsCount(id);
      }
    });
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('slide-img')) {
    changeThumbnails(e.target.src);
  }
  if (e.target.id === 'submit') {
    const id = e.target.getAttribute('item_id');
    const popup = document.querySelector('.comments-popup');
    const message = document.querySelector('.submit-status');
    message.textContent = '';
    e.preventDefault();
    if (submitComment(id)) {
      popup.style.display = 'none';
    }
  }
});

document.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('slide-img')) {
    changeThumbnails(e.target.src);
  }
});

document.addEventListener('click', (e) => {
  const menuOpen = document.querySelector('.bi-list');
  const menu = document.querySelector('.categories');
  const menuClose = document.querySelector('.bi-x');
  if (e.target.classList.contains('link')) {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  }
});
