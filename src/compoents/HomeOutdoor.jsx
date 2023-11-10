import React from "react";

const HomeOutdoor = () => {
  const homeItems = [
    {
      itemName: "SofaChair",
      price: "From USD 19",
      imgUrl:
        "https://i.pinimg.com/736x/1f/ee/3d/1fee3d1881d3f81dcf12d5e5d94b3466.jpg",
    },
    {
      itemName: "Lamp",
      price: "From USD 19",
      imgUrl:
        "https://i.pinimg.com/736x/df/93/ae/df93ae0e7665879dcf851cee97069edc.jpg",
    },
    {
      itemName: "Kitchen Dishes",
      price: "From USD 18",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2O3dtAscCCzhIg2aeQAJ4VWlXbOIWYrPCfTfxfLAzQQ30DCQKtvtEOZJNEKYoJnFuV8&usqp=CAU",
    },
    {
      itemName: "Flowers",
      price: "From USD 20",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEx2V3B5uUko9VM0U_Zc13Tce9MQyxygFvp6b6UAEjpGCU-U1rxeKiwNst0DYSp6dt2j4&usqp=CAU",
    },
    {
      itemName: "Kitchen Mixers",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzKTasa3-MXd6ST2AnqNz0PoOgnSo7acxCHeAPz_bTHn8UsSl0AEf8WQTQ0R856fXXAg&usqp=CAU",
    },
    {
      itemName: "Blender",
      price: "From USD 19",
      imgUrl:
        "https://p7.hiclipart.com/preview/137/189/290/kitchenaid-blender-blade-dishwasher-mixer-blender-thumbnail.jpg",
    },
    {
      itemName: "Home Appliances",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGjIuSZLg4DNGVx81v80u7FURwlx5rF4ScolzaNiMPmYOpeAFY-QwpN9GXq5ixt8XajI&usqp=CAU",
    },
    {
      itemName: "Coffee Makers",
      price: "From USD 19",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTe1_wXbAAxPLsrXpeMHvKxRu0CaJ2azx2OYvexgIEHkZFfG3wmWPDy4uIbGDlHrl7JM&usqp=CAU",
    },
  ];
  return (
    <div className="flex px-20 w-full">
      {/* div1 */}
      <div className="bg-[url('./assets/images/pic4.jpg')] bg-cover  h-72 relative  border-r border-l border-t border-b w-96 p-16 ">
        <div className="absolute top-12 left-10 flex flex-col gap-2">
          <p className="font-bold text-xl w-44">Home and OutDoor</p>

          <button className="bg-white  text-xl rounded-md  w-32 h-10 ">
            Learn More
          </button>
        </div>
      </div>

      {/* div2 */}
      <div className=" flex flex-wrap w-full">
        {homeItems.map((items, index) => (
          <div
            key={index}
            className="border-r border-l border-t border-b flex  w-64 h-1/2 relative"
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

export default HomeOutdoor;
