const popup = document.getElementById('template-item-detail');

const detail = popup.content.cloneNode(true);

const itemImage = detail.querySelector('.popup-image');
const itemCategory = detail.querySelector('.item-category span');
const inStock = detail.querySelector('.item-instock span');
const price = detail.querySelector('.item-price span');
const description = detail.querySelector('.item-description');
const title = detail.querySelector('.item-title');
const rating = detail.querySelector('.stars-holder');

const commentTemplate = document.querySelector('#template-comment');

const comment = commentTemplate.content.cloneNode(true);
// const customerName = comment.querySelector('.customer-name strong');
// const customerComment = comment.querySelector('.customer-comment em');
// const dataOfComment = comment.querySelector('.customer-comment-date');

const itemDetail = document.querySelector('.item-detail-box');
const commentsContainer = document.querySelector(
  '.wrapper-customers-comment',
);

const displayPopup = (product) => {
  itemImage.src = product.image;
  itemCategory.textContent = product.category;
  inStock.textContent = product.stock;
  price.textContent = product.price;
  description.textContent = product.description;
  title.textContent = product.title;
  itemDetail.appendChild(detail);
  commentsContainer.appendChild(comment);
};

export default displayPopup;