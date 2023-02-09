import { render } from "@testing-library/react";
import { contactDataList } from "fakeData/data";
import Contact from ".";

describe("Contact", () => {
  it("renders a contact information list", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Contact
        title="Contact"
        text="Lorem Ipsum"
        size="large"
        list={contactDataList}
      />
    );

    expect(getByRole("heading")).toBeInTheDocument();
    expect(getByRole("list")).toBeInTheDocument();
    expect(getByText("Lorem Ipsum")).toBeInTheDocument();
    expect(getAllByRole("listitem").length).toBe(contactDataList.list.length);
  });
});
