import { sectionsEnum } from "src/client/Types/Types";
import { sectionsActionsEnum } from "src/store/actions/PagesActions/pagesActions";

const defaultState = {
  section: sectionsEnum.HOME,
};

interface IAction {
  type: sectionsActionsEnum;
  payload: sectionsEnum;
}

export const sectionsReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case sectionsActionsEnum.CHANGE_SECTION: {
      return { ...state, section: action.payload };
    }

    default:
      return state;
  }
};
