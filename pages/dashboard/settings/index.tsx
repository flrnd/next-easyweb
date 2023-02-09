import DashboardNavigationBar from "components/dashboard/DashboardNavigationBar";
import SettingsPanel from "components/dashboard/SettingsPanel";

const SideBar = (): JSX.Element => <div></div>;

const Settings = (): JSX.Element => {
  return (
    <div className="dashboard">
      <DashboardNavigationBar />
      <main>
        <SideBar />
        <SettingsPanel />
      </main>
    </div>
  );
};

export default Settings;
