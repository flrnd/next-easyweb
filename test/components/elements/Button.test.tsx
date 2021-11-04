import { render, screen } from "@testing-library/react";
import Button from "../../../components/elements/Button";

describe("Button", () => {
  it("should render a button", () => {
    render(
      <Button
        text="Get Started"
        bgColor="bg-red-200"
        textColor="text-white"
        path="#"
      />
    );

    expect(screen.getByRole("link").textContent).toBe("Write a proper test");
  });
});
