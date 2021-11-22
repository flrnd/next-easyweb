import { render, screen } from "@testing-library/react";
import { Button } from "../../../components/controls";

describe("Button", () => {
  it("should render a button with link and css classes", () => {
    const baseURL = "http://localhost";
    const text = "Get Started";
    const path = "/get-started";
    render(
      <Button
        label={text}
        background="bg-red-200"
        textColor="text-white"
        href={path}
      />
    );

    const link = screen.getByRole("link") as HTMLAnchorElement;

    expect(link.href).toBe(`${baseURL}${path}`);
    expect(screen.getByRole("link").textContent).toBe(text);
    expect(screen.getByRole("button").classList).toContain("bg-red-200");
    expect(screen.getByRole("button").classList).toContain("text-white");
  });
});
