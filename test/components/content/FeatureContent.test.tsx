import { cleanup, render, screen } from "@testing-library/react";
import FeatureContent from "../../../components/content/FeatureContent";
import mockUrl from "../../__mocks__/mockUrl";

afterAll(cleanup);

describe("Feature Content", () => {
  const title = "This is a title";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const buttonText = "more info";
  const buttonURL = "/more_info";

  render(
    <FeatureContent
      title={title}
      description={description}
      buttonText={buttonText}
      buttonURL={buttonURL}
    />
  );

  it("should render a heading, description and a button", () => {
    // heading
    expect(screen.getByRole("heading").textContent).toBe(title);
    // description
    expect(screen.getByText(description).textContent).toBe(description);
    // button && button link
    expect(screen.getByRole("button").textContent).toBe(buttonText);
    const link = screen.getByRole("link", {
      name: buttonText,
    }) as HTMLAnchorElement;
    expect(link.href).toBe(mockUrl(buttonURL));
  });
});
