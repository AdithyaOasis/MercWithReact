import { combineReducers } from "redux";
import auth from "./auth";
import club from "./club"
import project from "./project"
export default combineReducers({
  auth,
  club,
  project
});
