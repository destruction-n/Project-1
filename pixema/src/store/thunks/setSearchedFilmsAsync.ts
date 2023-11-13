import { Dispatch } from "redux";
import { api } from "src/client/api/api";
import { filmsActions } from "src/store/actions/MovieActions/movieActions";
import { IFilm } from "src/client/Types/Types";

interface IRating {
  rating: number;
  id: number;
}

const getFilms = async (filmTitle: string, page?: number) => {
  const res = await api.searchFilms(filmTitle, page);
  return res?.data;
};

const getRatings = async () => {
  const res = await api.getRatings();
  return res?.data;
};

export const setSearchedFilmsAsync = (
  searchTitle: string,
  filmsPerList: number,
  page?: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const films = await getFilms(searchTitle, page);
      const ratingsResponse = await getRatings();

      const ratings = ratingsResponse.map((ratingObj: IRating) => {
        return ratingObj.rating;
      });

      const fullFilms = films.Search.map((film: IFilm, idx: number) => {
        return { ...film, imdbRating: ratings[idx] };
      });

      const readyFilmsData = { ...films, Search: fullFilms };

      if (fullFilms) {
        dispatch(
          filmsActions.searchFilms({
            apiFilmsResponse: readyFilmsData,
            filmsPerList,
            searchTitle: searchTitle,
          })
        );
      }
    } catch (error) {
      const emptyObject = {
        Search: [],
        totalResults: 0,
      };
      dispatch(
        filmsActions.searchFilms({
          apiFilmsResponse: emptyObject,
          filmsPerList,
          searchTitle: searchTitle,
        })
      );
    }
  };
};
