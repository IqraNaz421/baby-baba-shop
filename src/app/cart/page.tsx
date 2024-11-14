
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const Cart: React.FC = () => {
//   const [cartItems, setCartItems] = useState<any[]>([]); // To store cart items
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const router = useRouter();

//   // Update the total price whenever the cart items change
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(cart);

//     // Calculate the total price of the cart
//     const total = cart.reduce((acc: number, item: any) => acc + item.discountPrice * item.quantity, 0);
//     setTotalPrice(total);
//   }, []);

//   // Handle removal of an item from the cart
//   const removeItem = (productId: number) => {
//     let cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     cart = cart.filter((item: any) => item.id !== productId); // Remove item with matching ID
//     localStorage.setItem('cart', JSON.stringify(cart));
//     setCartItems(cart); // Update state to re-render
//     updateTotalPrice(cart); // Recalculate total price
//   };

//   // Handle quantity update
//   const updateQuantity = (productId: number, quantity: number) => {
//     let cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const updatedCart = cart.map((item: any) =>
//       item.id === productId ? { ...item, quantity: quantity } : item
//     );
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setCartItems(updatedCart); // Update state to re-render
//     updateTotalPrice(updatedCart); // Recalculate total price
//   };

//   // Function to update the total price
//   const updateTotalPrice = (cart: any[]) => {
//     const total = cart.reduce((acc: number, item: any) => acc + item.discountPrice * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto text-center px-4">
//         <h2 className="text-3xl font-semibold mb-8 text-rose-600">Your Cart</h2>

//         {/* If cart is empty */}
//         {cartItems.length === 0 ? (
//           <p className="text-xl text-gray-700">Your cart is empty Add products to your cart</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-200 hover:shadow-xl transition-all duration-300">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   height={500}
//                   width={500}
//                   className="w-full h-48 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{item.description}</p>
//                 <p className="font-bold text-lg text-rose-500">${item.discountPrice}</p>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center mt-4 space-x-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-all"
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <span className="text-xl font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-all"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Remove Item Button */}
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="mt-4 text-red-500 hover:text-red-700 text-sm font-semibold"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Cart Summary */}
//         {cartItems.length > 0 && (
//           <div className="mt-8 p-6 bg-rose-100 shadow-md rounded-lg">
//             <h3 className="text-2xl font-semibold text-rose-600">Cart Summary</h3>
//             <p className="text-lg font-bold mt-4 text-gray-800">Total: ${totalPrice.toFixed(2)}</p>

//             {/* Checkout Button */}
//             <button
//               onClick={() => router.push('/checkout')} // Redirect to checkout page
//               className="mt-6 py-2 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}

//         {/* Back to Products */}
//         <button
//           onClick={() => router.push('/')} // Redirect back to products page
//           className="mt-8 py-2 px-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-all"
//         >
//           Back to Products
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Cart;

































































'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Cart item ka type define karte hain
interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  discountPrice: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Cart items ki type define ki gayi hai
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  // Cart items change hone par total price update karte hain
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]; // cart ko CartItem[] type mein cast kiya gaya hai
    setCartItems(cart);

    // Cart ki total price calculate karna
    const total = cart.reduce((acc: number, item: CartItem) => acc + item.discountPrice * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  // Cart se item remove karne ka function
  const removeItem = (productId: number) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]; // `CartItem[]` type use karna
    const updatedCart = cart.filter((item: CartItem) => item.id !== productId); // item ko CartItem type se filter kiya
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  // Quantity update karne ka function
  const updateQuantity = (productId: number, quantity: number) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]; // `CartItem[]` type
    const updatedCart = cart.map((item: CartItem) =>
      item.id === productId ? { ...item, quantity: quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  // Total price ko update karne ka function
  const updateTotalPrice = (cart: CartItem[]) => {
    const total = cart.reduce((acc: number, item: CartItem) => acc + item.discountPrice * item.quantity, 0);
    setTotalPrice(total);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-8 text-rose-600">Your Cart</h2>

        {/* Agar cart khali hai */}
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-700">Your cart is empty Add products to your cart</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={500}
                  width={500}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="font-bold text-lg text-rose-500">${item.discountPrice}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-4 space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-all"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-all"
                  >
                    +
                  </button>
                </div>

                {/* Remove Item Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-8 p-6 bg-rose-100 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-rose-600">Cart Summary</h3>
            <p className="text-lg font-bold mt-4 text-gray-800">Total: ${totalPrice.toFixed(2)}</p>

            {/* Checkout Button */}
            <button
              onClick={() => router.push('/checkout')}
              className="mt-6 py-2 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Back to Products */}
        <button
          onClick={() => router.push('/')}
          className="mt-8 py-2 px-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-all"
        >
          Back to Products
        </button>
      </div>
    </section>
  );
};

export default Cart;
