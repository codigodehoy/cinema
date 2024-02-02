import { jest } from "@jest/globals";

import getMovieById from "../javascript/get-movie";
import data from "./mock/mock-movies";

describe("Get movie by Id", () => {
  let response;

  beforeAll(() => {
    response = { results: data[0] };
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
    global.fetch = jest.fn(() => mockFetch);
  });

  it("should retrieve the information of a given movie", async () => {
    const movie = await getMovieById("1");

    expect(movie).toEqual(response.results);
  });

  it("should call the fetch function ", async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
