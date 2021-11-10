import { render, screen } from "@testing-library/react";
import Heading from "../../../components/typography/Heading";

describe("Heading", () => {
  it("should render a heading with its props", () => {
    const a11yTitle = "a11y Title";
    const level = 1;
    const size = "large";
    const margin = "mb-8";
    const tracking = "tracking-normal";

    render(
      <Heading
        a11yTitle={a11yTitle}
        level={level}
        size={size}
        margin={margin}
        tracking={tracking}
      >
        Heading 1
      </Heading>
    );

    expect(screen.getByRole("heading").textContent).toBe("Heading 1");
    expect(screen.getByRole("heading").getAttribute("aria-label")).toBe(
      "a11y Title"
    );
    expect(screen.getByRole("heading").classList).toContain(size);
    expect(screen.getByRole("heading").classList).toContain(margin);
    expect(screen.getByRole("heading").classList).toContain(tracking);
  });

  it("should render a heading with default props", () => {
    const text = "This is a heading";

    const defaults = {
      size: "xxxlarge",
      weight: "font-extrabold",
      margin: "mb-6",
      tracking: "tracking-tight",
    };

    render(<Heading>{text}</Heading>);
    expect(screen.getByRole("heading").textContent).toBe(text);
    expect(screen.getByRole("heading").getAttribute("aria-label")).toBe(null);
    expect(screen.getByRole("heading").classList).toContain(defaults.size);
    expect(screen.getByRole("heading").classList).toContain(defaults.weight);
    expect(screen.getByRole("heading").classList).toContain(defaults.margin);
    expect(screen.getByRole("heading").classList).toContain(defaults.tracking);
  });
});
