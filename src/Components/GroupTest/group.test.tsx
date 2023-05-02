import { render, screen } from "@testing-library/react"
import { Group } from "./group";

/**
 * You can create multiple or nested describe
 * describe.only and describe.skip we can also use
 */

describe("Greet Group", () => {
    test("Greet Render With Tdd example", () => {
        // render the component on virtual dom
        render(<Group />)

        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    });
    describe('Nested Greet Group', () => {
        test("Greet Render With a name", () => {
            // render the component on virtual dom
            render(<Group name="Pankaj" />)
            const element = screen.getByText("Hello Pankaj");
            expect(element).toBeInTheDocument();
        });
    });
});

describe('Nested Greet Group Outer side', () => {
    test("Greet Render With a new example", () => {
        // render the component on virtual dom
        render(<Group name="World" />)
        const element = screen.getByText("Hello World");
        expect(element).toBeInTheDocument();
    });
});