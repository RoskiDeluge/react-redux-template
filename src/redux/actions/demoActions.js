import types from "../constants/demoTypes/types";

export const demoAction = (dummyData) => {
	return { type: types.DEMO_ACTION, payload: dummyData };
};
