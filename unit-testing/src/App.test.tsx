import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders main page correctly", async () => {
  render(<App />);
  const countText = screen.getByTestId("title");
  expect(countText.innerHTML).toBe("Unit Testing Libraries");
  expect(true).toBeTruthy();
});
