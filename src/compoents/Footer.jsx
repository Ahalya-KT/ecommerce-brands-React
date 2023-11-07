import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex  flex-row items-center justify-center py-14 ">
      {/* div1 */}
      <div className="w-full px-5 ">
        <div className="flex">
          <AiFillShopping color="blue" size={25} />
          <p className="font-bold text-blue-500 text-xl">Brands</p>
        </div>

        <p className="text-neutral-500 w-72 ">
          Best information about the company gives here always we are
        </p>

        {/* social media */}

        <div className="flex gap-3 pt-4 text-white">
          <BiLogoFacebook className=" bg-slate-300 w-10 h-8 rounded-md " />
          <BsInstagram className=" bg-slate-300 w-10 h-8 rounded-md" />
          <BsTwitter className=" bg-slate-300 w-10 h-8 rounded-md" />
          <BiLogoLinkedin className=" bg-slate-300 w-10 h-8 rounded-md" />
        </div>
      </div>

      {/* div2 */}
      <div className="w-full">
        <p className="font-bold">About</p>
        <p className="text-gray-400">About us</p>
        <p className="text-gray-400">Find Store</p>
        <p className="text-gray-400">Categories</p>
        <p className="text-gray-400">Blogs</p>
      </div>

      {/* div3 */}

      <div className="w-full">
        <p className="font-bold">Partnership</p>
        <p className="text-gray-400">About us</p>
        <p className="text-gray-400">Find store</p>
        <p className="text-gray-400">Categories</p>
        <p className="text-gray-400">Blogs</p>
      </div>

      {/* div4 */}

      <div className="w-full">
        <p className="font-bold">Information</p>
        <p className="text-gray-400">Help Center</p>
        <p className="text-gray-400">Money</p>
        <p className="text-gray-400">Shipping</p>
        <p className="text-gray-400">Contact us</p>
      </div>

      {/* div5 */}
      <div className="w-full">
        <p className="font-bold">For users</p>
        <p className="text-gray-400">Login</p>
        <p className="text-gray-400">Register</p>
        <p className="text-gray-400">Setting</p>
        <p className="text-gray-400">My Orders</p>
      </div>

      {/* div6 */}
      <div className="w-full space-y-2">
        <p className="font-bold">Get App</p>

        <div className="w-20 space-y-3">
          <img
            src="https://statics.olx.in/external/base/img/appstore_2x.webp
                                "
          ></img>
          <img
            src="https://statics.olx.in/external/base/img/playstore_2x.webp
                                "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
