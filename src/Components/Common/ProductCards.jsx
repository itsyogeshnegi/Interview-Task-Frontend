import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-white m-1 text-center p-2 text-black rounded-md">
      <div className=" w-full flex justify-center">
        <img src={data.thumbnail} className="h-36" />
      </div>
      <div className="text-start">
        <h1 className="px-1 line-clamp-1 font-semibold text-2xl">
          {data.title}
        </h1>
        <div className=" w-full border-[1px] border-white"></div>
        <div className="flex items-center gap-x-3 my-1">
          <div className="flex items-center text-[#F5BE16]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h5>(5/{data.rating.toFixed(1)})</h5>
        </div>
        <h1 className="text-[#9333EA] font-bold">
          ₹{(data.price * 82).toFixed(0)}/-
        </h1>
        <h1>
          Availability:{" "}
          {data.availabilityStatus === "Low Stock" ? (
            <span className="bg-red-100 px-3 rounded-2xl text-red-700 text-sm py-1">
              {data.availabilityStatus}
            </span>
          ) : (
            <span className="bg-green-100 px-3 rounded-2xl text-green-700 text-sm py-1">
              {data.availabilityStatus}
            </span>
          )}
        </h1>
        <button
          onClick={() => navigate(`/home/${data.id}`)}
          className="bg-[#9333EA] text-white w-full mt-3 boredr-2 border-black p-1 rounded-md cursor-pointer"
        >
          More Deatils
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
