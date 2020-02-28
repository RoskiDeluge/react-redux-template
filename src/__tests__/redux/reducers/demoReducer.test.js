import reducer from "../../../redux/reducers/demoReducer";
import types from "../../../redux/constants/demoTypes";

describe("demo reducer", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			demoData: 0,
		});
	});

	test("should handle DEMO_ACTION", () => {
		expect(
			reducer([], {
				type: types.DEMO_ACTION,
				payload: "This is a test",
			})
		).toEqual({
			demoData: "This is a test",
		});
	});
});
