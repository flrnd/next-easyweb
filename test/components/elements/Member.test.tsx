import { render } from "@testing-library/react";
import { Member, SocialIconList } from "../../../components/elements";
import { teamMembers } from "../../__mocks__/fakeData";

describe("Member", () => {
  it("renders a member card with props", () => {
    const member = teamMembers[0];
    const { getByRole, getByText } = render(
      <Member
        image={member.image}
        name={member.name}
        jobTitle={member.jobTitle}
        excerpt={member.excerpt}
        social={<SocialIconList items={member.social} />}
      />
    );

    const socialIcons = document.querySelectorAll("svg");

    expect(getByRole("img")).toHaveAttribute("src", member.image);
    expect(getByText(member.name)).toBeInTheDocument();
    expect(getByText(member.jobTitle)).toBeInTheDocument();
    expect(getByText(member.excerpt)).toBeInTheDocument();
    expect(socialIcons.length).toBe(member.social.length);
  });
});
