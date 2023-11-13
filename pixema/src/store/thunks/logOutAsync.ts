import { Dispatch } from "redux";
import { userActions } from "src/store/actions/UserActions/userActions";

export const logOutAsync = () => {
  return async (dispatch: Dispatch) => {
    localStorage.setItem("access", JSON.stringify(""));
    localStorage.setItem("refresh", JSON.stringify(""));
    localStorage.setItem("access_token", JSON.stringify(""));
    localStorage.setItem("refresh_token", JSON.stringify(""));

    dispatch(userActions.LogOut());
  };
};