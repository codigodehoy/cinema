import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

const getMovieById = async (movie_id) => {
  try {
    const url = API_MOVIE_ID_URL.replace("{id}", movie_id);
    const response = await fetch(url, OPTIONS);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
};

export default getMovieById;
