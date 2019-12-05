import React from "react";

import "@testing-library/jest-dom/extend-expect";

import Controls from "../controls/Controls";
import { render, fireEvent } from "@testing-library/react";

test("Gate cannot be opened or closed if locked", () => {
  const { getByText, getByTestId } = render(
    <Controls data-testid="controls" locked={true} closed={true} />
  );
  expect(getByText(/open gate/i)).not.toBeEnabled();
  expect(getByTestId(/open-closed/i).textContent).not.toBe("Close Gate");
});

test("The closed toggle button is disabled if the gate is locked", () => {
  const { getByText } = render(
    <Controls data-testid="controls" locked={true} closed={true} />
  );
  expect(getByText(/open gate/i)).not.toBeEnabled();
});

test("The locked toggle button is disabled if the gate is open", () => {
  const { getByText } = render(
    <Controls data-testid="controls" locked={false} closed={false} />
  );

  expect(getByText(/lock/i)).not.toBeEnabled();
});

test("Provide buttons to toggle the closed and locked states", () => {
  const { getByText } = render(
    <Controls data-testid="controls" locked={true} closed={true} />
  );
  const closed = getByText(/unlock gate/i);
  const open = getByText(/open/i);
  expect(closed).toBeVisible();
  expect(open).toBeVisible();
});

test("Buttons' text changes to reflect the state the door will be in if clicked, from closed to open and from locked to unlocked", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();

  const { getByTestId } = render(
    <Controls
      data-testid="controls"
      locked={true}
      closed={true}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  const locked = getByTestId(/lock-unlock/i);
  const closed = getByTestId(/open-closed/i);

  fireEvent.click(closed);
  fireEvent.click(locked);

  expect(closed.textContent).not.toBe("Closed");
  expect(locked.textContent).not.toBe("Lock Gate");
});

test("Buttons' text changes to reflect the state the door will be in if clicked, from open to close and lock gate to unlock gate", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();

  const { getByTestId } = render(
    <Controls
      data-testid="controls"
      locked={false}
      closed={false}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  const locked = getByTestId(/lock-unlock/i);
  const closed = getByTestId(/open-closed/i);

  fireEvent.click(closed);
  fireEvent.click(locked);

  expect(closed.textContent).not.toBe("Open");
  expect(locked.textContent).not.toBe("Unlock Gate");
});
