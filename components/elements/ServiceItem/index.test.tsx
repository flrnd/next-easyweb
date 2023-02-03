import { render } from "@testing-library/react";
import { serviceItem } from "fakeData/data";
import ServiceItem from ".";

describe("ServiceItem", () => {
  it("renders an icon, heading, description and a link", () => {
    const utils = render(
      <ServiceItem
        icon={serviceItem.icon}
        name={serviceItem.name}
        text={serviceItem.description}
        href={serviceItem.href}
        ariaLabel="services-listitem"
      />
    );

    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(utils.getByLabelText("services-listitem")).toBeInTheDocument();
    expect(utils.getByRole("heading")).toBeInTheDocument();
    expect(utils.getByText(serviceItem.description)).toBeInTheDocument();
    expect(utils.getByRole("link")).toBeInTheDocument();
  });
});
