import React from "react";

const Offers = () => {
  const categoryList = [
    {
      catergoryName: "Smart Watches",
      imgUrl:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20795178/2022/11/21/fddc1dac-87cc-4d20-bfb7-9dba9c998e4b1669020110507-Noise-ColorFit-Icon-2-Smartwatch---Midnight-Gold-16216690201-1.jpg",
      offer: "25%",
    },
    {
      catergoryName: "LapTop",
      imgUrl:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683554362/Croma%20Assets/Computers%20Peripherals/Laptop/Images/265601_0_ltboxr.png?tr=w-600",
      offer: "15%",
    },
    {
      catergoryName: "HeadPhone",
      imgUrl:
        "https://images-cdn.ubuy.co.in/64c187b99131077064102881-beats-solo3-wireless-on-ear-headphones.jpg",
      offer: "40%",
    },
    {
      catergoryName: "Camera",
      imgUrl: "https://gppro.in/wp-content/uploads/2021/08/GP001159-3.jpg",
      offer: "25%",
    },
    {
      catergoryName: "Phone",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv91iR8B2pBwY0_h-RjsfsN0jrUhHdTTnZcBrdlvF-OEKEXYKyfU4raTBmSQuGZ-Wa2M&usqp=CAU",
      offer: "25%",
    },
  ];

  return (
    <div className="px-10 py-20 flex justify-center w-full">
      {/* div1 */}
      <div className="border-r border-l border-t border-b p-11">
        <p className="text-2xl font-semibold">Deals and offers</p>
        <p className="text-neutral-500 font-medium text-xl">
          Hygiene equipments
        </p>
        <div className="flex  text-white gap-4 py-6 ">
          <div className="bg-slate-600 w-12 px-2 rounded-sm">
            <p>04</p>
            <p>Days</p>
          </div>

          <div className="bg-slate-600 w-12 px-2 rounded-sm">
            <p>13</p>
            <p>Hour</p>
          </div>

          <div className="bg-slate-600 w-12 px-2 rounded-sm">
            <p>34</p>
            <p>Min</p>
          </div>

          <div className="bg-slate-600 w-12 px-2 rounded-sm">
            <p>56</p>
            <p>Sec</p>
          </div>
        </div>
      </div>

      {/* div 2 */}

      <div className="flex">
        {categoryList.map((item, index) => (
          <div key={index} className="w-full p-10 border-r border-t border-b ">
            <img className="w-32 h-40" src={item.imgUrl} />
            <p>{item.catergoryName}</p>
            <p className="bg-red-400 rounded-md w-12 px-1 text-base">
              {item.offer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
