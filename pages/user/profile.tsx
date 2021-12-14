import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../../lib/store/useUser";
import ProfileView from "../../components/dashboard/ProfileView";
import Header from "../../components/layout/Header";

const Profile = (): JSX.Element => {
  const { session } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/account/signin");
    }
  }, [session]);

  const SideBar = (): JSX.Element => <div></div>;

  return (
    <div className="dashboard">
      <Header />
      <main>
        <SideBar />
        <ProfileView />
      </main>
    </div>
  );
};

export default Profile;
