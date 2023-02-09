import Heading from "components/typography/Heading";
import { useAppSelector } from "lib/hooks";

const SettingsPanel = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="border-b-2">
          <Heading level={4} size="medium" weight="font-bold">
            {`${user && user.email} Invoice details`}
          </Heading>
        </div>
        <div className="my-4"></div>
      </div>
    </div>
  );
};

export default SettingsPanel;
