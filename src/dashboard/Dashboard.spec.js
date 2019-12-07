import React from "react";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(cleanup);

test("renders <Display/>", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/Unlocked/i)).toBeInTheDocument();
});

test("Renders <Controls />", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/Close Gate/i)).toBeInTheDocument();
});

//My first attempt:
// test("Dashboard renders", () => {
//   const wrapper = render(<Dashboard />);

//   expect(wrapper).toMatchSnapshot();
// });

// My second attempt:
// test("Dashboard renders controls and display", () => {
//   const wrapper = render(<Dashboard />);
//   expect(wrapper.findByTestId("dashboard")).toBeDefined();
//   expect(wrapper.findByTestId("controls")).toBeDefined();
//   expect(wrapper.asFragment).toMatchSnapshot();
// });
