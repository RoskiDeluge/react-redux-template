import actions from "../constants";

const initialState = {
	demoData: {},
};

const demoReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.DEMO_ACTION:
			return {
				...state,
				demoData: payload,
			};
		default:
			return state;
	}
};

export default demoReducer;
