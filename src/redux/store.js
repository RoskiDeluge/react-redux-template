import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; //Only enable redux dev tools in development
import thunk from "redux-thunk";

// - Import reducers here
import demoReducer from "./reducers/demoReducer";

// - Add middleware here
const middleware = [thunk];

const initialState = {};

// - Add reducers here
const rootReducer = combineReducers({
	Demo: demoReducer,
});

// - Enhancers (with redux devtools extension)
const composeEnhancers = composeWithDevTools({
	// options like actionSanitizer, stateSanitizer
});

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
