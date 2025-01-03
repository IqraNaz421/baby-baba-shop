
// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// // Define product type
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string;
// }

// const PopularProducts: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 13,
//       name: "Product 13",
//       price: 30.00,
//       discountPrice: 25.00,
//       image: "/images/baba1.webp",
//       description: "This is a great product for your baby.",
//     },
//     {
//       id: 14,
//       name: "Product 14",
//       price: 45.00,
//       discountPrice: 40.00,
//       image: "/images/baba2.jpeg",
//       description: "Top rated product with excellent features.",
//     },
//     {
//       id: 15,
//       name: "Product 15",
//       price: 60.00,
//       discountPrice: 55.00,
//       image: "/images/baba4.jpeg",
//       description: "Best-selling product with amazing reviews.",
//     },
//     {
//       id: 16,
//       name: "Product 16",
//       price: 50.00,
//       discountPrice: 45.00,
//       image: "/images/baba5.webp",
//       description: "Premium quality product.",
//     },
//     {
//       id: 17,
//       name: "Product 17",
//       price: 20.00,
//       discountPrice: 18.00,
//       image: "/images/baba6.jpg",
//       description: "Affordable and durable.",
//     },
//     {
//       id: 18,
//       name: "Product 18",
//       price: 80.00,
//       discountPrice: 75.00,
//       image: "/images/baba7.webp",
//       description: "Ultimate comfort and style.",
//     },
//   ];

//   const router = useRouter(); // For navigating to the cart page

//   const addToCart = (product: Product) => {
//     // Get the current cart from localStorage or initialize as empty array
//     const cart: { id: number, quantity: number }[] = JSON.parse(localStorage.getItem('cart') || '[]');

//     // Check if the product already exists in the cart
//     const existingProductIndex = cart.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       // If the product exists, update its quantity
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       // Otherwise, add the product to the cart
//       cart.push({ id: product.id, quantity: 1 });
//     }

//     // Save the updated cart in localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Redirect to cart page
//     router.push('/cart');
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-8">Baby Essentials</h2>

//         {/* Scrollable Products for Mobile */}
//         <div className="sm:hidden overflow-x-auto">
//           <div className="flex space-x-4">
//             {products.map((product) => (
//               <div key={product.id} className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
//                 <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p>{product.description}</p>

//                 {/* Display "Sale" tag if there's a discount */}
//                 {product.discountPrice < product.price && (
//                   <span className="bg-red-500 text-white py-1 px-2 rounded-full text-sm absolute top-4 right-4">
//                     Sale
//                   </span>
//                 )}

//                 <p className="font-bold">
//                   ${product.discountPrice}
//                   {product.discountPrice < product.price && (
//                     <span className="line-through ml-2 text-gray-500">${product.price}</span>
//                   )}
//                 </p>
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
//               <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p>{product.description}</p>

//               {/* Display "Sale" tag if there's a discount */}
//               {product.discountPrice < product.price && (
//                 <span className="bg-red-500 text-white py-1 px-2 rounded text-sm absolute top-3 left-4">
//                   Sale
//                 </span>
//               )}

//               <p className="font-bold">
//                 ${product.discountPrice}
//                 {product.discountPrice < product.price && (
//                   <span className="line-through ml-2 text-gray-500">${product.price}</span>
//                 )}
//               </p>
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
    id: 13,
    name: "Baby Carrier",
    price: 30.0,
    discountPrice: 25.0,
    image: "/images/baba1.webp",
    description: "Perfect for daily baby comfort and care.",
  },
  {
    id: 14,
    name: "Baby Lotions",
    price: 45.0,
    discountPrice: 40.0,
    image: "/images/baba2.jpeg",
    description: "Top-rated for baby's premium needs.",
  },
  {
    id: 15,
    name: "Baby Grooming kit",
    price: 60.0,
    discountPrice: 55.0,
    image: "/images/baba4.jpeg",
    description: "A trusted choice for baby essentials.",
  },
  {
    id: 16,
    name: "Baba Shoe",
    price: 50.0,
    discountPrice: 45.0,
    image: "/images/baba5.webp",
    description: "High-quality materials for babies.",
  },
  {
    id: 17,
    name: "Baby diaper bag with a foldable crib",
    price: 20.0,
    discountPrice: 18.0,
    image: "/images/baba6.jpg",
    description: "Affordable and reliable baby essentials.",
  },
  {
    id: 18,
    name: "Baby Sling carrier",
    price: 80.0,
    discountPrice: 75.0,
    image: "/images/baba7.webp",
    description: "Ultimate comfort and care for your baby.",
  },
];

const EssentialsPage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Baby Essentials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/essentials/${product.id}`}
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

export default EssentialsPage;





