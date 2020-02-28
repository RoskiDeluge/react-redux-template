import types from "../constants/demoTypes";

export const demoAction = (dummyData) => {
	return { type: types.DEMO_ACTION, payload: dummyData };
};
