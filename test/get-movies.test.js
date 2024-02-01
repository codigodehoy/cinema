import { get_movies } from "../javascript/get-movies";
import { jest } from '@jest/globals';

import data from "./mock/mock-movies";

describe("Get movie", () => {
    let resp

    beforeAll(() => {
        resp = {results: data}
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(resp)
        })
    })

    it('should retrive successfully data from API ', async () => {
        const movies = await get_movies();

        expect(movies).toEqual(resp.results);
    });

    it("should call the fetch function", async () => {
        expect(fetch).toHaveBeenCalledTimes(1);
    })  
})
