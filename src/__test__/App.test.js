import React from "react";
import {render, cleanup} from "@testing-library/react";
import Login from "../pages/Login";

afterEach(cleanup)

it("displays the login button", () => { 
    const { getByText } = render(<Login />)
    const loginButtonElement = getByText(/login/i)
    expect(loginButtonElement).toBeInTheDocument()
})
