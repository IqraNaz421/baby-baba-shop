



// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// // Define a type for the products
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string;
//   quantity?: number; // Optional quantity property for cart items
// }

// const PopularProducts: React.FC = () => {
//   // Define the products with the correct type
//   const products: Product[] = [
//     {
//       id: 19,
//       name: "Product 19",
//       price: 30.00,
//       discountPrice: 25.00,
//       image: "/images/shoe1.jpg",
//       description: "This is a great product for your baby.",
//     },
//     {
//       id: 20,
//       name: "Product 20",
//       price: 45.00,
//       discountPrice: 40.00,
//       image: "/images/shoe2.jpeg",
//       description: "Top rated product with excellent features.",
//     },
//     {
//       id: 21,
//       name: "Product 21",
//       price: 60.00,
//       discountPrice: 55.00,
//       image: "/images/shoe3.webp",
//       description: "Best-selling product with amazing reviews.",
//     },
//     {
//       id: 22,
//       name: "Product 22",
//       price: 50.00,
//       discountPrice: 45.00,
//       image: "/images/shoe4.jpg",
//       description: "Premium quality product.",
//     },
//     {
//       id: 23,
//       name: "Product 23",
//       price: 20.00,
//       discountPrice: 18.00,
//       image: "/images/shoe5.webp",
//       description: "Affordable and durable.",
//     },
//     {
//       id: 24,
//       name: "Product 24",
//       price: 80.00,
//       discountPrice: 75.00,
//       image: "/images/shoe6.jpeg",
//       description: "Ultimate comfort and style.",
//     },
//   ];

//   const router = useRouter(); // For navigating to the cart page

//   const addToCart = (product: Product) => {
//     // Get the current cart from localStorage or initialize as empty array
//     const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

//     // Check if the product already exists in the cart
//     const existingProductIndex = cart.findIndex((item: Product) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       // If the product exists, update its quantity
//       cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 0) + 1;
//     } else {
//       // Otherwise, add the product to the cart with quantity 1
//       cart.push({ ...product, quantity: 1 });
//     }

//     // Save the updated cart in localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Redirect to cart page
//     router.push('/cart');
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-8">Baby Shoes</h2>

//         {/* Scrollable Products for Mobile */}
//         <div className="sm:hidden overflow-x-auto">
//           <div className="flex space-x-4">
//             {products.map((product) => (
//               <div key={product.id} className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg relative">
//                 {/* Sale Tag */}
//                 <div className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 rounded-full text-xs font-semibold">Sale</div>
//                 <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p className="font-bold">${product.discountPrice}</p>
//                 <button
//                   onClick={() => addToCart(product)} // Add to Cart button
//                   className="mt-4 py-2 px-4 border-2 border-rose-500 hover:bg-rose-300 text-black rounded-lg"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Grid for Larger Screens */}
//         <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
//               {/* Sale Tag */}
//               <div className="absolute top-3 left-4 bg-red-500 text-white py-1 px-3 rounded text-xs font-semibold">Sale</div>
//               <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p>{product.description}</p>
//               <p className="font-bold">${product.discountPrice}</p>
//               <button
//                 onClick={() => addToCart(product)} // Add to Cart button
//                 className="mt-4 py-2 px-4 border-2 border-rose-500 hover:bg-rose-300 text-black rounded-lg"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;



















import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
}

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

const shoes: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Baby Shoes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shoes/${product.id}`}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow block"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700">
                  <span className="text-red-500 font-bold">
                    ${product.discountPrice}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${product.price}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default shoes;
