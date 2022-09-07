import React from "react";
import cap from "../../icons/cap.png";
import shirt from "../../icons/shirt.png";
import shoe from "../../icons/shoe.png";
import hoodie from "../../icons/hoodie.png";
import coat from "../../icons/coat.png";
import jeans from "../../icons/jeans.png";
import pant from "../../icons/pant.png";
import classicShoe from "../../icons/classic-shoe.png";

const DeliveryDetails = () => {
  return (
    <div className="bg-white py-10 rounded-xl shadow-2xl">
      <div className="lg:flex justify-between gap-10 px-4 lg:px-10">
        <h1 className="text-center text-lg lg:text-xl xl:text-3xl font-semibold">
          Today's Delivery
        </h1>
        <div className="lg:flex gap-2">
          <div className="my-4 lg:my-0">
            <label
              htmlFor="hs-leading-button-add-on-with-icon"
              className="sr-only"
            >
              Label
            </label>
            <div className="flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-l-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10  focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <input
                type="text"
                id="hs-leading-button-add-on-with-icon"
                placeholder="Search Here"
                name="hs-leading-button-add-on-with-icon"
                className="py-3 lg:px-4 w-full lg:pr-24 border border-gray-200 shadow rounded-r-md text-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-with-icons"
              type="button"
              className="hs-dropdown-toggle xl:py-3 px-6  inline-flex justify-center items-center gap-6 rounded-md border  bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm font-semibold"
            >
              All Orders
              <svg
                className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
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
                />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2  divide-y divide-gray-200"
              aria-labelledby="hs-dropdown-with-icons"
            >
              <div className="py-2 first:pt-0 last:pb-0 font-semibold">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Shirt
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    2
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Cap
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    3
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Shoe
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    2
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Coat
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    1
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Classic Shoe
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    1
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Pant
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    1
                  </span>
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/"
                >
                  Jeans
                  <span className="py-1.5 px-3 rounded-full text-xs  bg-blue-100 text-blue-800">
                    2
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-5 lg:p-10">
        <div className=" bg-white border-l-4 border-yellow-300 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>Dhanush</h2>
            <h2>ORD-0948</h2>
          </div>
          <img src={shirt} alt="shirt-icon" className="w-8" />
        </div>
        <div className=" bg-white border-l-4 border-red-500 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>Arif</h2>
            <h2>ORD-0949</h2>
          </div>
          <div className="flex gap-1">
            <img src={shirt} alt="shirt-icon" className="w-8" />

            <img src={jeans} alt="jeans-icon" className="w-8" />
          </div>
        </div>
        <div className=" bg-white border-l-4 border-gray-400 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>shiyas</h2>
            <h2>ORD-0950</h2>
          </div>

          <img src={cap} alt="cap-icon" className="w-8" />
        </div>
        <div className=" bg-white border-l-4 border-sky-400 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>yash</h2>
            <h2>ORD-0951</h2>
          </div>
          <div className="flex gap-1">
            <img src={shoe} alt="shoe-icon" className="w-8" />

            <img src={cap} alt="cap-icon" className="w-8" />
          </div>
        </div>
        <div className=" bg-white border-l-4 border-green-400 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>Carry</h2>
            <h2>ORD-0952</h2>
          </div>
          <div className="flex gap-1">
            <img src={coat} alt="coat-icon" className="w-8" />
            <img src={pant} alt="pant-icon" className="w-8" />

            <img src={classicShoe} alt="shoe-icon" className="w-8" />
          </div>
        </div>
        <div className=" bg-white border-l-4 border-orange-400 shadow-md rounded-xl p-4 hover:scale-110 duration-300 ease-in-out">
          <div className="flex justify-between pb-3 px-2 font-semibold text-sm">
            <h2>Rohit</h2>
            <h2>ORD-0953</h2>
          </div>
          <div className="flex gap-1">
            <img src={shoe} alt="shoe-icon" className="w-8" />

            <img src={jeans} alt="jeans-icon" className="w-8" />
            <img src={hoodie} alt="hoodie-icon" className="w-8" />
            <img src={cap} alt="cap-icon" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
