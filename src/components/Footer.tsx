const Footer = () => {
  return (
    <div className="bg-green-700 py-8">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                Twitter
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
