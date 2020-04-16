import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import Login from "../pages/Login";

afterEach(cleanup)

it("displays the login button", () => { 
    const { getByText } = render(<Login />)
    const loginButtonElement = getByText(/login/i)
    expect(loginButtonElement).toBeInTheDocument()
})

it("logs in when button is clicked", () => { 
    const { getByText } = render(<Login />)
    const loginButtonElement = getByText(/login/i)
    fireEvent.click(loginButtonElement)

})