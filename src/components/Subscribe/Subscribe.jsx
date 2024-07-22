import Banner from "../../assets/banner/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div data-aos="zoom-in" style={BannerImg} className="  text-white">
        <div className="container  backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              className="text-2xl !text-center font-bold sm:text-left
          sm:text-4xl font-semibold"
            >
              Get Notified About New Products
            </h1>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
