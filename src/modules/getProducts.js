const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = response.json();
  return products;
};

export default getProducts;