import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '42680318-96c21e5764acdc13d94b87bb9';
const URL = 'https://pixabay.com/api/';
const container = document.querySelector('.container');

export function getImages(QUERY) {
  container.style.display = 'block';
  const link = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;

  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // container.style.display = 'none';
    })
    .catch(error => console.log(`Error: ${error}`));
}
