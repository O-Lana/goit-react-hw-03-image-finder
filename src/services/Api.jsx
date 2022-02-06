// import axios from 'axios';

// const API_KEY = '24504090-67d4d1d2d94058f1108b78b7b';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const getImages = async (data, page) => {
//   const response = await axios.get(`?q=${data}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//   return response.data;
// };

function fetchImages(query, page) {

  const API_KEY = '24504090-67d4d1d2d94058f1108b78b7b';
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL).then(response => response.json());
      }

const API = {
  fetchImages
};

export default API;

