import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  return (
    <div className="max-w-[900px] mx-auto p-6 font-sans mt-[5rem]">
      <h1 className="text-center text-[28px] font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-[18px] text-black">
          Your cart is empty
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg bg-[#f9f9f9] flex-wrap"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[120px] h-[120px] object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-[18px] font-semibold text-[#333] mb-1">
                  {item.name}
                </h3>
                <p className="text-[#555]">${item.price}</p>
                <p className="text-[#555]">{item.description}</p>
                <button
                  onClick={() => handleRemove(index)}
                  className="mt-2 bg-[#006633] text-white px-3 py-1 rounded-md text-[14px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-right text-[20px] font-bold text-[#222] mt-4">
            Total: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}
