import { combineReducers } from "redux";
import show from "./showsReducer";
import premieres from "./premieresReducer"
import userReducer from "./userReducer";
import filmReducer from "./filmReducer";

const rootReducer = combineReducers({
  user: userReducer,
  film: filmReducer,
  show,
  premieres,
});

export default rootReducer;