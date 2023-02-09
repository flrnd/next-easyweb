import { render } from "@testing-library/react";
import { teamMembers } from "fakeData/data";
import Member from ".";

const mockSocialIconList = <div data-testid="social-icon-list" />;

describe("Member", () => {
  it("renders a member card with props", () => {
    const member = teamMembers[0];
    const { getByRole, getByText, getByTestId } = render(
      <Member
        image={member.image}
        name={member.name}
        jobTitle={member.jobTitle}
        excerpt={member.excerpt}
        social={mockSocialIconList}
      />
    );

    expect(getByRole("img")).toHaveAttribute("src", member.image);
    expect(getByText(member.name)).toBeInTheDocument();
    expect(getByText(member.jobTitle)).toBeInTheDocument();
    expect(getByText(member.excerpt)).toBeInTheDocument();
    expect(getByTestId(/social-icon-list/)).toBeInTheDocument();
  });
});
