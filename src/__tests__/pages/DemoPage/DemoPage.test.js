import React from "react";
import { shallow } from "enzyme";

import DemoPage from "../../../pages/DemoPage";
import DemoComponent from "../../../components/DemoPage/DemoComponent";

describe("<DemoPage>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<DemoPage />);
	});

	test("renders <DemoComponent> as a child component", () => {
		expect(wrapper.exists(DemoComponent)).toBe(true);
	});
});
