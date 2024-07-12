import backgroundImage from "../assets/ShoeBackground.png";
import Card from "./Card";
import shoeImage1 from "../assets/shoe1.png";
import shoeImage2 from "../assets/shoe4.png";
import shoeImage3 from "../assets/shoe7.png";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImage}
          className="bg-no-repeat w-full bg-contain px-4 sm:px-8 md:px-12 lg:px-20"
          alt="Background"
        />
      </div>
      <div className="py-10">
        <p className="text-3xl text-gray-600 text-center">
          New Collections 2024
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly px-4 sm:px-10 py-10 gap-6 items-center">
          <Card imgUrl={shoeImage1} name="Velocity Boost" price={20} />
          <Card imgUrl={shoeImage2} name="Trail Blazer" price={20} />
          <Card imgUrl={shoeImage3} name="Aero Stride" price={20} />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
