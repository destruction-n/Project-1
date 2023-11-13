import { Dispatch } from "redux";
import { userApi } from "src/client/api/userApi";

const activateAccount = async (uid: string, token: string) => {
    const res = await userApi.activateAccount(uid, token);
    return res?.data;
};


export const activateAccountAsync = (
    uid: string,
    token: string,
) => {
    return async (dispatch: Dispatch) => {
        try {
            const isActivated = await activateAccount(uid, token)
        } catch (error) {
            console.log(123);
        }
    }
};