import { render, screen } from "@testing-library/react"
import {Main} from "./Main";

/**
 * You can use .spec file extension
 */

describe("Greet Group", () => {
    it("Greet Render With .spec extension", () => {
        // render the component on virtual dom
        render(<Main />)

        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    });
    describe('Nested Greet Group', () => {
        it("Greet Render With a name", () => {
            // render the component on virtual dom
            render(<Main name="Pankaj" />)
            const element = screen.getByText("Hello Pankaj");
            expect(element).toBeInTheDocument();
        });
    });
});

// SKIP
describe.skip("Greet Group with skip", () => {
    xit("Greet Render With .spec extension with skip", () => {
        // render the component on virtual dom
        render(<Main />)

        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    });
});

// ONLY
describe.only("Greet Group with only", () => {
    fit("Greet Render With .spec extension with only", () => {
        // render the component on virtual dom
        render(<Main />)

        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    });
});