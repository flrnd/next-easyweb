import { render } from "@testing-library/react";
import { logotype } from "fakeData/data";
import Logo from ".";

describe("Logo", () => {
  it("renders a logotype", () => {
    render(
      <Logo
        src={logotype.src}
        width={logotype.dimensions.width}
        height={logotype.dimensions.height}
      />
    );

    expect(document.querySelector("img")).toBeInTheDocument();
  });
});
