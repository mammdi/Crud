/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assest/logo.png";

function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-row justify-between items-center bg-transparent">
          <div className="px-2 lg:px-4">
            <h1 className="cursor-pointer text-2xl lg:text-3xl font-bold text-black py-2 lg:py-4">
              <img src={logo} alt="logo" />
            </h1>
          </div>
          <div className="px-2 lg:px-4">
            <ul className="flex">
              <li className="lg:hidden cursor-pointer mx-2 text-sm font-semibold leading-8 font-sans">
                <div className="group inline-block">
                  <button className="outline-none focus:outline-none bg-white rounded-sm flex items-center">
                    <span className="mr-1">MENU</span>
                    <svg
                      className="w-3 h-3 text-gray-800 dark:text-white transform transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </button>
                  <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute z-30 transition duration-300 ease-in-out origin-top min-w-44">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage 2
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage 3
                    </li>
                  </ul>
                </div>
              </li>
              <li className="lg:mx-3 text-xs lg:text-sm font-semibold leading-10 font-sans">
                <div className="group inline-block">
                  <button className="outline-none focus:outline-none bg-white rounded-sm flex items-center">
                    <span className="mr-1">HOME</span>
                    <svg
                      className="w-3 h-3 text-gray-800 dark:text-white ml-1 transform transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </button>
                  <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute z-30 transition duration-300 ease-in-out origin-top min-w-44">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage 2
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Homepage 3
                    </li>
                  </ul>
                </div>
              </li>
              <li className="lg:mx-3 text-xs lg:text-sm font-semibold leading-10 font-sans">
                <div className="group inline-block">
                  <button className="outline-none focus:outline-none bg-white rounded-sm flex items-center">
                    <span className="mr-1">PAGES</span>
                    <svg
                      className="w-3 h-3 text-gray-800 dark:text-white ml-1 transform transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </button>
                  <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute z-30 transition duration-300 ease-in-out origin-top min-w-44">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Team
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Career
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog Single
                    </li>
                  </ul>
                </div>
              </li>
              <li className="lg:mx-3 text-xs lg:text-sm font-semibold leading-10 font-sans">
                ABOUT
              </li>
              <li className="lg:mx-3 text-xs lg:text-sm font-semibold leading-10 font-sans">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
