import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(plant);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="relative bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[280px] h-[420px] p-[23px] flex flex-col text-center">
      {plant.sale && (
        <span className="absolute top-[10px] right-[10px] bg-[#e63946] text-white text-[12px] font-bold py-[3px] px-[8px] rounded-[4px]">
          Sale
        </span>
      )}
      <h3 className="text-black text-[18px] font-semibold mt-[10px] mb-1">
        {plant.name}
      </h3>
      <Link to={`/product/${plant.id}`}>
        <img
          src={plant.image}
          className="w-full h-[220px] object-cover rounded-[10px] mb-1"
        />
      </Link>
      <p className="text-[#e63946] font-medium">${plant.price}</p>
      <p className="text-[14px] text-[#555] my-[4px]  min-h-[50px] leading-[1.4]">
        {plant.description}
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-[#198754] text-white py-[6px] px-[12px] rounded-[6px] cursor-pointer transition-colors duration-300 hover:bg-[#145c33] mx-auto"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default PlantCard;
