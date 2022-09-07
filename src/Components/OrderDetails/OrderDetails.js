import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCheckCircle,
  faThumbsUp,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";

const OrderDetails = () => {
  return (
    <div className="bg-[#0484FB] pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-10 ml64 py-10 gap-3">
        <div className="flex justify-between bg-white border shadow-sm rounded-xl p-8">
          <div>
            <h1 className="uppercase text-slate-600 font-semibold font-mono  text-sm lg:text-lg">
              pending order
            </h1>
            <p className="font-bold text-xl text-gray-600">202</p>
          </div>{" "}
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="bg-gray-400 text-white text-4xl p-3 rounded-full"
          />
        </div>
        <div className="flex justify-between bg-white border shadow-sm rounded-xl p-8">
          <div>
            <h1 className="uppercase text-slate-600 font-semibold font-mono text-sm lg:text-lg">
              processing order
            </h1>
            <p className="font-bold text-xl text-gray-600">99</p>
          </div>{" "}
          <FontAwesomeIcon
            icon={faBarsProgress}
            className="bg-yellow-400 text-white text-4xl p-3 rounded-full"
          />
        </div>
        <div className="flex justify-between bg-white border shadow-sm rounded-xl p-8">
          <div>
            <h1 className="uppercase text-slate-600 font-semibold font-mono  text-sm lg:text-lg ">
              ready to deliver
            </h1>
            <p className="font-bold text-xl text-gray-600">263</p>
          </div>{" "}
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="bg-green-500 text-white text-4xl p-3 rounded-full"
          />
        </div>
        <div className="flex justify-between bg-white border shadow-sm rounded-xl p-8">
          <div>
            <h1 className="uppercase text-slate-600 font-semibold font-mono  text-sm lg:text-lg">
              delivered orders
            </h1>
            <p className="font-bold text-xl text-gray-600">345</p>
          </div>{" "}
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="bg-blue-400 text-white text-4xl p-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
