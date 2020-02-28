import axios from "axios";
import { axiosWithAuth } from "../../components/utils/axiosWithAuth";
import MockAdapter from "axios-mock-adapter";

describe("axiosWithAuth", () => {
	beforeAll(() => {
		//Create mock adapter
		const axiosWithAuthMock = new MockAdapter(axios);

		//Mock test route, return headers
		axiosWithAuthMock.onGet("/test").reply((config) => {
			return [200, { requestHeaders: config.headers }];
		});
	});

	test("should contain authorization header", async () => {
		const response = await axiosWithAuth().get("/test");

		expect(response.data.requestHeaders["authorization"]).toBeDefined();
	});

	test("should contain a token from storage", async () => {
		sessionStorage.setItem("token", "Test Value");

		const response = await axiosWithAuth().get("/test");
		expect(response.data.requestHeaders["authorization"]).toEqual("Test Value");
	});
});
