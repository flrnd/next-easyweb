import { render } from "@testing-library/react";
import Contact from "../../../components/elements/Contact";
import { contactDataList } from "../../__mocks__/fakeData";

describe("Contact", () => {
  it("renders a contact information list", () => {
    const { getByRole, getAllByRole } = render(
      <Contact
        title="Contact"
        description="Lorem Ipsum"
        size="large"
        list={contactDataList}
      />
    );

    expect(getByRole("heading")).toBeInTheDocument();
    expect(getByRole("list")).toBeInTheDocument();
    expect(getAllByRole("listitem").length).toBe(contactDataList.list.length);
  });
});
