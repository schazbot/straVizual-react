import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

it("appears on the page", () => {
  const { getByRole } = render(<Header />);
  const headerElement = getByRole("navigation");
  expect(headerElement).toBeInTheDocument();
});
