import axios from "axios";
//import { tokenConfig } from "./auth"; to be used for more secure
import { CLUB_LOADED, CLUB_UNLOAD, CLUB_LOAD_FAIL } from "./types";

export const clubEnter = (id) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ id });
  console.log(body);

  axios
    .post("/api/clubs/club", body, config)
    .then((res) => {
      dispatch({
        type: CLUB_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CLUB_LOAD_FAIL,
      });
    });
  return true;
};

export const clubExit = () => (dispatch) => {
  dispatch({
    type: CLUB_UNLOAD,
  });
};
