import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../../lib/util/supabaseClient";
import { useUser } from "../../../lib/store/hooks/useUser";
import { IChangePasswordFormData, IProfileData } from "../../../lib/types";
import { Heading } from "../../typography";
import { Anchor, Button } from "../../controls";
import { getIcon } from "../../icons";
import ChangePasswordForm from "../../form/ChangePasswordForm";

const ProfilePanel = (): JSX.Element => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });
  const [edit, setEdit] = useState(false);
  const { user, session, getProfileDetails } = useUser();
  const [showNotification, setShowNotification] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

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
      console.error("ProfilePanel - getProfile(): ", error.message);
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
      console.error("ProfilePanel - updateProfile(): ", error.message);
      notification({ type: "error", content: "Unable to update profile." });
    }
  }

  const notification = (
    message: { type: string; content: string },
    time = 2000
  ) => {
    setShowNotification(true);
    setMessage(message);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };

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
    notification({ type: "success", content: "Profile updated." });
    setEdit(false);
    setShowChangePasswordForm(false);
  };

  const onSubmitChangePassword = async (formData: IChangePasswordFormData) => {
    try {
      const { data, error } = await supabase.rpc("change_user_password", {
        current_plain_password: formData.currentPassword,
        new_plain_password: formData.newPassword,
      });
      if (error) throw error;
      if (data) {
        setMessage({
          type: "success",
          content: "Password changed successfully",
        });
      }
    } catch (error) {
      setMessage({ type: "error", content: error.message });
      console.error("ChangePasswordForm - onSubmit(): ", error.message);
    }
  };
  const handleChangePassword = () =>
    setShowChangePasswordForm(!showChangePasswordForm);

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="border-b-2 flex items-baseline justify-between">
          <Heading level={4} size="medium" margin="mb-4" weight="font-bold">
            Profile
          </Heading>
          {!edit && (
            <div className="px-4 py-1 border-solid border-2 border-grey-100 shadow-sm hover:shadow-md rounded-md">
              <Anchor
                icon={getIcon("edit")}
                size="xsmall"
                gap="ml-1"
                reverse={true}
                label="Edit"
                onClick={() => setEdit(true)}
              />
            </div>
          )}
          {edit && (
            <div className="flex">
              <Button
                textColor="text-white"
                background="bg-indigo-600"
                rounded="rounded-md"
                shadow="shadow-none"
                hoverBg="bg-indigo-700"
                className="px-4 border-none mr-2"
                onClick={() => setEdit(false)}
              >
                Cancel
              </Button>
              <div className="px-4 py-1 border-solid border-2 border-grey-100 shadow-sm hover:shadow-md rounded-md">
                <Anchor
                  icon={getIcon("save")}
                  size="xsmall"
                  gap="ml-1"
                  reverse={true}
                  label="Save"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="panel max-w-sm mt-8">
          <div className="my-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              First name
              {errors.firstName && (
                <span className="text-sm text-red-500 font-normal italic ml-4">
                  * Missing First name
                </span>
              )}
            </label>
            <input
              className="appearance-none inline w-full px-3 py-2 text-grey-darker"
              id="first_name"
              value={firstName || ""}
              type="text"
              {...register("firstName", { required: false })}
              placeholder="Jane"
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!edit}
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
              className="appearance-none inline w-full px-3 py-2 text-grey-darker"
              id="last_name"
              value={lastName || ""}
              type="text"
              {...register("lastName", { required: false })}
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
              disabled={!edit}
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
              className="appearance-none inline w-full px-3 py-2 text-grey-darker"
              id="billing_address"
              value={billingAddress || ""}
              type="text"
              {...register("billingAddress", { required: false })}
              placeholder="Sesame Street 5, corner square 44 street"
              onChange={(e) => setBillingAddress(e.target.value)}
              disabled={!edit}
            />
          </div>
          {edit && (
            <div className="mb-4">
              {!showChangePasswordForm && (
                <Button
                  textColor="text-black"
                  background="bg-white"
                  rounded="rounded-md"
                  shadow="shadow-sm"
                  className="w-full border-solid border-2 border-indigo-600"
                  hoverBg="shadow-md"
                  label="Change password"
                  type="button"
                  onClick={handleChangePassword}
                />
              )}
              {showChangePasswordForm && (
                <>
                  <div className="max-w-sm">
                    <ChangePasswordForm onSubmit={onSubmitChangePassword} />
                  </div>
                </>
              )}
            </div>
          )}
          {showNotification && message.type === "success" && (
            <span className="text-sm text-green-500 font-normal italic ml-4">
              {message.content}
            </span>
          )}
          {showNotification && message.type === "error" && (
            <span className="text-sm text-red-500 font-normal italic ml-4">
              {message.content}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
