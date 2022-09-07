import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartLine,
  faChartSimple,
  faFile,
  faGear,
  faHome,
  faImage,
  faList,
  faPowerOff,
  faShoppingBasket,
  faTag,
  faTags,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const sidebar = () => {
  return (
    <div className="bg-[#0484FB]">
      <button
        type="button"
        className="text-white"
        data-hs-overlay="#docs-overlay"
        aria-controls="docs-overlay"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="w-8 h-8"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        id="docs-overlay"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white pt-7 pb-10 overflow-y-auto scrollbar-y shadow-2xl m-5 rounded-2xl "
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold"
            href="/#"
            aria-label="LAUNDRY"
          >
            <FontAwesomeIcon icon={faImage} className="pr-2" />
            LAUNDRY
          </a>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-sky-400 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faHome} />
                Dashboard
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-red-500 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faTag} />
                Pos
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-green-400 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faShoppingBasket} />
                Orders
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-amber-300 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faList} />
                Order Status Screen
              </a>
            </li>

            <li className="hs-accordion" id="users-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent font-semibold  text-md text-red-500 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faFile} />
                Expense
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group pl-3 pt-2 space-y-3"
                  data-hs-accordion-always-open
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <ul className="pt-2 pl-2 space-y-2">
                      <li>
                        <a
                          className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                          href="/#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                          href="/#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                          href="/#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-purple-400 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faUser} />
                Customers
              </a>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent font-semibold  text-md text-blue-400 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faTag} />
                Services
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="account-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 pl-2">
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent font-semibold  text-md text-orange-300 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faChartSimple} />
                Reports
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="account-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 pl-2">
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent font-semibold  text-md text-yellow-500 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faGear} />
                Tools
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="account-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 pl-2">
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-2.5 text-sm text-slate-700 rounded-md font-semibold  text-md border border-blue-200  hover:bg-blue-400 hover:text-white"
                      href="/#"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 font-semibold  text-md text-red-600 shadow border border-gray-100 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-400"
                href="/#"
              >
                <FontAwesomeIcon icon={faPowerOff} />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default sidebar;
