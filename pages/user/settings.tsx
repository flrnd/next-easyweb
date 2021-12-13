import { Header } from "../../components/layout";

const SideBar = (): JSX.Element => <div></div>;

const Settings = (): JSX.Element => {
  return (
    <div className="dashboard">
      <Header />
      <main>
        <SideBar />
        Settings
      </main>
    </div>
  );
};

export default Settings;
