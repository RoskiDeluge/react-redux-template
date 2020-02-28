import types from "../constants/demoTypes";

const initialState = {
	demoData: 0,
};

const demoReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.DEMO_ACTION:
			return {
				...state,
				demoData: payload,
			};
		default:
			return state;
	}
};

export default demoReducer;
