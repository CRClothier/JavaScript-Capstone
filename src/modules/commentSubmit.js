import { sendComment } from './commentAPI.js';

const commentForm = document.querySelector('#comment-form');

const submitComment = (id) => {
  const userName = commentForm.querySelector('#name').value;
  const comment = commentForm.querySelector('#comment').value;
  const message = commentForm.querySelector('.submit-status');
  if (userName && comment) {
    commentForm.reset();
    sendComment(id, userName, comment);
    return true;
  }
  message.textContent = 'Please fill all required fields.';
  return false;
};

export default submitComment;
