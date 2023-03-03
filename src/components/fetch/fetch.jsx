const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32552972-dc07813a8434780c4e0dd03fe';

export const fetchGallery = searchQuery =>
  fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );
