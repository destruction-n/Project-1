import { ISearchFilm } from "src/client/Types/Types";

export const getPage = (
    page: number,
    firstFilm: ISearchFilm,
    lastFilm: ISearchFilm,
    yearFrom: number
) => {
    const shouldUpdatePage = !(firstFilm.Year === lastFilm.Year) && yearFrom;
    return shouldUpdatePage ? 1 : page + 1;
};
