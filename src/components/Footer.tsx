const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <p className="mb-4 text-gray-400">
              Welcome to our shoe store! We are dedicated to providing you with
              the highest quality footwear, combining style, comfort, and
              durability for every occasion. Whether you're looking for athletic
              performance or fashion-forward designs, we have the perfect pair
              for you.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Product</h3>
            <ul>
              <li className="mb-2">Stylish Dark Brown</li>
              <li className="mb-2">High-heel with Round</li>
              <li className="mb-2">Cement Color High Heel</li>
              <li className="mb-2">Railroad Tools Suitcase</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Information</h3>
            <ul>
              <li className="mb-2">Documentation</li>
              <li className="mb-2">Events</li>
              <li className="mb-2">Demo Live sessions</li>
              <li className="mb-2">Open source</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">About</h3>
            <ul>
              <li className="mb-2">Customers</li>
              <li className="mb-2">Community</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Diversity & Inclusion</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © Copyright 2023 powered by ShoeWear
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
