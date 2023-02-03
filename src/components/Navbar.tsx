import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="rounded-full  bg-neutral-800 p-2 text-yellow-500 ring-1 ring-gray-500"
          onClick={() => setTheme("light")}
        >
          <BsSunFill className="h-6 w-6" />
        </button>
      );
    } else {
      return (
        <button
          className="rounded-full p-2 text-gray-900 ring-1 ring-gray-600"
          onClick={() => setTheme("dark")}
        >
          <BsMoonFill className="h-6 w-6" />
        </button>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/" className="mb-4 flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Mateus Sousa</h2>
        </Link>
        <ul className="flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`group font-semibold ${
                  router.asPath === href
                    ? "text-black dark:text-white"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {label}
                <div
                  className={`h-[2px] w-full bg-blue-500 ${
                    router.asPath === href
                      ? "visible"
                      : "invisible group-hover:visible"
                  } mt-1`}
                ></div>
              </Link>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href="https://github.com/matews-sousa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <div className="flex items-center space-x-2">
                <span>GitHub</span>
                <HiOutlineExternalLink className="h-4 w-4" />
              </div>
              <div className="invisible mt-1 h-[2px] w-full bg-blue-400 group-hover:visible"></div>
            </a>
          </li>
        </ul>
      </div>
      {renderThemeChanger()}
    </nav>
  );
};

export default Navbar;

const links = [
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];
