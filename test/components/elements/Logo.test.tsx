import { render } from "@testing-library/react";
import { Logo } from "../../../components/elements";
import { logotype } from "../../__mocks__/fakeData";

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
