import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { themeReducer } from "src/store/reducers/ThemeReducers/themeReducer";
import { userReducer } from "src/store/reducers/UserReducers/userReducer";
import { favFilmsReducer } from "src/store/reducers/MoviesReducers/favouriteMovieReducer";
import { filmsReducer } from "src/store/reducers/MoviesReducers/movieReducer";
import { filterMenuReducer } from "src/store/reducers/SortingReducers/sortingMenuReducer";
import { sectionsReducer } from "src/store/reducers/PageActions/pageAction";
import { filtersReducer } from "src/store/reducers/SortingReducers/sortingReducer";
import { fullFilmReducer } from "src/store/reducers/MoviesReducers/moviePageReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  favFilms: favFilmsReducer,
  films: filmsReducer,
  filterMenu: filterMenuReducer,
  sections: sectionsReducer,
  filters: filtersReducer,
  film: fullFilmReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
