import { render, screen } from "@testing-library/react";
import ComponentOne from "./ComponentOne";

test("renders ComponentOne correctly", () => {
  render(<ComponentOne />);
  const spanElement = screen.getByTestId("count");
  expect(spanElement.innerHTML).toBe("count is 0");

  expect(true).toBeTruthy();
});
