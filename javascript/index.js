import getMovies from "../javascript/get-movies.js";

const element = document.getElementById("movie-list");

const createImag = (movie) => {
  const imag = movie.primaryImage.url;
  const alternativeText = movie.primaryImage.caption.plainText;
  const imgElement = document.createElement("img");
  imgElement.src = imag;
  imgElement.alt = alternativeText;
  imgElement.setAttribute("data-movie-id", movie.id);

  return imgElement;
};

const createButton = (movie) => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "View";
  buttonElement.setAttribute("className", "schedules");
  buttonElement.setAttribute("data-movie-id", movie.id);

  return buttonElement;
};

const dataRender = async () => {
  try {
    const movies = await getMovies();
    movies.forEach((movie) => {
      const container = document.createElement("div");
      container.className = "poster-container";

      const link = document.createElement("a");
      link.setAttribute("href", `./movie.html?id=${movie.id}`);

      const imgElement = createImag(movie);
      link.appendChild(imgElement);

      const buttonElement = createButton(movie);
      link.appendChild(buttonElement);

      container.appendChild(link);
      element.appendChild(container);
    });
  } catch (error) {
    console.error("AN error ocurred while rendering the movies", error);
  }
};

dataRender();
