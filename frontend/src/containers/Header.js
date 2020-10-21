import React from 'react';
import NavLinks from '../components/NavLinks'
import NavLogo from '../components/NavLogo'



const Header = (props) => {

  return (
    <div className='navbar'>
      
        <NavLinks isLoggedIn={props.isLoggedIn} />

        <NavLogo />
        
    </div>
  )
}

export default Header;