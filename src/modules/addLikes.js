import { sendLikes } from './commentAPI.js';

const addLikes = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('.bi-heart')) {
      const itemID = Number(e.target.getAttribute('item-id'));
      sendLikes(itemID);
      e.target.classList.remove('bi-heart');
      e.target.classList.add('bi-heart-fill');
    }
  });
};

export default addLikes;