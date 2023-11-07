import React from "react";

const ContactUs = () => {
  return (
    <div className=" flex justify-between bg-cyan-500 px-10 py-20 m-5  ">
      {/* div1 */}
      <div>
        <p className="text-2xl font-bold break-words w-72 text-white">
          An easy Way to send request to all suppliers
        </p>
        <p className="text-white pt-3 break-words w-80">
          You can also contact us by submitting the form below. Please provide
          as much information as possible so that we can best assist you.
        </p>
      </div>

      {/* div2 */}
      <div className="bg-white p-12 flex flex-col gap-3">
        <p className="font-semibold text-xl">Send Quotes to Suppliers</p>
        <input
          className="border h-10 px-2"
          type="text"
          placeholder="What item you nedd?"
        />
        <input
          className="border h-16 px-2"
          type="text"
          placeholder="Type more details"
        />

        <div className="flex gap-3">
          <input
            className="border h-8 px-2"
            type="text"
            placeholder="Quantity"
          />
          <input className="border h-8 px-2" type="text" placeholder="Pcs" />
        </div>

        <button className="bg-sky-600 text-white  text-xl rounded-md w-32 h-10">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
