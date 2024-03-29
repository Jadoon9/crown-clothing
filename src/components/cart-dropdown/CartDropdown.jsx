import React from 'react';

import Button from '../button/Button';
import './cart-dropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
