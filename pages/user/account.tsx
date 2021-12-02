import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../lib/util/useUser";
import { GoPerson, GoGear } from "react-icons/go";
import classNames from "classnames";
import Profile from "./profile";

const Account = (): JSX.Element => {
  const { session } = useUser();
  const [active, setActive] = useState("profile");

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/account/signin");
    }
  }, [session]);

  const buttons = [
    {
      name: "profile",
      icon: <GoPerson className="w-full h-full" />,
    },
    {
      name: "settings",
      icon: <GoGear className="w-full h-full" />,
    },
  ];

  const handleClick = (active: string) => setActive(active);

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        id="sidebar"
        className="h-screen w-16 menu bg-white text-white px-4 flex items-center fixed shadow"
      >
        <ul className="list-reset">
          {buttons.map((button) => (
            <li key={button.name} className="mb-10">
              <a
                onClick={() => handleClick(button.name.toLowerCase())}
                className={classNames(
                  button.name === active ? "text-indigo-600" : "text-gray-600",
                  "hover:text-indigo-800"
                )}
              >
                <div className="w-8 h-8">
                  {button.icon}
                  <span className="w-full">Profile</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="panel-content"
        className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-16"
      >
        {active === "profile" && (
          <div className="mx-auto">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
