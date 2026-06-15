import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"
test("should load contatct us page", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("should load contatct us button ", () => {
    render(<ContactUs />);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
})


it("should load contatct us button ", () => {
    render(<ContactUs />);

    const place = screen.getByPlaceholderText("Enter ur detail");
    expect(place).toBeInTheDocument();
})


