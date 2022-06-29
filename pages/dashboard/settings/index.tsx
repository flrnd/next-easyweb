import InvoiceSettingsPanel from "../../../components/dashboard/InvoiceSettingsPanel";
import DashboardNavigationBar from "../../../components/dashboard/DashboardNavigationBar";

const SideBar = (): JSX.Element => <div></div>;

const Settings = (): JSX.Element => {
  return (
    <div className="dashboard">
      <DashboardNavigationBar />
      <main>
        <SideBar />
        <InvoiceSettingsPanel />
      </main>
    </div>
  );
};

export default Settings;
