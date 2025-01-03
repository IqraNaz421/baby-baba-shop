


// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';

// // Dummy clothes data
// const products = [
//   {
//     id: 7,
//     name: "Baby Half Suit",
//     price: 30.0,
//     discountPrice: 25.0,
//     image: "/images/cloth1.jpg",
//     description: "High-quality fabric with a modern fit.",
//   },
//   {
//     id: 8,
//     name: "Baby Shalwar suit",
//     price: 45.0,
//     discountPrice: 40.0,
//     image: "/images/cloth2.jpg",
//     description: "Stylish and comfortable for all seasons.",
//   },
//   {
//     id: 9,
//     name: "Baby shorts",
//     price: 60.0,
//     discountPrice: 55.0,
//     image: "/images/cloth3.jpeg",
//     description: "Perfect outfit for formal and casual occasions.",
//   },
//   {
//     id: 10,
//     name: "Baby Scurt",
//     price: 50.0,
//     discountPrice: 45.0,
//     image: "/images/cloth4.jpg",
//     description: "Lightweight and durable material.",
//   },
//   {
//     id: 11,
//     name: "Baby Warm clothes",
//     price: 20.0,
//     discountPrice: 18.0,
//     image: "/images/cloth5.jpeg",
//     description: "Elegant and simple design for daily wear.",
//   },
//   {
//     id: 12,
//     name: "Baby Comfort Dress",
//     price: 80.0,
//     discountPrice: 75.0,
//     image: "/images/cloth6.webp",
//     description: "Premium quality with a sleek look.",
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

// Define a type for product structure
interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
}

// Define a type for cart item which extends the Product type to include quantity
interface CartItem extends Product {
  quantity: number;
}

// Dummy clothes data
const products: Product[] = [
  {
    id: 7,
    name: "Baby Half Suit",
    price: 30.0,
    discountPrice: 25.0,
    image: "/images/cloth1.jpg",
    description: "High-quality fabric with a modern fit.",
  },
  {
    id: 8,
    name: "Baby Shalwar suit",
    price: 45.0,
    discountPrice: 40.0,
    image: "/images/cloth2.jpg",
    description: "Stylish and comfortable for all seasons.",
  },
  {
    id: 9,
    name: "Baby shorts",
    price: 60.0,
    discountPrice: 55.0,
    image: "/images/cloth3.jpeg",
    description: "Perfect outfit for formal and casual occasions.",
  },
  {
    id: 10,
    name: "Baby Scurt",
    price: 50.0,
    discountPrice: 45.0,
    image: "/images/cloth4.jpg",
    description: "Lightweight and durable material.",
  },
  {
    id: 11,
    name: "Baby Warm clothes",
    price: 20.0,
    discountPrice: 18.0,
    image: "/images/cloth5.jpeg",
    description: "Elegant and simple design for daily wear.",
  },
  {
    id: 12,
    name: "Baby Comfort Dress",
    price: 80.0,
    discountPrice: 75.0,
    image: "/images/cloth6.webp",
    description: "Premium quality with a sleek look.",
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
  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};

export default ProductDetailPage;
