import { render, screen } from "@testing-library/react";
import Image from "next/image";
import placeholder from "public/1280x1280.png";
import ImageWithParagraph from ".";

describe("ImageWithParagraph", () => {
  it("Should render a image with content", () => {
    render(
      <ImageWithParagraph
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
      </ImageWithParagraph>
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(screen.getAllByText("Hello")).toBeInTheDocument;
  });
});
