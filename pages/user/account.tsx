import { Session } from "@supabase/gotrue-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card } from "../../components/elements";
import { Container } from "../../components/layout";
import { supabase } from "../../lib/util/supabaseClient";
import { useUser } from "../../lib/util/useUser";

interface IProps {
  session: Session;
}

const Account = ({ session }: IProps): JSX.Element => {
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { user, getProfileDetails } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      getProfile();
    } else {
      router.push("/account/signin");
    }
  }, [session]);

  async function getProfile() {
    try {
      const { data, error, status } = await getProfileDetails({
        userId: user.id,
      });
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setEmail(user.email);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setBillingAddress(data.billing_address);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateProfile({
    first_name,
    last_name,
    billing_address,
    avatar_url,
  }) {
    try {
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        first_name,
        last_name,
        billing_address,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase
        .from("profiles")
        .upsert(updates, { returning: "minimal" });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <Card
        padding="px-4 pt-8"
        shadow="shadow-none"
        rounded="rounded-none"
        margin="mx-auto"
        height="h-screen"
      >
        <label htmlFor="email">Email</label>
        {email}
        <div className="mt-8">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="billing_address">Billing Address</label>
          <input
            id="billing_address"
            type="text"
            value={billingAddress || ""}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="avatar_url">Avatar URL</label>
          <input
            id="avatar_url"
            type="text"
            value={avatarUrl || ""}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <button
          className="button block primary"
          onClick={() =>
            updateProfile({
              first_name: firstName,
              last_name: lastName,
              billing_address: billingAddress,
              avatar_url: avatarUrl,
            })
          }
        >
          Update profile
        </button>
        <div className="mt-8">
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Account;
