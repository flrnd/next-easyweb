import { render } from "@testing-library/react";
import logoImage from "public/assets/nextsites_logo.svg";

import Logo from ".";

const logotype = {
  src: logoImage,
  dimensions: {
    width: 180,
    height: 42,
  },
};

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
