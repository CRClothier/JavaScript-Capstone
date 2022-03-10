import { sendLikes } from './commentAPI.js';

const addLikes = () => {
  const hearts = document.querySelectorAll('.bi-heart');
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const itemID = e.target.getAttribute('item-id');
      sendLikes(itemID);
      heart.classList.remove('bi-heart');
      heart.classList.add('bi-heart-fill');
    });
  });
};

export default addLikes;