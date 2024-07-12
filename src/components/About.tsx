import shippingImage from "../assets/Shipping.png";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center lg:px-20 gap-4">
      <div className="md:w-[40%]">
        <img
          src={shippingImage}
          className="w-full h-auto md:h-full md:w-auto"
        />
      </div>
      <div className="md:w-[60%] p-4 md:p-8 text-center md:text-left px-8 md:px-0">
        <p className="text-3xl mb-4">About us</p>
        <p className="text-2xl mb-4">
          We Provide <span className="font-bold text-blue-700">High</span>{" "}
          Quality Shoes
        </p>
        <p className="text-lg mb-4">
          At our shoe store, we take pride in offering high-quality footwear
          that combines style, comfort, and durability. Whether you’re an
          athlete seeking performance sneakers or a fashion enthusiast looking
          for trendy shoes, we’ve got you covered. Our commitment to excellence
          ensures that every step you take is a confident one. Welcome to a
          world where quality meets style—one pair of shoes at a time! 👟✨
        </p>
        <button className="bg-blue-500 px-10 py-2 rounded-3xl text-white hover:bg-blue-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
