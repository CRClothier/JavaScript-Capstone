const api1baseUrl = 'https://dummyjson.com';
const api2baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appIdentifier = 'VOGkcDJv42MGbQ7yAFhH';

const fetchAll = async () => {
  const response = await fetch(`${api1baseUrl}/products`);
  const products = await response.json();
  return products;
};

const fetchSingleProduct = async (id) => {
  const response = await fetch(`${api1baseUrl}/products/${id}`);
  const product = await response.json();
  return product;
};

const sendLikes = async (id) => {
  const response = await fetch(
    `${api2baseUrl}/apps/${appIdentifier}/likes`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
  return response;
};

const getLikes = async () => {
  const response = await fetch(
    `${api2baseUrl}/apps/${appIdentifier}/likes`,
  );
  const likes = await response.json();
  return likes;
};

const sendComment = async (id, name, userComment) => {
  const response = await fetch(
    `${api2baseUrl}/apps/${appIdentifier}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: userComment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};

const getComments = async (id) => {
  const response = await fetch(
    `${api2baseUrl}/apps/${appIdentifier}/comments?item_id=${id}`,
  );
  const comments = await response.json();
  return comments;
};

const createNewItem = async () => {
  const response = await fetch(`${api2baseUrl}/apps`);
  const identifier = await response.json();
  return identifier;
};

export {
  fetchAll,
  fetchSingleProduct,
  sendLikes,
  getComments,
  createNewItem,
  sendComment,
  getLikes,
};
