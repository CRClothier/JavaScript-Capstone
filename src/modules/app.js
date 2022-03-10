import '../assets/css/styles.css';
import makeProductList from './makeProductList.js';
import '../assets/css/comment.css';
import './comments.js';
import setEvents from '../displaySection.js';

setEvents();
makeProductList('smartphones');
makeProductList('laptops');
makeProductList('lighting');