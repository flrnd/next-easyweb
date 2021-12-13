import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../controls";
import { Card } from "../elements";
import { supabase } from "../../lib/util/supabaseClient";
import { useUser } from "../../lib/util/useUser";
import { IProfileData } from "../../types/interfaces";

const ProfileContainer = (): JSX.Element => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });
  const { user, session, getProfileDetails } = useUser();

  useEffect(() => {
    if (session) {
      getProfile();
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
    first_name = firstName,
    last_name = lastName,
    billing_address = billingAddress,
    avatar_url = avatarUrl,
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileData>();

  const onSubmit = (data: IProfileData) => {
    data.firstName && setFirstName(data.firstName);
    data.lastName && setLastName(data.lastName);
    data.billingAddress && setBillingAddress(data.billingAddress);
    data.avatar && setAvatarUrl(data.avatar);

    const updates = {
      first_name: firstName,
      last_name: lastName,
      billing_address: billingAddress,
      avatar_url: avatarUrl,
    };

    updateProfile(updates);

    setMessage({ type: "success", content: "Profile updated successfully" });
  };

  return (
    <div className="container mt-10 mx-auto">
      <Card
        padding="p-8"
        shadow="shadow-sm"
        rounded="rounded-md"
        margin="mx-auto"
        width="max-w-2xl"
        height="h-full"
      >
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="mr-5">
            <Image
              src={`https://robohash.org/${avatarUrl}`}
              width={240}
              height={240}
              alt="placeholder"
            />
            <input
              className="appearance-none hiden w-full py-2 text-grey-darker"
              id="avatar"
              value={avatarUrl || ""}
              type="text"
              {...register("avatar", { required: false })}
              placeholder="Avatar URL"
              onChange={(e) => setAvatarUrl(e.target.value)}
            />
          </div>
          <div className="w-full">
            {user?.email && <div className="font-bold mb-5">{user?.email}</div>}
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                First name
                {errors.firstName && (
                  <span className="text-sm text-red-500 font-normal italic ml-4">
                    * Missing First name
                  </span>
                )}
              </label>
              <input
                className="appearance-none inline w-full py-2 text-grey-darker"
                id="first_name"
                value={firstName || ""}
                type="text"
                {...register("firstName", { required: false })}
                placeholder="Jane"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Last name
                {errors.firstName && (
                  <span className="text-sm text-red-500 font-normal italic ml-4">
                    * Missing Last name
                  </span>
                )}
              </label>
              <input
                className="appearance-none inline w-full py-2 text-grey-darker"
                id="last_name"
                value={lastName || ""}
                type="text"
                {...register("lastName", { required: false })}
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Billing Address
                {errors.billingAddress && (
                  <span className="text-sm text-red-500 font-normal italic ml-4">
                    * Missing Billing Address
                  </span>
                )}
              </label>
              <input
                className="appearance-none inline w-full py-2 text-grey-darker"
                id="billing_address"
                value={billingAddress || ""}
                type="text"
                {...register("billingAddress", { required: false })}
                placeholder="Sesame Street 5, corner square 44 street"
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </div>
            <div className="mt-8 flex mb-8">
              <Button
                background="bg-indigo-600"
                textColor="text-white"
                rounded="rounded-none"
                shadow="shadow-md"
                margin="mr-4"
                hoverBg="bg-indigo-700"
                onClick={handleSubmit(onSubmit)}
                label="Update profile"
              />
            </div>
            {message.type === "success" && (
              <span className="text-sm text-green-500 font-normal italic ml-4">
                {message.content}
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileContainer;
