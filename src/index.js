import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Styles
// import "./index.css";

// App
import App from "./App";

// Service Worker(s)
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
