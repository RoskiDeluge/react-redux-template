import React from "react";
import { Route } from "react-router-dom";

// Pages/Routes
import DemoPage from "./pages/DemoPage";

function App() {
	return (
		<div className="app">
			<Route exact path="/" component={DemoPage} />
		</div>
	);
}

export default App;
