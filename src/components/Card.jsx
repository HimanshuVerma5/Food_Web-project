import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utilis/cartSlice';

const Card = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-8 border border-gray-200'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className='text-gray-500 text-lg text-center'>Your cart is empty.</p>
      ) : (
        <>
          <button 
            className='w-full py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300 ease-in-out mb-6 flex items-center justify-center'
            onClick={handleClearCart}
          >
            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
            <span>Clear Cart</span>
          </button>
          <ItemList items={cartItems} />
        </>
      )}
    </div>
  );
};

export default Card;
