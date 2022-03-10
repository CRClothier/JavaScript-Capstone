import getProducts from './getProducts.js';
import { getLikes } from './commentAPI.js';

const makeProductList = (category) => {
  getLikes().then((likes) => { 
    let productsHtml = '';
    getProducts(category).then((list) => {
      list.products.forEach((product) => {
        let numberOfLikes = 0;
        const isLiked = likes.findIndex(
          (like) => Number(like.item_id) === Number(product.id),
        );
        if (isLiked >= 0) {
          numberOfLikes = likes[isLiked].likes;
        }
        const buildingBlock = `<section class="product">
        <img src="${product.thumbnail}" alt="">
        <h2>${product.title}</h2>
        <div class="likes">
          <i class="bi bi-heart" item-id="${product.id}"></i>
          <p>${numberOfLikes} like(s)</p>
        </div>
        <a id=">${product.id}" class="comments button" href="#">Comments</a>
        </section>`;
        productsHtml += buildingBlock;
      });
      const container = document.querySelector(`.${category}`);
      container.innerHTML = productsHtml;
    });
  });
};

export default makeProductList;