import { render } from "@testing-library/react";
import { ServiceItem } from "..";
import { serviceItem } from "../../../__mocks__/fakeData/data";

describe("ServiceItem", () => {
  it("renders an icon, heading, description and a link", () => {
    const { getByRole, getByText } = render(
      <ServiceItem
        icon={serviceItem.icon}
        name={serviceItem.name}
        text={serviceItem.description}
        href={serviceItem.href}
      />
    );

    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(getByRole("heading")).toBeInTheDocument();
    expect(getByText(serviceItem.description)).toBeInTheDocument();
    expect(getByRole("link")).toBeInTheDocument();
  });
});
