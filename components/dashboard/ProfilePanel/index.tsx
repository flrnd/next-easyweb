import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../../lib/util/supabase/supabase-client";
import {
  IChangePasswordFormData,
  IProfileData,
  IProfileDetails,
} from "../../../lib/types";
import { Heading } from "../../typography";
import { Anchor, Button } from "../../controls";
import { getIcon } from "../../icons";
import ChangePasswordForm from "../../form/ChangePasswordForm";
import router from "next/router";
import classNames from "classnames";
import { validatePasswordStrength } from "../../../lib/util";
import {
  useAppDispatch,
  useAppSelector,
  useNotification,
} from "../../../lib/hooks";
import { updateUserProfile } from "../../../lib/features/User";

const ProfilePanel = (): JSX.Element => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [edit, setEdit] = useState(false);
  const { user, session, profileDetails } = useAppSelector(
    (state) => state.user
  );
  const [showNotification, notificationMessage, notification] =
    useNotification();
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (data: IProfileData) => {
      data.firstName && setFirstName(data.firstName);
      data.lastName && setLastName(data.lastName);
      data.billingAddress && setBillingAddress(data.billingAddress);
      data.avatar && setAvatarUrl(data.avatar);

      const updates: IProfileDetails = {
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        billing_address: billingAddress,
        avatar_url: avatarUrl,
      };

      dispatch(updateUserProfile(updates));

      notification({ type: "success", content: "Profile updated." });
      setEdit(false);
      setShowChangePasswordForm(false);
    },
    [
      user.id,
      firstName,
      lastName,
      billingAddress,
      avatarUrl,
      dispatch,
      notification,
    ]
  );

  useEffect(() => {
    if (!session) {
      router.replace("/signin");
    }
  }, [session]);

  useEffect(() => {
    if (!profileDetails) {
      notification({ type: "error", content: "Empty profile." });
    } else {
      setFirstName(profileDetails.first_name);
      setLastName(profileDetails.last_name);
      setBillingAddress(profileDetails.billing_address);
      setAvatarUrl(profileDetails.avatar_url);
    }
  }, [profileDetails, notification]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileData>();

  const onSubmitChangePassword = useCallback(
    async (formData: IChangePasswordFormData) => {
      try {
        const passwordStrength = validatePasswordStrength(formData.newPassword);

        if (passwordStrength.validation) {
          const { data, error } = await supabase.rpc("change_user_password", {
            current_plain_password: formData.currentPassword,
            new_plain_password: formData.newPassword,
          });
          if (error) throw error;
          if (data) {
            notification({
              type: "success",
              content: "Password changed successfully",
            });
            setShowChangePasswordForm(false);
          }
        } else {
          notification({
            type: "error",
            content: passwordStrength.errors.join(", "),
          });
        }
      } catch (error) {
        notification({ type: "error", content: error.message });
        console.error("ChangePasswordForm - onSubmit(): ", error.message);
      }
    },
    [notification]
  );
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
                rounded="rounded-md"
                shadow="shadow-sm"
                hover="shadow-md"
                className="px-4 border-solid border-2 border-gray-100 mr-2"
                onClick={() => {
                  setEdit(false);
                  setShowChangePasswordForm(false);
                }}
              >
                Cancel
              </Button>
              <div className="px-4 py-1 shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-md">
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

        <div className="panel max-w-lg mt-8">
          <div className="form-entry">
            <label className="form-label">
              First name
              {errors.firstName && (
                <span className="notification-red">* Missing First name</span>
              )}
            </label>
            <input
              className={classNames(
                "form-input",
                edit && "border border-gray-200 shadow",
                !edit && "border border-transparent"
              )}
              id="first_name"
              value={firstName || ""}
              type="text"
              {...register("firstName", { required: false })}
              placeholder="Jane"
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!edit}
            />
          </div>
          <div className="form-entry">
            <label className="form-label">
              Last name
              {errors.firstName && (
                <span className="notification-red">* Missing Last name</span>
              )}
            </label>
            <input
              className={classNames(
                "form-input",
                edit && "border border-gray-200 shadow",
                !edit && "border border-transparent"
              )}
              id="last_name"
              value={lastName || ""}
              type="text"
              {...register("lastName", { required: false })}
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
              disabled={!edit}
            />
          </div>
          <div className="form-entry">
            <label className="form-label">
              Billing Address
              {errors.billingAddress && (
                <span className="notification-red">
                  * Missing Billing Address
                </span>
              )}
            </label>
            <input
              className={classNames(
                "form-input",
                edit && "border border-gray-200 shadow",
                !edit && "border border-transparent"
              )}
              id="billing_address"
              value={billingAddress || ""}
              type="text"
              {...register("billingAddress", { required: false })}
              placeholder="Sesame Street 5, corner square 44 street"
              onChange={(e) => setBillingAddress(e.target.value)}
              disabled={!edit}
            />
          </div>
          <div className="form-entry">
            {!showChangePasswordForm && (
              <label className="form-label">Password</label>
            )}
            {!edit && (
              <input
                className="form-input"
                id="password"
                value={"*****************"}
                type="text"
                disabled={true}
              />
            )}
            {edit && !showChangePasswordForm && (
              <Button
                textColor="text-black"
                background="bg-white"
                rounded="rounded-md"
                shadow="shadow-sm"
                className="px-4 py-1 border-solid border-2 border-grey-200"
                hoverBg="shadow-md"
                type="button"
                onClick={handleChangePassword}
              >
                Change password
              </Button>
            )}
          </div>
          {edit && (
            <div className="mb-4">
              {showChangePasswordForm && (
                <div className="max-w-sm">
                  <ChangePasswordForm onSubmit={onSubmitChangePassword} />
                </div>
              )}
            </div>
          )}
          {showNotification && notificationMessage.type === "success" && (
            <span className="notification-green">
              {notificationMessage.content}
            </span>
          )}
          {showNotification && notificationMessage.type === "error" && (
            <span className="notification-red">
              {notificationMessage.content}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
