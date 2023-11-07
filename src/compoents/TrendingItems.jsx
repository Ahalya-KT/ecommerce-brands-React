import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TrendingItems = () => {
  return (
    <div className="flex  gap-10 px-14 pt-8 ">
      {/* div1 */}
      <div className=" flex flex-col gap-3 text-gray-400 w-1/6">
        <p>Automobiles</p>
        <p>Clothes and Wear</p>
        <p>Home interiors</p>
        <p>Computer and tech</p>
        <p>Tools,Equipment</p>
        <p>Sports and outdoor</p>
        <p>Animal and pets</p>
        <p>Machinery tools</p>
        <p>More category</p>
      </div>

      {/* div2 */}
      <div className="w-4/6 ">
        <div className="bg-[url('./assets/images/pic2.jpg')] h-full bg-cover relative ">
          <div className="absolute top-1/3   right-5 -translate-x-1/2 -translate-y-1/2 text-4xl">
            <p>Last Trending</p>
            <p className="font-bold text-3xl">Electronic Items</p>
            <button className="bg-white  text-xl rounded-md p-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* div3 */}
      <div className="flex flex-col gap-3   w-1/6 ">
        <div className="bg-indigo-100 h-32 px-7 ">
          <div className="break-words  py-2 ">
            <div className="flex items-center justify-center gap-3 ">
              <FaUserCircle size={30} />
              Hi,user lets get started
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <button className="bg-blue-600 w-36 rounded-md text-white text-sm p-1">
                  Join now
                </button>
              </div>
              <div>
                <button className="bg-white w-36 rounded-md text-sm p-1">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-400 h-28 text-white py-6 px-8">
          Get Us $10 off With a new supplier
        </div>

        <div className="bg-blue-300 h-28 py-6 px-5 text-white">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
