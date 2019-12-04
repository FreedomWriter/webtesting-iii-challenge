import React from "react";

import * as rtl from "@testing-library/react";
import { within } from "@testing-library/dom/dist/@testing-library/dom.umd.js";
// import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test("Dashboard renders", () => {
  const wrapper = rtl.render(<Dashboard />);

  expect(wrapper).toMatchSnapshot();
});

test("Dashboard renders controls and display", () => {
  const wrapper = rtl.render(<Dashboard />);

  expect(wrapper.asFragment).toMatchSnapshot();
});
