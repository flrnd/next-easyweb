import { render, screen } from "@testing-library/react";
import Heading from "../../../components/elements/Heading";

describe("Heading", () => {
  it("should render a heading", () => {
    render(<Heading level={1}>Heading 1</Heading>);

    expect(screen.getByRole("heading").textContent).toBe("Heading 1");
  });
});
