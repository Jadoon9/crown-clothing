import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.scss';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-links-container' to='/shop'>
            Shop
          </Link>
          <Link className='nav-links-container' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
