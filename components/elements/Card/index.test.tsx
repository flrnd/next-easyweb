import { MapIcon } from "@heroicons/react/outline";
import { render } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  it("renders a card with icon", () => {
    const { getByText } = render(
      <Card icon={<MapIcon />}>
        <h1>Hello</h1>
      </Card>
    );

    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
