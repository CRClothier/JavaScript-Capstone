import { sendComment } from './commentAPI.js';

const commentForm = document.querySelector('#comment-form');

const submitComment = () => {
  const userName = commentForm.querySelector('#name').value;
  const comment = commentForm.querySelector('#comment').value;
  if (userName && comment) {
    commentForm.reset();
    sendComment(1, userName, comment);
    return true;
  }
  return false;
};

export default submitComment;
