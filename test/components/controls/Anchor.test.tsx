import { render } from "@testing-library/react";
import { Anchor } from "../../../components/controls";

describe("Anchor", () => {
  it("renders an anchor link with props", () => {
    const { getByRole } = render(<Anchor href="/link" label="link" />);

    expect(getByRole("link")).toHaveAttribute("href", "/link");
    expect(getByRole("link")).toHaveTextContent("link");
    /**
     * TODO: add test cases for the rest of the props
     **/
  });
});
