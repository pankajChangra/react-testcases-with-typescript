import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet Render Correctly", () => {

    // render the component on virtual dom
    render(<Greet />)

    // it will check proper upper/lower case of the text
    const textEle1 = screen.getByText("Hello"); 

    // this is failed case because proper upper/lower case doesn't match of the text
    // const textEle1 = screen.getByText("hello"); 
    
    // to avoid proper upper/lower case of the text wrap word with slashes and end up i
    const textEle2 = screen.getByText(/hello/i); 

    expect(textEle1).toBeInTheDocument();
    expect(textEle2).toBeInTheDocument();
})