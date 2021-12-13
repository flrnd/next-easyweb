import Link from "next/link";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../lib/store/useUser";
import { supabase } from "../../lib/util/supabaseClient";
import { useRouter } from "next/router";
import ProfileIcon from "../icons/dashboard/ProfileIcon";

const NavigationWithLogin = (): JSX.Element => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { user, session, getProfileDetails } = useUser();
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const mountedRef = useRef(null);

  async function getProfile() {
    try {
      const { data, error, status } = await getProfileDetails({
        userId: user.id,
      });
      if (error && status !== 200) {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    if (session) {
      getProfile();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (mountedRef.current && !mountedRef.current.contains(event.target)) {
        setMobileMenuIsOpen(false);
        setUserMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      mountedRef.current = null;
    };
  }, [session]);

  const isActiveLink = (href: string, currentPath: string): boolean => {
    if (href === "/") {
      return href === currentPath;
    }

    return currentPath.startsWith(href);
  };

  const navigationMenu = [
    {
      name: "Profile",
      href: "/user/profile",
    },
    {
      name: "Settings",
      href: "/user/settings",
    },
    { name: "Website", href: "/" },
  ];

  return (
    <nav ref={mountedRef} className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-900 hover:text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={classNames(
                  "h-6 w-6",
                  mobileMenuIsOpen ? "hidden" : "block"
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={mobileMenuIsOpen ? "true" : "false"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className={classNames(
                  "w-6 h-6",
                  mobileMenuIsOpen ? "block" : "hidden"
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={mobileMenuIsOpen ? "false" : "true"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigationMenu.map((menuItem) => (
                  <Link key={menuItem.name} href={menuItem.href} passHref>
                    <a
                      className={classNames(
                        isActiveLink(menuItem.href, router.pathname)
                          ? "dashboard-nav-active"
                          : "dashboard-nav"
                      )}
                      aria-current="page"
                    >
                      {menuItem.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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

                  {profile && <ProfileIcon />}
                </button>
              </div>

              <div
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
                <Link href="/user/profile" passHref>
                  <a
                    onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}
                    className="block px-4 py-2 text-sm text-gray-700"
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
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sm:hidden"
        id="mobile-menu"
        style={{ display: mobileMenuIsOpen ? "" : "none" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationMenu.map((menuItem) => (
            <Link key={menuItem.name} href={menuItem.href} passHref>
              <a
                className={classNames(
                  isActiveLink(menuItem.href, router.pathname)
                    ? "dashboard-nav-mobile-active"
                    : "dashboard-nav-mobile"
                )}
              >
                {menuItem.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationWithLogin;
