import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import DemoPage from "./pages/DemoPage";

export function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={DemoPage} />
			</Switch>
		</div>
	);
}

export default App;
