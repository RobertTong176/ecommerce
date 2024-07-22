import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Comments from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
