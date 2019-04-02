import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

export default preloadedState => {
  const loggerMiddleware = createLogger();
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
};
