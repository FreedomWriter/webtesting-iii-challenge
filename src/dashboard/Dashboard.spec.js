import React from "react";

import * as rtl from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

jest.mock("./Dashboard", () => {
  return;
});

test("Expect default to unlocked and open", () => {
  const wrapper = rtl.render(<Dashboard />);
  expect();
});
