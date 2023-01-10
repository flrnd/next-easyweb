import { render, screen } from "@testing-library/react";
import { Anchor } from "../../controls";

describe("Anchor", () => {
  it("renders an anchor link with it's props", () => {
    render(
      <Anchor
        a11yTitle="accesible title"
        href="http://thisisalink.com"
        label="a label"
      />
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "http://thisisalink.com"
    );
    expect(screen.getByLabelText(/accesible title/)).toBeInTheDocument();
    expect(screen.getByText(/a label/)).toBeInTheDocument();
  });

  it("renders a button when pass onClick", () => {
    const mockOnClick = jest.fn();
    render(<Anchor label="a button" onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /a button/ });

    expect(button).toBeInTheDocument();
    button.click();

    expect(mockOnClick).toHaveBeenCalled();
  });
});
