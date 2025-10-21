import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative w-screen bg-center bg-cover flex items-center justify-center text-white min-h-[auto] lg:min-h-[100vh]"
      style={{
        backgroundImage: "url('/images/tree.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/80 z-10"></div>

    
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-start gap-16 px-6 lg:px-[5%] py-16 lg:py-32 w-full">
      
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl font-bold leading-snug">
            Welcome To <br /> Paradise Nursery
          </h1>
          <div className="w-[100px] h-[3px] bg-[#4caf50] mx-auto"></div>
          <p className="text-lg">Where Green Meets Serenity</p>
          <Link
            to="/plant"
            className="bg-[#4caf50] hover:bg-[#3c8e41] text-white px-8 py-3 rounded-md mt-3 text-[16px] transition"
          >
            Get Started
          </Link>
        </div>

        <div className="w-full lg:w-2/3 text-center lg:text-left space-y-3">
          <p className="text-[15px] text-gray-200">
            Welcome to Paradise Nursery, where green meets serenity.
          </p>
          <p className="text-[15px] text-gray-200 text-justify">
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance your surroundings but also contribute
            to a healthier lifestyle.
          </p>
          <p className="text-[15px] text-gray-200 text-justify">
            Our team is dedicated to promoting a greener and healthier
            environment through responsible planting. We believe that every
            plant makes a difference — from nurturing air-purifying greens to
            cultivating vibrant blooms that bring life to every space.
          </p>
          <p className="text-[15px] text-gray-200 text-justify">
            Our mission is to provide a wide range of high-quality plants that
            not only enhance your surroundings but also contribute to a
            healthier lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
