
'use client';

import { useRouter } from 'next/navigation'; // Correct import for Next.js 13 with app directory
import { FaTshirt, FaBaby, FaShoePrints, FaPuzzlePiece, FaStar, FaTags, FaGift } from 'react-icons/fa'; // Icons for categories and offers
import Image from 'next/image';

const ShopNowPage = () => {
  const router = useRouter();

  // Handle category click
  const handleCategoryClick = (category: string) => {
    router.push(`/${category}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Explore Our Categories</h1>
        <p className="text-gray-600 mt-2">
          Discover premium products for your babies comfort and happiness
        </p>
      </div>

      {/* Categories */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
        {/* Baby Clothes */}
        <div
          onClick={() => handleCategoryClick('baby-clothes')}
          className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <FaTshirt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Baby Clothes</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Soft and stylish clothes designed for your babies comfort
          </p>
        </div>

        {/* Baby Essentials */}
        <div
          onClick={() => handleCategoryClick('baby-essentials')}
          className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <FaBaby className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Baby Essentials</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Everyday essentials for your babies health and care
          </p>
        </div>

        {/* Baby Shoes */}
        <div
          onClick={() => handleCategoryClick('baby-shoes')}
          className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <FaShoePrints className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Baby Shoes</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Comfortable and trendy shoes for your babies first steps
          </p>
        </div>

        {/* Toys */}
        <div
          onClick={() => handleCategoryClick('toys-&-games')}
          className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <FaPuzzlePiece className="text-4xl text-purple-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Toys and Games</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Fun and educational toys to keep your baby entertained
          </p>
        </div>

        {/* Popular Products */}
        <div
          onClick={() => handleCategoryClick('product')}
          className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <FaStar className="text-4xl text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Popular Products</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Top-rated products loved by parents worldwide
          </p>
        </div>
      </div>

      {/* Discount Offers */}
      <div className="mt-16 bg-pink-100 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-rose-600">Limited Time Offers!</h2>
          <p className="text-gray-600 mt-2">
            Grab these exclusive deals before they are gone
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <FaTags className="text-4xl text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Up to 50% Off</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              On baby clothes and accessories
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <FaGift className="text-4xl text-rose-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Buy 1 Get 1 Free</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              On selected toys and games
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Free Shipping</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              On orders over $50
            </p>
          </div>
        </div>
      </div>

      {/* New Sale Highlights */}
      <div className="mt-16 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">New Sale Highlights</h2>
          <p className="text-gray-600 mt-2">
            Discover the latest products on sale
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/blanket.jpg"
              alt="Product 1"
              width={500}
              height={500}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Premium Baby Blanket
            </h3>
            <p className="text-gray-600 text-sm text-center mt-2">Now for $19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/warmer.jpeg"
              alt="Product 2"
              width={500}
              height={500}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Baby Bottle Warmer
            </h3>
            <p className="text-gray-600 text-sm text-center mt-2">Only $29.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNowPage;
