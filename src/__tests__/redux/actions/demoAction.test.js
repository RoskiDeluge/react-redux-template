import * as actions from "../../../redux/actions/demoActions";
import types from "../../../redux/constants/demoTypes";

describe("demo actions", () => {
	test("should create a demo action", () => {
		const data = "Hello";
		const expectedAction = {
			type: types.DEMO_ACTION,
			payload: data,
		};
		expect(actions.demoAction(data)).toEqual(expectedAction);
	});
});
