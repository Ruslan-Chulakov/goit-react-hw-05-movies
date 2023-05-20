import axios from 'axios';

async function fetchReviews(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const KEY = '?api_key=4278d0f19129b6ab2e3afba6e510ceec';

  const response = await axios
    .get(`${URL}${KEY}`)
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response);
      }
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return response;
}

export default fetchReviews;