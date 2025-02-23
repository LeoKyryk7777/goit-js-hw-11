import axios from 'axios';

export function createImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '49003886-a24f9c3a0fd607f8ed8b1fc56';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  return axios.get(BASE_URL, { params });
}
