import { render } from "@testing-library/react";
import ContactItem from ".";
import { IListItem } from "../../../lib/types";
import { contactDataList } from "../../../__mocks__/fakeData/data";

describe("Contact item", () => {
  it("Renders a contact item with icon, title and text", () => {
    const itemData: IListItem = contactDataList.list[0];

    const { getByRole, getByText } = render(
      <ContactItem
        title={itemData.title}
        icon={itemData.icon}
        value={itemData.value}
      />
    );

    expect(getByRole("listitem")).toHaveTextContent(itemData.title);
    expect(document.querySelector("svg")).toBeInTheDocument();
    itemData.value.map((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });
});
