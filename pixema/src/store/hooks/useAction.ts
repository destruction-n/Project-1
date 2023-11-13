import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { favFilmsActions } from "src/store/actions/MovieActions/favouriteMovieActions";
import { filmsActions } from "src/store/actions/MovieActions/movieActions";
import { themeActions } from "src/store/actions/ThemeActions/themeActions";
import { userActions } from "src/store/actions/UserActions/userActions";
import { filterMenuActions } from "src/store/actions/SortingActions/sortingMenuActions";
import { setFilmsAsync } from "src/store/thunks/setMoviesAsync";
import { sectionsActions } from "src/store/actions/PagesActions/pagesActions";
import { filtersACtions } from "src/store/actions/SortingActions/sortingActions";
import { setFilteredFilmsAsync } from "src/store/thunks/setSortingMoviesAsync";
import { setSearchedFilmsAsync } from "src/store/thunks/setSearchedFilmsAsync";
import { fullFilmActions } from "src/store/actions/MovieActions/moviePageActions";
import { setFullFilmAsync } from "src/store/thunks/setMoviePageAsync";
import { signInAsync } from "../thunks/signInAsync";
import { signUpAsync } from "../thunks/signUpAsync";
import { activateAccountAsync } from "../thunks/activateAccountAsyncs";
import { logOutAsync } from "../thunks/logOutAsync";
import { autoAuthAsync } from "../thunks/autoAuthAsync";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...favFilmsActions,
      ...filmsActions,
      ...themeActions,
      ...userActions,
      ...filterMenuActions,
      ...sectionsActions,
      ...filtersACtions,
      ...fullFilmActions,
      activateAccountAsync,
      autoAuthAsync,
      logOutAsync,
      signUpAsync,
      signInAsync,
      setFilmsAsync,
      setFilteredFilmsAsync,
      setSearchedFilmsAsync,
      setFullFilmAsync,
    },
    dispatch
  );
};
