import { cleanup, render, screen } from "@testing-library/react";
import Image from "next/image";
import Button from "../../../components/Button";
import Hero from "../../../components/content/Hero";
import placeholder from "../../../public/1920x1280.png";

afterAll(cleanup);

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
            bgColor="bg-indigo-600"
            textColor="text-white"
            hoverBg="bg-indigo-700"
            path="/"
            text="Get Started"
          />
        }
      />
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
