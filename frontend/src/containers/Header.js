import React from 'react';
import NavLinks from '../components/NavLinks'
import NavLogo from '../components/NavLogo'


const Header = (props) => {

  return (
    <div className='navbar'>
      
        <NavLogo />

        <NavLinks isLoggedIn={props.isLoggedIn} />
    </div>
  )
}

export default Header;