import { useEffect } from "react";
import { Heading } from "../../../typography";
import router from "next/router";
import { useAppSelector } from "../../../../lib/hooks";
import ProfileView from "../ProfileView";

const ProfilePanelForm = (): JSX.Element => {
  const { session, profileDetails } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!session) {
      router.replace("/signin");
    }
  }, [session]);

  return (
    <div className="mt-10">
      <div className="dashboard-panel">
        <div className="dashboard-panel-main-section">
          <Heading level={4} size="medium" margin="mb-4" weight="font-bold">
            Profile
          </Heading>
        </div>
        <div className="dashboard-panel-section">
          {profileDetails && <ProfileView profileDetails={profileDetails} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanelForm;
