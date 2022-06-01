import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase';
import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <Link className='nav-links-container' to='' onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link className='nav-links-container' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
