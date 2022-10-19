import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn Next.js link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Next.js/i);
  expect(linkElement).toBeInTheDocument();
});
