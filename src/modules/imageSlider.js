const imageSlide = document.createElement('div');
imageSlide.classList.add('image-slide');

const getImage = async (id) => {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
  );
  const product = await response.json();
  return product;
};

const addSlide = (image, index) => {
  const imageItem = document.createElement('img');
  imageItem.classList.add(`image-${index}`, 'slide-img');
  imageItem.src = image;
  imageSlide.appendChild(imageItem);
};

const constructImageSlide = (container, id) => {
  imageSlide.textContent = '';
  getImage(id).then((result) => {
    result.images.forEach((image, index) => {
      addSlide(image, index);
    });
    container.appendChild(imageSlide);
  });
};

export default constructImageSlide;
