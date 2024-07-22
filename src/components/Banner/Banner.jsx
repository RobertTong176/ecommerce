import { GrSecure } from "react-icons/gr";
import img1 from "../../assets/women/women2.jpg";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="dark:bg-gray-900 min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className="">
            <img
              src={img1}
              alt=""
              className="max-w-[400px] h-[350px] w-full
            mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold dark:text-white"
            >
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              similique.
            </p>
            <div>
              <div data-aos="fade-up" className="flex items-center gap-4 mb-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-violet-100 dark:bg-violet-400 dark:text-white"
                />
                <p className="dark:text-white">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 mb-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-orange-100 dark:bg-orange-400 dark:text-white "
                />
                <p className="dark:text-white">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 mb-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-green-200 dark:bg-green-400 dark:text-white"
                />
                <p className="dark:text-white">Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 mb-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-yellow-100 dark:bg-yellow-400 dark:text-white"
                />
                <p className="dark:text-white">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
