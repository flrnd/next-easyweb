import { render, screen } from "@testing-library/react";
import { NavigationBar } from "../../../components/navigation";

describe("NavigationBar", () => {
  it("should render a navbar", () => {
    const expected = "This is a string";

    render(
      <NavigationBar>
        <div>{expected}</div>
      </NavigationBar>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument;
  });
});
