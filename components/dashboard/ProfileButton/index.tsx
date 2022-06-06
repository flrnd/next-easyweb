import { getIcon } from "../../icons";
import { supabase } from "../../../lib/util/supabase/supabase-client";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../../lib/features/User";

const ProfileButton = (): JSX.Element => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const { session } = useSelector(selectUser);
  const mountedRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mountedRef.current && !mountedRef.current.contains(event.target)) {
        setUserMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      mountedRef.current = null;
    };
  }, [session]);

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="ml-3 relative">
        <div>
          <button
            type="button"
            className="h-6 w-6 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 text-indigo-900"
            id="user-menu-button"
            aria-expanded={userMenuIsOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}
          >
            <span className="sr-only">Open user menu</span>

            {getIcon("profile")}
          </button>
        </div>

        <div
          ref={mountedRef}
          className={classNames(
            "origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
            userMenuIsOpen ? "block" : "hidden"
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <div className="block px-4 pt-2 pb-3 text-sm text-gray-700 border-b-2">
            Signed as <strong>{session?.user.email}</strong>
          </div>
          <Link href="/dashboard/profile" passHref>
            <a
              onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              id="user-menu-item-0"
            >
              Profile
            </a>
          </Link>
          <Link href="/" passHref>
            <a
              onClick={() => {
                supabase.auth.signOut();
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
