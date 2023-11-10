import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div className="bg-gray-200 flex flex-col gap-3 h-72 items-center justify-center">
        <p className="font-semibold text-2xl">Subscribe on our newsletter</p>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex gap-5">
          <input className="px-2 rounded-md " type="text" placeholder="email" />
          <button className="bg-sky-600 text-white  text-xl rounded-md w-32 h-10">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
