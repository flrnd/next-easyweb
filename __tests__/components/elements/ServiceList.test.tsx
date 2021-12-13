import { render } from "@testing-library/react";
import { ServiceList } from "../../../components/elements";
import { serviceList } from "../../../__mocks__/fakeData";

describe("Service List", () => {
  it("renders a list of N services", () => {
    render(<ServiceList services={serviceList} />);

    expect(document.getElementsByClassName("service").length).toBe(
      serviceList.length
    );
  });
});
