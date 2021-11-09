import Image from "next/image";
import { render, screen } from "@testing-library/react";
import Feature from "../../../components/content/Feature";
import placeholder from "../../../public/1920x1280.png";

describe("Feature", () => {
  it("Should render a image with content", () => {
    render(
      <Feature
        image={
          <Image
            src={placeholder}
            height={1280}
            width={1920}
            alt="placeholder image"
            placeholder="empty"
          />
        }
      >
        <div>Hello</div>
      </Feature>
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(screen.getAllByText("Hello")).toBeInTheDocument;
  });
});
