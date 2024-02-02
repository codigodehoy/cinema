import { jest } from "@jest/globals";

import data from "./mock/mock-movies";
import getMovies from "../javascript/get-movies";

describe("Get movie", () => {
  let response;

  beforeAll(() => {
    response = { results: data };
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
    global.fetch = jest.fn(() => mockFetch);
  });

  it("should retrive successfully data from API ", async () => {
    const movies = await getMovies();

    expect(movies).toEqual(response.results);
  });

  it("should call the fetch function", async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
