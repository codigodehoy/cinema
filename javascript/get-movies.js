import { OPTIONS, API_URL } from "./constants.js";

const getMovies = async () => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
};

export default getMovies;
