const laptops = document.querySelector('.laptops-container');
const smartphones = document.querySelector('.smartphones-container');
const lighting = document.querySelector('.lighting-container');

const displayAll = () => {
  laptops.style.display = 'flex';
  smartphones.style.display = 'flex';
  lighting.style.display = 'flex';
};

const displayLaptops = () => {
  laptops.style.display = 'flex';
  smartphones.style.display = 'none';
  lighting.style.display = 'none';
};

const displaySmartphones = () => {
  laptops.style.display = 'none';
  smartphones.style.display = 'flex';
  lighting.style.display = 'none';
};

const displayLighting = () => {
  laptops.style.display = 'none';
  smartphones.style.display = 'none';
  lighting.style.display = 'flex';
};

const setEvents = () => {
  document.querySelector('#all-products').addEventListener('click', displayAll);
  document.querySelector('#see-laptops').addEventListener('click', displayLaptops);
  document.querySelector('#see-smartphones').addEventListener('click', displaySmartphones);
  document.querySelector('#see-lighting').addEventListener('click', displayLighting);
};

export default setEvents;