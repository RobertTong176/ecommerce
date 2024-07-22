import shirt1 from "../../assets/products/shirt1.png";
import shirt2 from "../../assets/products/shirt2.png";
import shirt3 from "../../assets/products/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: shirt1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: shirt2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: shirt3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  const handleOrder = () => {
    alert("Chức năng đang làm");
  };
  return (
    <div className="dark:bg-gray-900">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-primary text-sm">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="font-bold text-3xl dark:text-white">
            Best Products
          </h1>
          <span data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </span>
        </div>
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
          md:grid-cols-3 gap-20 md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className=" bg-white relative rounded-2xl md:gap-5  dark:bg-gray-800 
            hover:bg-black/80 hover:text-white dark:hover:bg-primary 
            shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] mx-auto block transform -translate-y-20
                 group-hover:scale-105 duration-300 drop-shadow-md
                "
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <div className="flex items-center justify-center w-full gap-1">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
                <h1 className="font-bold text-xl dark:text-white">{data.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white
                duration 300 text-sm line-clamp-2
                "
                >
                  {data.description}
                </p>
                <button
                  onClick={handleOrder}
                  className="rounded-full bg-primary duration-300
                text-white py-1 px-4 mt-4 group-hover:scale-105 group-hover:bg-white
                group-hover:text-primary 
                "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
