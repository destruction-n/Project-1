import { Dispatch } from "redux";
import { api } from "src/client/api/api";
import { fullFilmActions } from "src/store/actions/MovieActions/moviePageActions";

export const getFilm = async (id: string) => {
  const res = await api.getFullFilm(id);
  return res?.data;
};

export const setFullFilmAsync = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const film = await getFilm(id)
      dispatch(fullFilmActions.addFullFilm(film))
    } catch (error) { }
  };
};
