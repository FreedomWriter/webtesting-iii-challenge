import React from "react";

// import * as {rtl} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

import Display from "../display/Display";
import { render } from "@testing-library/react";

test("Defaults to unlocked and open", () => {
  const wrapper = render(<Display />);
  const unlocked = wrapper.getByText(/unlocked/i);
  const open = wrapper.getByText(/open/i);

  expect(unlocked.textContent).toMatch("Unlocked");
  expect(open.textContent).toMatch("Open");
});
