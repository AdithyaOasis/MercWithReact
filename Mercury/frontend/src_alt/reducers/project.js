import { PROJECT_LOADED, PROJECT_UNLOAD, } from "../actions/types";

const initialState = {
  inProject: false,
  project: null,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case PROJECT_LOADED:
      return {
        ...state,
        inProject: true,
        project: actions.payload,
      };
    case PROJECT_UNLOAD:
        return{
            ...state,
            inProject: false,
            project: null
        }
    default:
      return {
        ...state,
      };
  }
}
