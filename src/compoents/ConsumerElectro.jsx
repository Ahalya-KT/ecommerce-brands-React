import React from "react";

const ConsumerElectro = () => {
  const homeItems = [
    {
      itemName: "Smart Watches",
      price: "From USD 19",
      imgUrl:
        "https://w7.pngwing.com/pngs/329/395/png-transparent-smartwatch-android-bluetooth-technical-support-watch-electronics-accessories-bluetooth-thumbnail.png",
    },
    {
      itemName: "Camera",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoojHHsyIIWFU5OXkFAjtYaj5KsvKFIbijA&usqp=CAU",
    },
    {
      itemName: "Washing Machine",
      price: "From USD 18",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSuSQdnODj9OqSXZ414LZfT1YwjnJxzaT_w&usqp=CAU",
    },
    {
      itemName: "Telvision",
      price: "From USD 20",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54Tq4e1JYGXF1EWblI_EQW7N01xg8YwziEQ&usqp=CAU",
    },
    {
      itemName: "Fridge",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gyWThPpOVaFyQabbcjlfLdMGURSsY3aVgw&usqp=CAU",
    },
    {
      itemName: "Oven",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWWB101rExkS_I30JcSQ2bYQGeFBOlt6M0Q&usqp=CAU",
    },
    {
      itemName: "Tablet",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznI9cwmJ9BJ1ei28s5jIU73Dm3_1KxrNGGA&usqp=CAU",
    },
    {
      itemName: "Calculator",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XW7we8EQKa3dpKXFP_WNRsfMiNqInXPXxg&usqp=CAU",
    },
  ];
  return (
    <div className="flex px-20 py-10">
      {/* div1 */}
      <div className="bg-[url('./assets/images/pic5.jpg')] bg-cover  h-72 relative  border-r border-l border-t border-b w-96 p-16 ">
        <div className="absolute top-24 left-24 flex flex-col gap-2">
          <p className="font-bold text-xl w-44">Consumer Electronics</p>

          <button className="bg-white  text-xl rounded-md  w-32 h-10 ">
            Learn More
          </button>
        </div>
      </div>

      {/* div2 */}
      <div className="flex flex-wrap w-full">
        {homeItems.map((items, index) => (
          <div
            key={index}
            className="border-r border-l border-t border-b  flex  w-64 h-1/2 relative"
          >
            <div className=" absolute top-6 left-6">
              <p className="font-semibold">{items.itemName}</p>
              <p className="text-slate-500">{items.price}</p>
            </div>

            <div className="absolute bottom-4 right-3 ">
              <img className="w-24 h-16 " src={items.imgUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumerElectro;
