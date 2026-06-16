import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import resData from "../Mocks/ResCard.json"
import "@testing-library/jest-dom"
it("It should load resturantCards With props data ", () => {
    render(<ResturantCard resData={resData} />);

    const name = screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument();
}) 