import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"

it('Should load the  header Component with a login button ', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Login");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();


})

it('Should load the  header Component with a login button ', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    const cart = screen.getByText("Cart-(0)");

    expect(cart).toBeInTheDocument();


})



it('Should load the  Login button as Logout agter event click', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Login");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logOutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logOutBtn).toBeInTheDocument();


})



it('Should load the  Login button as Logout agter event click', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Login");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logOutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logOutBtn).toBeInTheDocument();


})