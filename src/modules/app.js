import '../assets/css/styles.css';
import makeProductList from './makeProductList.js';
import getProducts from './getProducts.js';

getProducts().then(() => {
  makeProductList();
});
