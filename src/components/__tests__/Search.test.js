import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Body";
import ResData from "../Mocks/ResData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(ResData)
        },
    });
});



it("Should load the Body Component with a Search button", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    });

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();
});


it("Should load the  search cards when the search button is clicked", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    });


    const cardBefour = screen.getAllByTestId("rescard");
    expect(cardBefour.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    //? getByTestId allows us to search by test id
    const searchBox = screen.getByTestId("searchBox");

    fireEvent.change(searchBox, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    //? this will get al the cards 
    const searchCard = screen.getAllByTestId("rescard");

    expect(searchCard.length).toBe(2);



    //! test card for the top rated button testing now we are going to do 

    const topBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topBtn);

    const topCards = screen.getAllByTestId("rescard");
    expect(topCards.length).toBe(5);



});