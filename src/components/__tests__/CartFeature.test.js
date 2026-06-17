import Resturantmenu from "../Resturantmenu"
import { act } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import MockData from "../Mocks/MockData.json"
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData)
        }
    })
})

it("resturant menu compontnt", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <Resturantmenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    })

    const accordianHeader = screen.getByText("Croissants & Viennoiserie (17)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodDetail").length).toBe(17);

    //! this add button come from the button which is going to add+ to card 
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    console.log(addBtns.length);
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);

    expect(screen.getByText("Cart-(3)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodCart").length).toBe(3);


    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(
        screen.getByText("Cart is Empty Please Add Some Items")
    ).toBeInTheDocument();
    expect(screen.queryAllByTestId("foodCart")).toHaveLength(0);
})

