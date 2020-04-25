import { CLUB_LOADED, CLUB_UNLOAD, CLUB_LOAD_FAIL } from "../actions/types";

const initialState = {
  inClub: false,
  club: null,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case CLUB_LOADED:
      return {
        ...state,
        inClub: true,
        club: actions.payload,
      };
    case CLUB_UNLOAD:
    case CLUB_LOAD_FAIL:
        return{
            ...state,
            inClub: false,
            club: null
        }
    default:
      return {
        ...state,
      };
  }
}
