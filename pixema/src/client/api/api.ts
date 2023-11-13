import { filmsUrl, mockRatingUrl } from "src/client/utils/http";
import { IFilm } from "src/globalTypes";

export const api = {
  getfilms: (page: number = 1, year?: number) =>
    filmsUrl.get(`/?s=snow&page=${page}&apikey=9d0e2764&y=${year}`),

  getRatings: () => mockRatingUrl.get("/rating"),

  searchFilms: (searchTitle: string, page: number = 1) =>
    filmsUrl.get(`/?s=${searchTitle}&page=${page}&apikey=9d0e2764`),

  getFullFilm: (id: string) => filmsUrl.get<IFilm>(`/?i=${id}&apikey=9d0e2764`),
};
