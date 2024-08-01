import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaLocationArrow,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import Banner from "../../assets/banner/footer.jpg";
import footerLogo from "../../assets/website/logo.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div data-aos="zoom-in" className="container pb-20">
        <div className="grid grid-cols-3 pv-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3"
            >
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum blanditiis atque natus dolorum quis.
            </p>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <div className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  <h1>Import Links</h1>
                  <ul className="flex flex-col gap-3 font-normal text-base">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <div className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  <h1>Links</h1>
                  <ul className="flex flex-col gap-3 font-normal text-base">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* social links */}
            <div className="text-sm">
              <div className="flex flex-row gap-3 mt-8">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLine className="text-3xl" />
                </a>
              </div>
              <div className="flex ">
                <FaLocationArrow className=" mt-4" />
                <span className="my-2 mx-2">Thanh Pho Hue, Viet Nam</span>
              </div>
              <div className="flex">
                <FaPhoneSquareAlt className="flex mt-4" />
                <span className="my-2 mx-2">+84 327 501 094</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
