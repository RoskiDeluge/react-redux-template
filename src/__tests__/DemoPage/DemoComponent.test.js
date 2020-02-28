import React from "react";
import { shallow } from "enzyme";

import { DemoComponent } from "../../components/DemoPage/DemoComponent";

describe("<DemoComponent>", () => {
	let wrapper;

	const mockDemofn = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<DemoComponent demoAction={mockDemofn} />);
	});

	test("renders 'Hello world!' text", () => {
		expect(wrapper.find("p").text()).toContain("Hello world!");
	});

	test("renders button", () => {
		expect(wrapper.exists("button")).toEqual(true);
	});

	test("calls mock function on button click", () => {
		wrapper.find("button").simulate("click");
		expect(mockDemofn.mock.calls.length).toBe(1);
	});
});
