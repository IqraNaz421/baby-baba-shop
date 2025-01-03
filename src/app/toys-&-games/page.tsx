


// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const PopularProducts: React.FC = () => {
//   const products = [
//     {
//       id: 25,
//       name: "Product 25",
//       price: 30.00,
//       discountPrice: 25.00,
//       image: "/images/toy1.jpg",
//       description: "This is a great product for your baby.",
//     },
//     {
//       id: 26,
//       name: "Product 26",
//       price: 45.00,
//       discountPrice: 40.00,
//       image: "/images/toy2.jpeg",
//       description: "Top-rated product with excellent features.",
//     },
//     {
//       id: 27,
//       name: "Product 27",
//       price: 60.00,
//       discountPrice: 55.00,
//       image: "/images/toy3.jpg",
//       description: "Best-selling product with amazing reviews.",
//     },
//     {
//       id: 28,
//       name: "Product 28",
//       price: 50.00,
//       discountPrice: 45.00,
//       image: "/images/toy4.webp",
//       description: "Premium quality product.",
//     },
//     {
//       id: 29,
//       name: "Product 29",
//       price: 20.00,
//       discountPrice: 18.00,
//       image: "/images/toy5.jpeg",
//       description: "Affordable and durable.",
//     },
//     {
//       id: 30,
//       name: "Product 30",
//       price: 80.00,
//       discountPrice: 75.00,
//       image: "/images/toy6.jpg",
//       description: "Ultimate comfort and style.",
//     },
//   ];

//   const router = useRouter();

//   const addToCart = (product: any) => {
//     let cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     router.push('/cart');
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-8 text-black">Toys And Games</h2>

//         <div className="sm:hidden overflow-x-auto">
//           <div className="flex space-x-4">
//             {products.map((product) => (
//               <div key={product.id} className="relative min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
//                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
//                 <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p className="text-gray-600">{product.description}</p>
//                 <div className="mt-2">
//                   <span className="text-gray-400 line-through mr-2">${product.price}</span>
//                   <span className="text-xl font-bold text-rose-600">${product.discountPrice}</span>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 py-2 px-4 bg-rose-500 text-white hover:bg-rose-400 rounded-lg transition duration-200"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
//           {products.map((product) => (
//             <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
//               <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
//               <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <div className="mt-2">
//                 <span className="text-gray-400 line-through mr-2">${product.price}</span>
//                 <span className="text-xl font-bold text-rose-600">${product.discountPrice}</span>
//               </div>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 py-2 px-4 bg-rose-500 text-white hover:bg-rose-400 rounded-lg transition duration-200"
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

// export default PopularProduct;








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
    id: 25,
    name: "Dollhouse set",
    price: 30.0,
    discountPrice: 25.0,
    image: "/images/toy1.jpg",
    description: "This is a great product for your baby.",
  },
  {
    id: 26,
    name: "Talking Robot",
    price: 45.0,
    discountPrice: 40.0,
    image: "/images/toy2.jpeg",
    description: "Top-rated product with excellent features.",
  },
  {
    id: 27,
    name: "Building Blocks set",
    price: 60.0,
    discountPrice: 55.0,
    image: "/images/toy3.jpg",
    description: "Best-selling product with amazing reviews.",
  },
  {
    id: 28,
    name: "Magic Toy Car",
    price: 50.0,
    discountPrice: 45.0,
    image: "/images/toy4.webp",
    description: "Premium quality product.",
  },
  {
    id: 29,
    name: "Plush Bear",
    price: 20.0,
    discountPrice: 18.0,
    image: "/images/toy5.jpeg",
    description: "Affordable and durable.",
  },
  {
    id: 30,
    name: "Interactive Dinosaur",
    price: 80.0,
    discountPrice: 75.0,
    image: "/images/toy6.jpg",
    description: "Ultimate comfort and style.",
  },
];

const Toys: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Toys And Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/toys/${product.id}`}
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

export default Toys;
