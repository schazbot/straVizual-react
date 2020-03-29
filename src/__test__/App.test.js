import React from "react";
import {render, cleanup} from "@testing-library/react";
import App from "../App";

afterEach(cleanup)

it("displays the login button", () => { 
    const { getByText } = render(<App />)
    const loginButtonElement = getByText(/login/i)
    expect(loginButtonElement).toBeInTheDocument()
})



// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });