import { cleanup, render, screen } from "@testing-library/react";
import Image from "next/image";
import Hero from "../../../components/section/Hero";
import placeholder from "../../../public/1920x1280.png";

afterAll(cleanup);

describe("Hero", () => {
  it("renders a heading and subheading", () => {
    render(<Hero valueProposition="Hello" valueDescription="world" />);

    expect(screen.getByRole("heading").textContent).toBe("Hello");
    expect(screen.getByText("world")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("renders with an image", () => {
    render(
      <Hero
        valueProposition="hello"
        valueDescription="world"
        image={
          <Image alt="test" src={placeholder} height={1280} width={1920} />
        }
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
