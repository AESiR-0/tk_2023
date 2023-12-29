import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white scale-125 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mt-2 mx-auto p-4">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./logo_logo.png" className="h-8" alt="TK Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            2K24
          </span>
        </Link>
        <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span
            onClick={(e) => {
              e.preventDefault;
              setToggle(true);
            }}
            className="sr-only"
          >
            Open main menu
          </span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href={""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("events")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href={""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("footer")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="./register"
                className="block bg-gray-300 py-2 px-3 text-gray-900 rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white "
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
