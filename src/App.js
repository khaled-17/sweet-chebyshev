import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Component />
    </div>
  );
}

export const Component = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1200px] antialiased">
        <header className="bg-blue-600 shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-white text-3xl mr-2">
                  shopping_cart
                </span>
                <h1 className="text-white text-2xl font-bold">ShopEasy</h1>
              </div>
              <nav className="hidden md:flex space-x-8 text-white">
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-300"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-300"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-300"
                >
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span className="material-symbols-outlined text-white hover:text-blue-200 transition-colors duration-300 text-2xl cursor-pointer">
                    search
                  </span>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined text-white hover:text-blue-200 transition-colors duration-300 text-2xl cursor-pointer">
                    shopping_bag
                  </span>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    3
                  </span>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined text-white hover:text-blue-200 transition-colors duration-300 text-2xl cursor-pointer">
                    person
                  </span>
                </div>
                <div className="md:hidden">
                  <span className="material-symbols-outlined text-white text-2xl cursor-pointer">
                    menu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">
                  Summer Collection 2023
                </h2>
                <p className="text-lg mb-8">
                  Discover our latest arrivals with up to 40% discount on
                  selected items.
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-100 transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Summer Collection"
                  className="rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Men's Fashion"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Men's Fashion
                  </h3>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Women's Fashion"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Women's Fashion
                  </h3>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Electronics"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Electronics</h3>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Home & Living"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Home & Living
                  </h3>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Featured Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check out our most popular items
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                    alt="Wireless Headphones"
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Wireless Headphones
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star_half
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      (42 reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through mr-2">
                        $149.99
                      </span>
                      <span className="text-xl font-bold">$99.99</span>
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Running Shoes"
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Running Shoes</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      (89 reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold">$79.99</span>
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                    alt="Smart Watch"
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Smart Watch</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star_outline
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      (35 reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold">$199.99</span>
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Backpack"
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    Hot
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Travel Backpack
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star_half
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        star_outline
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      (27 reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold">$69.99</span>
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Stay updated with our latest products, exclusive offers, and
                discounts. No spam, we promise!
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md sm:rounded-r-none mb-3 sm:mb-0 w-full focus:outline-none text-gray-800"
                />
                <button className="bg-gray-900 px-6 py-3 rounded-md sm:rounded-l-none font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ShopEasy</h3>
                <p className="mb-4 text-gray-400">
                  Your one-stop shop for all your shopping needs. Quality
                  products, competitive prices, and excellent customer service.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-pinterest text-xl"></i>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined mr-2 mt-1">
                      location_on
                    </span>
                    <span>123 Shopping Avenue, Retail District, NY 12345</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined mr-2 mt-1">
                      phone
                    </span>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined mr-2 mt-1">
                      email
                    </span>
                    <span>support@shopeasy.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined mr-2 mt-1">
                      schedule
                    </span>
                    <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2023 ShopEasy. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/179/179431.png"
                  alt="Payment Methods"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
