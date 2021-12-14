import { render, screen } from "@testing-library/react";
import Image from "next/image";
import { Button } from "../../controls";
import { Hero } from "..";
import placeholder from "../../../public/1920x1280.png";

describe("Hero", () => {
  it("renders a heading and subheading", () => {
    render(<Hero heading="Hello" text="world" />);

    expect(screen.getByRole("heading").textContent).toBe("Hello");
    expect(screen.getByText("world")).toBeInTheDocument();
  });

  it("renders with an image", () => {
    render(
      <Hero
        heading="hello"
        text="world"
        image={
          <Image alt="test" src={placeholder} height={1280} width={1920} />
        }
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders with cta", () => {
    render(
      <Hero
        heading="hello"
        text="world"
        cta={
          <Button
            background="bg-indigo-600"
            textColor="text-white"
            hoverBg="bg-indigo-700"
            href="/"
            label="Get Started"
          />
        }
      />
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
