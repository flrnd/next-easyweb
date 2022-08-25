import { IProfileDetails } from "../../../../lib/types";

interface IProps {
  profileDetails: IProfileDetails;
}

const ProfileView = ({ profileDetails }: IProps): JSX.Element => {
  return (
    <>
      <div className="form-entry">
        <label className="form-label">First name</label>
        <input
          className="form-input border border-transparent"
          id="first_name"
          value={profileDetails.first_name || "Jane"}
          type="text"
          placeholder="Jane"
          disabled={true}
        />
      </div>
      <div className="form-entry">
        <label className="form-label">Last name</label>
        <input
          className="form-input border border-transparent"
          id="last_name"
          value={profileDetails.last_name || "Doe"}
          type="text"
          placeholder="Doe"
          disabled={true}
        />
      </div>
      <div className="form-entry">
        <label className="form-label">Company name</label>
        <input
          className="form-input border border-transparent"
          id="company_name"
          value={profileDetails.company_name || "ACME INC."}
          type="text"
          placeholder="ACME INC"
          disabled={true}
        />
      </div>
    </>
  );
};

export default ProfileView;
