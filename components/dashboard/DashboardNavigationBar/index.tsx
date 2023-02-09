import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import ProfileButton from "components/dashboard/ProfileButton";
import logoIcon from "public/assets/nextsites_icon.svg";
import nextsitesLogo from "public/assets/nextsites_logo.svg";

const DashboardNavigationBar = (): JSX.Element => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();

  const isActiveLink = (href: string, currentPath: string): boolean => {
    if (href === "/") {
      return href === currentPath;
    }

    return currentPath.startsWith(href);
  };

  const navigationMenu = [
    {
      name: "Profile",
      href: "/dashboard/profile",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
    },
    { name: "Invoices", href: "/invoices" },
  ];

  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              role="button"
              aria-label="burger-menu"
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
              <div className="block lg:hidden h-10 w-auto">
                <Image width={43} height={40} src={logoIcon} alt="Nextsites" />
              </div>
              <div className="hidden lg:block h-10 w-auto">
                <Image
                  width={180}
                  height={42}
                  src={nextsitesLogo}
                  alt="nextsites"
                />
              </div>
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
          <ProfileButton />
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

export default DashboardNavigationBar;
