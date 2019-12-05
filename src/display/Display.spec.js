import React from "react";

import "@testing-library/jest-dom/extend-expect";

import Display from "../display/Display";
import { render } from "@testing-library/react";

test("Defaults to unlocked and open/ displays open and unlocked when gate is open and unlocked", () => {
  const wrapper = render(<Display />);
  const unlocked = wrapper.getByText(/unlocked/i);
  const open = wrapper.getByText(/open/i);

  expect(unlocked.textContent).toMatch("Unlocked");
  expect(open.textContent).toMatch("Open");
});

test("Displays if gate is closed and locked", () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
  const unlocked = getByText(/locked/i);
  const open = getByText(/closed/i);

  expect(unlocked.textContent).toMatch("Locked");
  expect(open.textContent).toMatch("Closed");
});

test("Displays Closed if the closed prop is true", () => {
  const { getByText } = render(<Display closed={true} />);
  expect(getByText(/closed/i).textContent).toMatch("Closed");
});

test("Displays Open if the closed prop is not true", () => {
  const { getByText } = render(<Display closed={false} />);
  expect(getByText(/open/i).textContent).toMatch("Open");
});

test("When closed or locked, uses the red-led class", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  expect(getByText(/closed/i)).toHaveClass("red-led");
});

test("When open or unlocked, uses the green-led class", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  expect(getByText(/open/i)).toHaveClass("green-led");
});
