import { render } from "@testing-library/react";
import { ServiceList } from "..";
import { serviceList } from "../../../__mocks__/fakeData/data";

describe("Service List", () => {
  it("renders a list of N services", () => {
    render(<ServiceList services={serviceList} />);

    expect(document.getElementsByClassName("service").length).toBe(
      serviceList.length
    );
  });
});
