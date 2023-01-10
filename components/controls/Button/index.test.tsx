import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render a button with link and props", () => {
    const buttonText = "Get Started";
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Button
        type="button"
        label={buttonText}
        background="bg-red-200"
        textColor="text-white"
        rounded="rounded-md"
        shadow="shadow-md"
        margin="mr-4"
        hoverBg="bg-red-300"
        hover="text-red-500"
        onClick={handleClick}
      />
    );

    const button = getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();

    button.click();
    expect(handleClick).toHaveBeenCalled();

    const classesList = [
      "bg-red-200",
      "text-white",
      "rounded-md",
      "shadow-md",
      "mr-4",
      "hover:bg-red-300",
      "hover:text-red-500",
    ];

    classesList.forEach((item: string) => {
      expect(button.classList).toContain(item);
    });
  });
});
