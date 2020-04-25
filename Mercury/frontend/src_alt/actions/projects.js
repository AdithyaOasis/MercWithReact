import axios from "axios";
//import { tokenConfig } from "./auth"; to be used for more secure
import { PROJECT_LOADED, PROJECT_UNLOAD, PROJECT_LOAD_FAIL } from "./types";

export const projectEnter = (id) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ id });
  console.log(body);

  axios
    .post("/api/projects", body, config)
    .then((res) => {
      dispatch({
        type: PROJECT_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PROJECT_LOAD_FAIL,
      });
    });
  return true;
};

export const projectExit = () => (dispatch, getState) => {
  dispatch({
    type: PROJECT_UNLOAD,
  });
};
