import Resturantmenu from "../Resturantmenu"
import { act } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import MockData from "../Mocks/MockData.json"


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
                    <Resturantmenu />
                </Provider>
            </BrowserRouter>
        );
    })

const accordianHeader = screen.getByText("Croissants & Viennoiserie (15)");
fireEvent.click(accordianHeader);
expect(screen.getAllByTestId("foodDetail").length).toBe(15);

})

