import React from "react";

//Redux
import { connect } from "react-redux";

//Actions
import { demoAction } from "../../redux/actions/demoActions";

export function DemoComponent({ demoAction, demoData }) {
	return (
		<div>
			<p>
				Hello world! <span>DemoData: {demoData}</span>
			</p>
			<button onClick={() => demoAction(Math.round(Math.random() * 100))}></button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	demoData: state.Demo.demoData,
});

const mapActionsToProps = {
	demoAction,
};

export default connect(mapStateToProps, mapActionsToProps)(DemoComponent);
