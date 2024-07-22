import women1 from "../../assets/women/women.png";
import women2 from "../../assets/women/women2.jpg";
import women3 from "../../assets/women/women3.jpg";
import women4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: women1,
    title: "Women Ethnic",
    color: "White",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: women2,
    title: "Women western",
    color: "Red",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: women3,
    title: "Goggles",
    color: "brown",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: women4,
    title: "Printed T-Shirt",
    color: "Yellow",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: women2,
    title: "Printed T-Shirt",
    color: "Pink",
    rating: 4.5,
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="pt-14 dark:bg-gray-900">
      <div className="container ">
        {/* Header section */}
        <div
          className="text-center mb-10 max-w-[600px]
        mx-auto"
        >
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
          md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px]
                object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold dark:text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 " />
                    <span className="dark:text-white">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 bg-primary py-1 px-3 text-white rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
