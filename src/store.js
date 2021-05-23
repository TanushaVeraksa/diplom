import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./sagas/index";
import thunk from "redux-thunk";

 const sagaMiddleware = createSagaMiddleware();
 const middleWares = [sagaMiddleware, thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);
sagaMiddleware.run(rootWatcher);

export default store;