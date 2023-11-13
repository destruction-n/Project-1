import { Dispatch } from "redux";
import { IUserData } from "src/globalTypes";
import { userActions } from "src/store/actions/UserActions/userActions";
import { getTokens, signIn } from "src/store/thunks/helpers";

export const signInAsync = (
    userData: Pick<IUserData, "email" | "password">
) => {
    return async (dispatch: Dispatch) => {
        try {
            const tokens = await getTokens(userData.email, userData.password);
            const { access, refresh } = tokens;

            if (access && refresh && document) {
                localStorage.setItem("access", JSON.stringify(access));
                localStorage.setItem("refresh", JSON.stringify(refresh));

                try {
                    const accountData = await signIn(access);
                    dispatch(userActions.signIn(accountData));
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
};