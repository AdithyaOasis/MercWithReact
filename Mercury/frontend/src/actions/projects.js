import axios from "axios";
//import { tokenConfig } from "./auth"; to be used for more secure
import { PROJECT_LOADED, PROJECT_UNLOAD } from "./types";

export const projectEnter = (project) => (dispatch, getState) => {
  dispatch({
    type: PROJECT_LOADED,
    payload: project,
  });
};

export const projectExit = () => (dispatch, getState) => {
  dispatch({
    type: PROJECT_UNLOAD,
  });
};
