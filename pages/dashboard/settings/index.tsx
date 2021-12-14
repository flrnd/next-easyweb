import Header from "../../../components/layout/Header";
import SettingsPanel from "../../../components/dashboard/SettingsPanel";

const SideBar = (): JSX.Element => <div></div>;

const Settings = (): JSX.Element => {
  return (
    <div className="dashboard">
      <Header />
      <main>
        <SideBar />
        <SettingsPanel />
      </main>
    </div>
  );
};

export default Settings;
