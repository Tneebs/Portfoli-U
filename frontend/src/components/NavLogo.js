import React from 'react'
import images from './PortfoliU_smaller.png'

const NavLogo = () => {
    return(
        <div className='navbar-logo'>
          <img src={images} alt='Logo' className='logo'/>
        </div>
    )
}

export default NavLogo;