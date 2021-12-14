import { render, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render a button with link and props", () => {
    const baseURL = "http://localhost";
    const text = "Get Started";
    const path = "/get-started";
    const { getByRole } = render(
      <Button
        label={text}
        background="bg-red-200"
        textColor="text-white"
        rounded="rounded-md"
        shadow="shadow-md"
        margin="mr-4"
        hoverBg="bg-red-300"
        hover="text-red-500"
        href={path}
      />
    );

    const link = getByRole("link") as HTMLAnchorElement;
    const button = getByRole("button");

    expect(link.href).toBe(`${baseURL}${path}`);
    expect(link.textContent).toBe(text);

    [
      "bg-red-200",
      "text-white",
      "rounded-md",
      "shadow-md",
      "mr-4",
      "hover:bg-red-300",
      "hover:text-red-500",
    ].forEach((item) => {
      expect(button.classList).toContain(item);
    });
  });

  it("Calls 'onClick' prop on click", () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<Button onClick={handleClick} />);

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
