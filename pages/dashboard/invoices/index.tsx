import DashboardNavigationBar from "../../../components/dashboard/DashboardNavigationBar";
import InvoicesPanel from "../../../components/dashboard/InvoicesPanel";

const SideBar = (): JSX.Element => <div></div>;

const Settings = (): JSX.Element => {
  return (
    <div className="dashboard">
      <DashboardNavigationBar />
      <main>
        <SideBar />
        <InvoicesPanel />
      </main>
    </div>
  );
};

export default Settings;
