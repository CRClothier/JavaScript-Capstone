import getProducts from './getProducts.js';

let allProductsArray = [];

const productCounter = (productsArray) => productsArray.length;

const updateProductsArray = () => {
  getProducts('laptops').then((laptops) => {
    getProducts('smartphones').then((smartphones) => {
      getProducts('laptops').then((lighting) => {
        const lightingArray = lighting.products;
        const smartphonesArray = smartphones.products;
        const laptopsArray = laptops.products;
        allProductsArray = lightingArray.concat(smartphonesArray, laptopsArray);
        const numberOfProducts = productCounter(allProductsArray);
        document.querySelector('.product-count').innerHTML = `${numberOfProducts}`;
      });
    });
  });
};

export { productCounter, updateProductsArray };