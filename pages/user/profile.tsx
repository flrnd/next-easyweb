import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../../lib/util/useUser";
import ProfileContainer from "../../components/dashboard/profile";
import { Header } from "../../components/layout";

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
        <ProfileContainer />
      </main>
    </div>
  );
};

export default Profile;
