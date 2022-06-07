import { useAppSelector } from "../../../lib/hooks";
import { Heading } from "../../typography";

const SettingsPanel = (): JSX.Element => {
  const { user, profileDetails } = useAppSelector((state) => state.user);
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="border-b-2">
          <Heading level={4} size="medium" weight="font-bold">
            Settings
            {user.email}
          </Heading>
        </div>
        <div className="my-4">
          {profileDetails.first_name} {profileDetails.last_name}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
