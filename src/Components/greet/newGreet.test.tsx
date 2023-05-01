import { render, screen } from "@testing-library/react"
import { NewGreet } from "./newGreet";


test("Greet Render With Tdd example", () => {
    // render the component on virtual dom
    render(<NewGreet />)

    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
});

test("Greet Render With a name", () => {
    // render the component on virtual dom
    render(<NewGreet name="Pankaj" />)
    const element = screen.getByText("Hello Pankaj");
    expect(element).toBeInTheDocument();
})

