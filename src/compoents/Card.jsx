import React from "react";

const Card = ({ product }) => {
  return (
    <div className=" w-64 h-72 border-2 gap-4">
      <div className="flex justify-center py-2">
        <div className="w-24 h-28">
          <img className="h-full w-full object-contain" src={product.image} />
        </div>
      </div>
      <div className="px-3 ">
        <p className="text-xl font-semibold">${product.price}</p>
        <p className="text-slate-500">{product.title}</p>
        <p className="text-slate-500">{product.category}</p>
      </div>
    </div>
  );
};

export default Card;
