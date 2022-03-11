const getProducts = async (category) => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);
  const products = response.json();
  return products;
};

export default getProducts;