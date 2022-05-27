import { render } from "@testing-library/react";
import { ServiceList } from "..";
import { serviceList } from "../../../__mocks__/fakeData/data";

describe("Service List", () => {
  it("renders a list of N services", () => {
    const utils = render(<ServiceList services={serviceList} />);

    const services = utils.getByLabelText("services-list");
    const serviceItems = utils.getAllByLabelText("services-listitem");

    expect(services).toBeInTheDocument();
    expect(serviceItems.length).toBe(serviceList.length);
  });
});
