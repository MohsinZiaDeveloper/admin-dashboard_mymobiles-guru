import { createStore, combineReducers, applyMiddleware } from "redux";
import mobileReducer from "./mobileReducer";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  mobiles: mobileReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
