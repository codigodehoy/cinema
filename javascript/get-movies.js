import { OPTIONS, API_URL } from "./constants.js";

export const get_movies = async() => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    console.error(error);
  }
}