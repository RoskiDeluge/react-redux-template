import store from "../../redux/store";

describe("redux-store", () => {
	test("should return a valid store", () => {
		expect(store).toEqual(
			expect.objectContaining({
				dispatch: expect.any(Function),
				getState: expect.any(Function),
			})
		);
	});
});
