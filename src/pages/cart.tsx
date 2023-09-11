import React from 'react';
import { useSelector } from 'react-redux';
import { StateProps } from '../../type';

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div>
      {productData.length > 0 ? (
        <div>
          <div>
            <div>Shopping Cart</div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your Cart is empty !</h1>
          <button>Go To Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
