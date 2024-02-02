import getMovieById from "../javascript/get-movie.js";

const template = document.querySelector(".movie-details");
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

const movieRender = async (id) => {
  try {
    const movie = await getMovieById(id);
    const gender = movie.genres.genres.reduce(
      (accumulator, currentValue) => accumulator + currentValue.text + " ",
      ""
    );
    const hour = Math.floor(movie.runtime.seconds / 3600);
    const minute = Math.floor((movie.runtime.seconds / 60) % 60);

    const movieData = {
      title: movie.originalTitleText.text,
      url: movie.primaryImage.url,
      gender,
      sinopsis: movie.plot.plotText.plainText,
      duration: `${hour}:${minute}`,
    };

    const renderedTemplate = Mustache.render(template.innerHTML, movieData);
    template.innerHTML = renderedTemplate;
  } catch (error) {
    console.error("An error occurred while rendering the movie:", error);
  }
};

movieRender(movieId);
