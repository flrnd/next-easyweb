import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../../../lib/store/hooks/useUser";
import ProfilePanel from "../../../components/dashboard/ProfilePanel";
import DashboardNavigationBar from "../../../components/dashboard/DashboardNavigationBar";

const Profile = (): JSX.Element => {
  const { session } = useUser();

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
