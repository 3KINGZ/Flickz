const baseURL = "https://api.themoviedb.org/3/movie/";
const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "52050e6e3220743e0fba6b8a62e6eccf";
const other = "&language=en-US&page=1";

const getURLs = {
  now_playing: `${baseURL}now_playing?api_key=${apiKey}${other}`,
  popular: `${baseURL}popular?api_key=${apiKey}${other}`,
  top_rated: `${baseURL}top_rated?api_key=${apiKey}${other}`,
  upcoming: `${baseURL}upcoming?api_key=${apiKey}${other}`,
};

export async function searchMovies(keyword) {
  let response = await fetch(
    `${searchURL}?api_key=${apiKey}${other}&query=${keyword}&include_adult=false`
  );
  response = await response.json();
  return response;
}

export async function request(type) {
  let response = await fetch(getURLs[type]);
  response = await response.json();
  return response;
}

export async function getMovieDetails(id) {
  let response = await fetch(`${baseURL}${id}?api_key=${apiKey}`);
  response = await response.json();
  return response;
}
