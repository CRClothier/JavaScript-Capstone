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
    const overlay = document.querySelector('.overlay');
    popup.style.display = 'block';
    overlay.classList.toggle('overlay-style');

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
  if (
    e.target.classList.contains('link')
    && window.screen.width < 768
  ) {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  }
});

document.addEventListener('click', (e) => {
  const id = e.target.getAttribute('item_id');
  const popup = document.querySelector('.comments-popup');
  const message = document.querySelector('.submit-status');
  const overlay = document.querySelector('.overlay');

  if (e.target.classList.contains('popup-close')) {
    popup.style.display = 'none';
    overlay.classList.toggle('overlay-style');
  }

  if (e.target.id === 'submit') {
    message.textContent = '';
    e.preventDefault();
    if (submitComment(id)) {
      popup.style.display = 'none';
      overlay.classList.toggle('overlay-style');
    }
  }
});
