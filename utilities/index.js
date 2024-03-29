import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../src/reducers";
import { middlewares } from "./../src/createStore";
import thunk from "redux-thunk";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propsTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = initialState => {
  // const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  // return createStoreWithMiddleware(rootReducer, initialState);
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};
