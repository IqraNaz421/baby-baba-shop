// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';

// // Dummy baby shoes data
// const products = [
//   {
//     id: 19,
//     name: "Comfort Baby Shoe",
//     price: 30.0,
//     discountPrice: 25.0,
//     image: "/images/shoe1.jpg",
//     description: "Perfect for your baby's first steps, providing comfort and support.",
//   },
//   {
//     id: 20,
//     name: "Stylish Baby Sneaker",
//     price: 45.0,
//     discountPrice: 40.0,
//     image: "/images/shoe2.jpeg",
//     description: "Trendy and comfortable, designed to keep your baby stylish and active.",
//   },
//   {
//     id: 21,
//     name: "Cozy Baby Boot",
//     price: 60.0,
//     discountPrice: 55.0,
//     image: "/images/shoe3.webp",
//     description: "Warm and cozy boots perfect for colder weather and outdoor adventures.",
//   },
//   {
//     id: 22,
//     name: "Premium Baby Shoe",
//     price: 50.0,
//     discountPrice: 45.0,
//     image: "/images/shoe4.jpg",
//     description: "Durable and stylish shoes made with premium materials for your baby.",
//   },
//   {
//     id: 23,
//     name: "Affordable Baby Sandal",
//     price: 20.0,
//     discountPrice: 18.0,
//     image: "/images/shoe5.webp",
//     description: "Lightweight and breathable sandals, ideal for warm weather and everyday use.",
//   },
//   {
//     id: 24,
//     name: "Ultimate Comfort Baby Shoe",
//     price: 80.0,
//     discountPrice: 75.0,
//     image: "/images/shoe6.jpeg",
//     description: "Designed for ultimate comfort, perfect for babies who are always on the move.",
//   },
// ];

// // Fetch product details by ID
// const getProductById = (id: number) => {
//   return products.find((product) => product.id === id);
// };

// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const productId = parseInt(params.id); // Convert id to number
//   const product = getProductById(productId);

//   // If product not found, show 404
//   if (!product) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-xl">
//           {/* Product Image */}
//           <div className="flex flex-col sm:flex-row items-center">
//             <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 height={500}
//                 width={500}
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="sm:ml-8 mt-6 sm:mt-0 w-full sm:w-1/2">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>

//             {/* Price and Discount */}
//             <div className="mb-6">
//               <span className="line-through text-gray-500 text-xl">${product.price}</span>{' '}
//               <span className="text-red-600 text-2xl font-bold">${product.discountPrice}</span>
//             </div>

//             {/* Product Features */}
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
//               <ul className="list-disc ml-6 text-gray-600">
//                 <li>High-quality material</li>
//                 <li>Modern design</li>
//                 <li>Comfortable and durable</li>
//               </ul>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(product)} // Add to Cart logic
//               className="py-3 px-8 text-black border-2 border-rose-500 rounded-lg shadow-lg hover:bg-rose-300 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Add to cart logic
// const addToCart = (product: any) => {
//   const cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
//   const existingProduct = cart.find((item) => item.id === product.id);

//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert(`${product.name} added to cart!`);
// };

// export default ProductDetailPage;















'use client';
import React from 'react';
import { notFound } from 'next/navigation'; // For handling invalid IDs
import Image from 'next/image';

// Define a type for the product including quantity
interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
  quantity?: number; // Optional quantity field
}

// Dummy baby shoes data
const products: Product[] = [
  {
    id: 19,
    name: "Comfort Baby Shoe",
    price: 30.0,
    discountPrice: 25.0,
    image: "/images/shoe1.jpg",
    description: "Perfect for your baby's first steps, providing comfort and support.",
  },
  {
    id: 20,
    name: "Stylish Baby Sneaker",
    price: 45.0,
    discountPrice: 40.0,
    image: "/images/shoe2.jpeg",
    description: "Trendy and comfortable, designed to keep your baby stylish and active.",
  },
  {
    id: 21,
    name: "Cozy Baby Boot",
    price: 60.0,
    discountPrice: 55.0,
    image: "/images/shoe3.webp",
    description: "Warm and cozy boots perfect for colder weather and outdoor adventures.",
  },
  {
    id: 22,
    name: "Premium Baby Shoe",
    price: 50.0,
    discountPrice: 45.0,
    image: "/images/shoe4.jpg",
    description: "Durable and stylish shoes made with premium materials for your baby.",
  },
  {
    id: 23,
    name: "Affordable Baby Sandal",
    price: 20.0,
    discountPrice: 18.0,
    image: "/images/shoe5.webp",
    description: "Lightweight and breathable sandals, ideal for warm weather and everyday use.",
  },
  {
    id: 24,
    name: "Ultimate Comfort Baby Shoe",
    price: 80.0,
    discountPrice: 75.0,
    image: "/images/shoe6.jpeg",
    description: "Designed for ultimate comfort, perfect for babies who are always on the move.",
  },
];

// Fetch product details by ID
const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id); // Convert id to number
  const product = getProductById(productId);

  // If product not found, show 404
  if (!product) {
    notFound(); // Redirects to the 404 page
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-xl">
          {/* Product Image */}
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
              <Image
                src={product.image}
                alt={product.name}
                height={500}
                width={500}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="sm:ml-8 mt-6 sm:mt-0 w-full sm:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Price and Discount */}
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">${product.price}</span>{' '}
              <span className="text-red-600 text-2xl font-bold">${product.discountPrice}</span>
            </div>

            {/* Product Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
              <ul className="list-disc ml-6 text-gray-600">
                <li>High-quality material</li>
                <li>Modern design</li>
                <li>Comfortable and durable</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)} // Add to Cart logic
              className="py-3 px-8 text-black border-2 border-rose-500 rounded-lg shadow-lg hover:bg-rose-300 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add to cart logic
const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If product already in cart, increment quantity
    existingProduct.quantity! += 1; // Use the non-null assertion operator as quantity is optional
  } else {
    // If product is new to the cart, add it with quantity 1
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};

export default ProductDetailPage;
