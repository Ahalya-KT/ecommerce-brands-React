import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Category = () => {
  return (
    <div className="flex    px-4  py-3  text-sm font-semibold border-b-4 border-white shadow items-center justify-between">
      <div className="flex gap-6 px-6 py-2">
        <div className="flex items-center gap-2">
          <GiHamburgerMenu />
          All Category
        </div>

        <div>Hot offers</div>

        <div>Gift Boxes</div>

        <div>Project</div>

        <div>Menu Item</div>

        <div>Help</div>
      </div>

      <div className="px-14  flex gap-5 items-center">
        <div>English,USD</div>

        <div>Ship to</div>
      </div>
    </div>
  );
};

export default Category;
