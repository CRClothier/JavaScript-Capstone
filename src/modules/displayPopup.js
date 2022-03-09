import constructImageSlide from './imageSlider.js';

const popup = document.getElementById('template-item-detail');

const detail = popup.content.cloneNode(true);
const imagesHolder = detail.querySelector('.wrapper-image');
const itemImage = detail.querySelector('.popup-image');
const itemCategory = detail.querySelector('.item-category span');
const inStock = detail.querySelector('.item-instock span');
const price = detail.querySelector('.item-price span');
const description = detail.querySelector('.item-description');
const title = detail.querySelector('.item-title');
const ratingElement = detail.querySelector('.stars-holder');

const itemDetail = document.querySelector('.item-detail-box');
const commentsContainer = document.querySelector(
  '.wrapper-customers-comment',
);

const displayContent = (product) => {
  itemImage.src = product.thumbnail;
  itemCategory.textContent = product.category;
  inStock.textContent = product.stock;
  price.textContent = product.price;
  description.textContent = product.description;
  title.textContent = product.title;
  constructImageSlide(imagesHolder, product.id);
  itemDetail.appendChild(detail);
};

const drawStars = (rating) => {
  const icons = ratingElement.querySelectorAll('.bi');
  const fillStars = Math.floor(rating);
  let halfStars = 0;
  if (rating > fillStars) halfStars = 1;
  icons.forEach((icon, index) => {
    if (index < fillStars) {
      icon.classList.add('bi-star-fill');
    } else if (halfStars === 1 && index === fillStars) {
      icon.classList.add('bi-star-half');
    } else icon.classList.add('bi-star');
  });
};

const displayComments = (customerComment) => {
  const commentTemplate = document.querySelector('#template-comment');
  const comment = commentTemplate.content.cloneNode(true);
  const customerName = comment.querySelector('.customer-name strong');
  const userComment = comment.querySelector('.customer-comment');
  const dataOfComment = comment.querySelector(
    '.customer-comment-date',
  );
  customerName.textContent = customerComment.username;
  userComment.textContent = customerComment.comment;
  dataOfComment.textContent = customerComment.creation_date;
  commentsContainer.appendChild(comment);
};

export { displayContent, displayComments, drawStars };
