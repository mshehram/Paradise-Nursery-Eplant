import { useParams, Link, useNavigate } from "react-router-dom";
import plantsData from "../../data/plantsData";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allPlants = [
    ...plantsData.AirPurifyingPlants,
    ...plantsData.FragrantPlants,
  ];

  const plant = allPlants.find((item) => item.id === parseInt(id));

  if (!plant) {
    return (
      <div className="text-center py-12 px-4 mt-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link
          to="/plant"
          className="inline-block mt-4 bg-[#4caf50] text-white px-5 py-2 rounded-md transition hover:bg-[#3e8e41]"
        >
          Back to Plants
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(plant);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="w-full flex justify-center mt-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col items-center text-center md:text-left max-w-[1200px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Product Detail
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-8 md:gap-12 flex-wrap w-full">
          <img
            src={plant.image}
            alt={plant.name}
            className="h-[300px] w-[280px] md:h-[400px] md:w-[350px] rounded-xl shadow-lg object-cover"
          />

          <div className="max-w-[400px] w-full">
            <h3 className="text-2xl md:text-3xl text-[#083b2b] font-semibold mb-3">
              {plant.name}
            </h3>
            <p className="text-[#333] leading-relaxed mb-4">{plant.description}</p>
            <p className="text-[#e63946] font-bold text-xl md:text-2xl mb-6">
              ${plant.price}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#006633] text-white py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 rounded-md w-auto md:w-auto transition hover:bg-[#004d1a] mx-auto md:mx-0 block"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
