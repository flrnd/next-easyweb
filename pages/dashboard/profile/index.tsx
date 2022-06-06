import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfilePanel from "../../../components/dashboard/ProfilePanel";
import DashboardNavigationBar from "../../../components/dashboard/DashboardNavigationBar";
import { useSelector } from "react-redux";
import { selectUser } from "../../../lib/features/User";

const Profile = (): JSX.Element => {
  const { session } = useSelector(selectUser);

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session]);

  const SideBar = (): JSX.Element => <div></div>;

  return (
    session && (
      <div className="dashboard">
        <DashboardNavigationBar />
        <main>
          <SideBar />
          <ProfilePanel />
        </main>
      </div>
    )
  );
};

export default Profile;
