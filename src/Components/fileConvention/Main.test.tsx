import { render, screen } from "@testing-library/react"
import {Main} from "./Main";

/**
 * You can use .tsx
 */

describe("Greet Group", () => {
    test("Greet Render With file convention example", () => {
        // render the component on virtual dom
        render(<Main />)

        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    });
    describe('Nested Greet Group', () => {
        test("Greet Render With a name", () => {
            // render the component on virtual dom
            render(<Main name="Pankaj" />)
            const element = screen.getByText("Hello Pankaj");
            expect(element).toBeInTheDocument();
        });
    });
});
