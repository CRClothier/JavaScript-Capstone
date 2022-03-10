import { getLikes, getComments } from './commentAPI.js';

const commentCount = document.querySelector('.comment-title span');

export default class Counter {
  constructor() {
    this.likes = null;
    this.comments = null;
    this.id = null;
  }

  getLikeCount(id) {
    getLikes().then((likes) => {
      this.likes = likes.find((item) => item.item_id === id).likes;
    });
    return this.likes;
  }

  getCommentsCount(id) {
    let comment;
    getComments(id).then((comments) => {
      comment = comments.length;
      commentCount.textContent = comment;
      this.comments = comment;
    });
    return this.comments;
  }
}
