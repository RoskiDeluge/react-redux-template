import React from "react";

import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// Mock redux store
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../../App";
import DemoPage from "../../pages/DemoPage";

const mockStore = configureStore({});

describe("<App>", () => {
	let store;
	let wrapper;

	beforeEach(() => {
		store = mockStore({
			Demo: {},
		});
	});

	test("renders <DemoPage> at correct route", () => {
		wrapper = mount(
			<Provider store={store}>
				<MemoryRouter initialEntries={["/"]}>
					<App />
				</MemoryRouter>
			</Provider>
		);
		expect(wrapper.exists(DemoPage)).toBe(true);
	});
});
