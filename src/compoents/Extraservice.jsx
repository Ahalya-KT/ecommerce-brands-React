import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillBackward } from "react-icons/ai";
import { LuPackage2 } from "react-icons/lu";
import { AiFillHeart } from "react-icons/ai";

function Extraservice() {
  return (
    <div className="px-16">
      <div>
        <p className="text-2xl font-bold py-10">Our Extra Services</p>
      </div>
      <div className="flex gap-5">
        {/* div1 */}
        <div className="border-2 w-1/4 h-72 relative ">
          <div>
            <img
              className="w-full h-full object-contain"
              src="https://media.istockphoto.com/id/1462139281/photo/two-professional-heavy-industry-engineers-wearing-hard-hats-at-factory-walking-and-discussing.jpg?s=612x612&w=0&k=20&c=FnrNr4HGDxxknumX1o5LYsgaLpH4GjmaNipQ0g7OzRY="
            />
          </div>
          <div className="py-4 px-6">
            <p className="text-2xl font-semibold w-44">
              Source from Industry hubs
            </p>
          </div>
          <div className=" bg-slate-300  w-14 h-14 right-4 bottom-20  rounded-full flex items-center justify-center absolute">
            <BsSearch size={22} />
          </div>
        </div>

        {/* div2 */}
        <div className="border-2 w-1/4 h-72 relative">
          <div>
            <img
              className="w-full h-full object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDpVJY63U50U1HZsHNT5E6DwdNKIrXQ_Y_uvvcY1T4VdLzgYxzTrv-HjN87JSbBKABFs&usqp=CAU"
            />
          </div>
          <div className="py-4 px-6">
            <p className="text-2xl font-semibold w-44">
              Custmize your Products
            </p>
          </div>
          <div className=" bg-slate-300 w-14 h-14 right-4 bottom-20  rounded-full flex items-center justify-center absolute">
            <LuPackage2 size={22} />
          </div>
        </div>

        {/* div3 */}
        <div className="border-2 w-1/4 h-72 relative">
          <div>
            <img
              className="w-full h-full object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGDFbT-t2DwHV08G5FSc1PgjLjMUimWUXisPnX6OfAbP57jYnHZyRsvHGRqu-CPZ95bg&usqp=CAU"
            />
          </div>
          <div className="py-4 px-6">
            <p className="text-2xl font-semibold w-60">
              Fast, reliable shipping by ocean or air
            </p>
          </div>
          <div className=" bg-slate-300  w-14 h-14 right-4 bottom-20  rounded-full flex items-center justify-center absolute">
            <AiFillBackward size={25} />
          </div>
        </div>

        {/* div4 */}
        <div className="border-2 w-1/4 h-72 relative ">
          <div>
            <img
              className="w-full h-full object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTBlIrMPojyvQNt139pMDFojj23-GItMGfsw8JC9fn6fnvjZjveS59_BoiFDFd93z9sc&usqp=CAU"
            />
          </div>
          <div className="py-4 px-6">
            <p className="text-2xl font-semibold w-56">
              Product monitoring and inspection
            </p>
          </div>

          <div className=" bg-slate-300 w-14 h-14 right-4 bottom-20  rounded-full flex items-center justify-center absolute">
            <AiFillHeart size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extraservice;
