import { render, screen } from "@testing-library/react";
import Button from "../../../components/elements/Button";

describe("Button", () => {
  it("should render a button with link and css classes", () => {
    const baseURL = "http://localhost";
    const text = "Get Started";
    const path = "/get-started";
    render(
      <Button
        text={text}
        bgColor="bg-red-200"
        textColor="text-white"
        path={path}
      />
    );

    const link = screen.getByRole("link") as HTMLAnchorElement;

    expect(link.href).toBe(`${baseURL}${path}`);
    expect(screen.getByRole("link").textContent).toBe(text);
    expect(screen.getByRole("link").classList).toContain("bg-red-200");
    expect(screen.getByRole("link").classList).toContain("text-white");
  });
});
