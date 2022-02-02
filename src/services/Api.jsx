const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24504090-67d4d1d2d94058f1108b78b7b';

function fetchImage(query, page) {
    return fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json());
            
};

const imageApi = {
    fetchImage,
};

export default imageApi;
