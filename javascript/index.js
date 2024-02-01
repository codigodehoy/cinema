import get_movies from "../javascript/get-movies.js";

const createImag = (movie) => {
  const imag = movie.primaryImage.url;
  const alternativeText = movie.primaryImage.caption.plainText;
  const imgElement = document.createElement("img");
  imgElement.src = imag;
  imgElement.alt = alternativeText;
  return imgElement;
};

get_movies().then((data) => {
  data.map((movie) => {
    const container = document.createElement("div");
    container.className = "poster-container";

    const imgElement = createImag(movie);
    container.appendChild(imgElement);

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "View";
    buttonElement.className = "schedules";
    buttonElement.setAttribute("data-movie-id", movie.id);
    container.appendChild(buttonElement);

    const element = document.getElementById("movie-list");
    element.appendChild(container);
  });
});
