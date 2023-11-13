import ErrorPage from "src/client/pages/ErrorPage/ErrorPage";
import FavoriteMoviesPage from "src/client/pages/FavoriteMoviesPage/FavoriteMoviesPage";
import FilmPage from "src/client/pages/FilmPage/FilmPage";
import MainPage from "src/client/pages/MainPage/MainPage";
import TrendsPage from "src/client/pages/TrendsPage/TrendsPage";
import ActivateAccountPage from "src/client/pages/UserPages/ActivateAccountPage";
import SignInPage from "src/client/pages/UserPages/SignInPage";
import SignUpPage from "src/client/pages/UserPages/SignUpPage";

interface IClientRoutes {
  id: number;
  path: string;
  Component: React.FC<any>;
  props?: any;
  isPrivate: boolean;
}

export const clientRoutes: IClientRoutes[] = [
  {
    id: 1,
    path: "/main",
    Component: MainPage,
    isPrivate: false,
  },
  {
    id: 2,
    path: "/film/:id",
    Component: FilmPage,
    isPrivate: true,
  },
  {
    id: 3,
    path: "/sign-in",
    Component: SignInPage,
    isPrivate: false,
  },
  {
    id: 4,
    path: "/sign-up",
    Component: SignUpPage,
    isPrivate: false,
  },
  {
    id: 5,
    path: "/activate-account/:uid/:token",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 6,
    path: "/activate-account",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 7,
    path: "/favourites",
    Component: FavoriteMoviesPage,
    isPrivate: true,
  },
  {
    id: 8,
    path: "/trends",
    Component: TrendsPage,
    isPrivate: true,
  },
  {
    id: 999,
    path: "/error",
    Component: ErrorPage,
    isPrivate: false,
  },
];
