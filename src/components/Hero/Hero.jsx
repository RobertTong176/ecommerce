import salePng from "../../assets/website/sale.png";
import menPng from "../../assets/website/shoppingmen.png";
import womenPng from "../../assets/website/women.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: salePng,
    title: "Giảm giá tất cả sản phẩm chỉ còn 70%",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus praesentium alias harum similique autem ipsum, architecto vero quis mollitia amet consequatur, inventore voluptas sint suscipit, earum perferendis accusantium numquam!",
  },
  {
    id: 2,
    img: menPng,
    title: "Giảm giá cho nam giới 30%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure exercitationem quidem qui nisi, delectus illum eos! Harum voluptas rem, temporibus cupiditate porro, ab eum necessitatibus unde, illum voluptates autem. Quibusdam?",
  },
  {
    id: 3,
    img: womenPng,
    title: "Giảm giá cho nữ giới 50%",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae suscipit dolor praesentium quis similique error velit officiis consectetur veniam, dicta blanditiis harum quaerat tempora illo quisquam quod vitae dolores.",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
      <div
        className="relative overflow-hidden min-h-[550px]
      sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      >
        {/* background pattern */}
        <div
          className="h-[700px] w-[700px] bg-primary/40 
        absolute -top-1/2 right-0  rounded-3xl rotate-45 -z-9
        "
        ></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text  content section */}
                    <div
                      className="flex flex-col justify-center gap-4 pt-12
                    sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                    >
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {data.title}
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-sm"
                      >
                        {data.description}
                      </p>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                      >
                        <button
                          className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                            duration-200 text-white py-2 px-4 rounded-full"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 sm:order-2">
                      <div className="relative z-10">
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105
                            lg:scale-120  object-contain mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
