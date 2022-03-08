import products from './products.js';

const makeProductList = () => {
  let productsHtml = '';
  products.forEach((product) => {
    const buildingBlock = `<section class="product">
    <img src="${product.image}" alt="">
    <h2>${product.title}</h2>
    <a id=">${product.id}" class="comments button" href="#">Comments</a>
    </section>`;
    productsHtml += buildingBlock;
  });
  const container = document.querySelector('.products');
  container.innerHTML = productsHtml;
};

export default makeProductList;