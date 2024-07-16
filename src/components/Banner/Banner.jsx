import img1 from "../../assets/women/women2.jpg";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sn:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div
            data-aos="zoom-in
          "
          >
            <img src={img1} alt="" />
          </div>
          {/* details section */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
