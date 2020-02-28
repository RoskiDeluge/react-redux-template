import actions from "../constants";

export const demoAction = (dummyData) => (dispatch) => {
	dispatch({ type: actions.DEMO_ACTION, payload: dummyData });
};
