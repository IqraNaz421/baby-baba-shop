






// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// // Defining types for Product and CartItem
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// const clothes: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 7,
//       name: "Product 7",
//       price: 30.00,
//       discountPrice: 25.00,
//       image: "/images/cloth1.jpg",
//       description: "This is a great product for your baby.",
//     },
//     {
//       id: 8,
//       name: "Product 8",
//       price: 45.00,
//       discountPrice: 40.00,
//       image: "/images/cloth2.jpg",
//       description: "Top rated product with excellent features.",
//     },
//     {
//       id: 9,
//       name: "Product 9",
//       price: 60.00,
//       discountPrice: 55.00,
//       image: "/images/cloth3.jpeg",
//       description: "Best-selling product with amazing reviews.",
//     },
//     {
//       id: 10,
//       name: "Product 10",
//       price: 50.00,
//       discountPrice: 45.00,
//       image: "/images/cloth4.jpg",
//       description: "Premium quality product.",
//     },
//     {
//       id: 11,
//       name: "Product 11",
//       price: 20.00,
//       discountPrice: 18.00,
//       image: "/images/cloth5.jpeg", 
//       description: "Affordable and durable.",
//     },
//     {
//       id: 12,
//       name: "Product 12",
//       price: 80.00,
//       discountPrice: 75.00,
//       image: "/images/cloth6.webp",
//       description: "Ultimate comfort and style.",
//     },
//   ];

//   const router = useRouter(); // For navigating to the cart page

//   // Function to handle adding products to the cart
//   const addToCart = (product: Product) => {
//     const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingProductIndex = cart.findIndex((item) => item.id === product.id);

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
//         <h2 className="text-3xl font-semibold mb-8">Baby Clothes</h2>

//         {/* Mobile view */}
//         <div className="sm:hidden overflow-x-auto">
//           <div className="flex space-x-4">
//             {products.map((product) => (
//               <div key={product.id} className="relative min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
//                 {product.price > product.discountPrice && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
//                     Sale
//                   </span>
//                 )}
//                 <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p className="font-bold text-lg">
//                   <span className="text-red-500">${product.discountPrice}</span>
//                   <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
//                 </p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 py-2 px-4 border-2 border-rose-500 hover:bg-rose-300 text-black rounded-lg"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop view */}
//         <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg">
//               {product.price > product.discountPrice && (
//                 <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
//                   Sale
//                 </span>
//               )}
//               <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p>{product.description}</p>
//               <p className="font-bold text-lg">
//                 <span className="text-red-500">${product.discountPrice}</span>
//                 <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
//               </p>
//               <button
//                 onClick={() => addToCart(product)}
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

// export default clothes;











// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
// }

// const products: Product[] = [
//   {
//     id: 7,
//     name: "Baby half suit",
//     price: 30.0,
//     discountPrice: 25.0,
//     image: "/images/cloth1.jpg",
//   },
//   {
//     id: 8,
//     name: " Baby Shalwar suit",
//     price: 45.0,
//     discountPrice: 40.0,
//     image: "/images/cloth2.jpg",
//   },
//   {
//     id: 9,
//     name: "Baby shorts",
//     price: 60.0,
//     discountPrice: 55.0,
//     image: "/images/cloth3.jpeg",
//   },
//   {
//     id: 10,
//     name: "Baby scurt",
//     price: 50.0,
//     discountPrice: 45.0,
//     image: "/images/cloth4.jpg",
//   },
//   {
//     id: 11,
//     name: "Warm clothes",
//     price: 20.0,
//     discountPrice: 18.0,
//     image: "/images/cloth5.jpeg",
//   },
//   {
//     id: 12,
//     name: "Baby comfort dress",
//     price: 80.0,
//     discountPrice: 75.0,
//     image: "/images/cloth6.webp",
//   },
// ];

// const ClothesPage: React.FC = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={400}
//                 height={400}
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-lg text-gray-700">
//                 <span className="text-red-500 font-bold">
//                   ${product.discountPrice}
//                 </span>
//                 <span className="text-gray-500 line-through ml-2">
//                   ${product.price}
//                 </span>
//               </p>
//               <Link
//                 href={`/clothes/${product.id}`}
//                 className="block mt-4 text-center py-2 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-400 transition-colors"
//               >
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClothesPage;








// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string; // Added for additional information
// }

// const products: Product[] = [
//   {
//     id: 7,
//     name: "Baby Half Suit",
//     price: 30.0,
//     discountPrice: 25.0,
//     image: "/images/cloth1.jpg",
//     description: "Comfortable and stylish for your baby.",
//   },
//   {
//     id: 8,
//     name: "Baby Shalwar Suit",
//     price: 45.0,
//     discountPrice: 40.0,
//     image: "/images/cloth2.jpg",
//     description: "Perfect for traditional events.",
//   },
//   {
//     id: 9,
//     name: "Baby Shorts",
//     price: 60.0,
//     discountPrice: 55.0,
//     image: "/images/cloth3.jpeg",
//     description: "Light and breathable fabric for summer.",
//   },
//   {
//     id: 10,
//     name: "Baby Skirt",
//     price: 50.0,
//     discountPrice: 45.0,
//     image: "/images/cloth4.jpg",
//     description: "Stylish and cute for all occasions.",
//   },
//   {
//     id: 11,
//     name: "Warm Clothes",
//     price: 20.0,
//     discountPrice: 18.0,
//     image: "/images/cloth5.jpeg",
//     description: "Keep your baby warm and cozy.",
//   },
//   {
//     id: 12,
//     name: "Baby Comfort Dress",
//     price: 80.0,
//     discountPrice: 75.0,
//     image: "/images/cloth6.webp",
//     description: "Premium comfort for everyday wear.",
//   },
// ];

// const ClothesPage: React.FC = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Our Clothes </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <Link
//               key={product.id}
//               href={/clothes/${product.id}}
//               className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow block"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={400}
//                   height={400}
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                 />
//                 <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//                 <p className="text-lg text-gray-700">
//                   <span className="text-red-500 font-bold">
//                     ${product.discountPrice}
//                   </span>
//                   <span className="text-gray-500 line-through ml-2">
//                     ${product.price}
//                   </span>
//                 </p>
//                 <p className="text-sm text-gray-600 mt-2">
//                   {product.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClothesPage;
































import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string; // Added for additional information
}

const products: Product[] = [
  {
    id: 7,
    name: "Baby Half Suit",
    price: 30.0,
    discountPrice: 25.0,
    image: "/images/cloth1.jpg",
    description: "Comfortable and stylish for your baby.",
  },
  {
    id: 8,
    name: "Baby Shalwar Suit",
    price: 45.0,
    discountPrice: 40.0,
    image: "/images/cloth2.jpg",
    description: "Perfect for traditional events.",
  },
  {
    id: 9,
    name: "Baby Shorts",
    price: 60.0,
    discountPrice: 55.0,
    image: "/images/cloth3.jpeg",
    description: "Light and breathable fabric for summer.",
  },
  {
    id: 10,
    name: "Baby Skirt",
    price: 50.0,
    discountPrice: 45.0,
    image: "/images/cloth4.jpg",
    description: "Stylish and cute for all occasions.",
  },
  {
    id: 11,
    name: "Warm Clothes",
    price: 20.0,
    discountPrice: 18.0,
    image: "/images/cloth5.jpeg",
    description: "Keep your baby warm and cozy.",
  },
  {
    id: 12,
    name: "Baby Comfort Dress",
    price: 80.0,
    discountPrice: 75.0,
    image: "/images/cloth6.webp",
    description: "Premium comfort for everyday wear.",
  },
];

const ClothesPage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Clothes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/clothes/${product.id}`}  
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

export default ClothesPage;
