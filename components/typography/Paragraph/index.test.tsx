import { render } from "@testing-library/react";
import Paragraph from ".";

describe("Paragraph", () => {
  it("renders a paragraph with its props", () => {
    const text = "lorem ipsum";
    const params = {
      margin: "mb-4",
      size: "small",
      weight: "font-bold",
      textAlign: "text-center",
      fontFamily: "font-serif",
    };

    const { getByText } = render(
      <Paragraph
        margin={params.margin}
        size={params.size}
        weight={params.weight}
        textAlign={params.textAlign}
        fontFamily={params.fontFamily}
      >
        {text}
      </Paragraph>
    );
    const paragraph = getByText(text);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.classList).toContain(params.margin);
    expect(paragraph.classList).toContain(params.size);
    expect(paragraph.classList).toContain(params.weight);
    expect(paragraph.classList).toContain(params.textAlign);
    expect(paragraph.classList).toContain(params.fontFamily);
  });
});
