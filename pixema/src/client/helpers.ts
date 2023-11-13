import { ISearchFilm } from "src/globalTypes";

export const getFilmsPerList = (width: number) => {
  if (
    width >= 1440 ||
    (width < 1280 && width >= 1024) ||
    (width < 768 && width >= 480)
  )
    return 8;
  else if (width < 1440 && width >= 1280) return 6;
  else if (width < 1024 && width >= 768) return 9;
  else return 9;
};

export const isFilmFav = (id: string, favFilmsArr: ISearchFilm[]) => {
  const isFav = favFilmsArr.some((film) => film.imdbID === id);
  return isFav;
};