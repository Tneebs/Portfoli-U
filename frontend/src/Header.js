import React from 'react';
import { NavLink } from 'react-router-dom';


const handleLoginRender = (isLoggedIn) => {
  if(isLoggedIn){
    return (
      <NavLink to="/logout"><button className='navbar-routes-buttons'>Logout</button></NavLink>
    )
  }else{
    return(
      <>
        <NavLink to="/login"><button className='navbar-routes-buttons'>Login</button></NavLink>
        <NavLink to="/signup"><button className='navbar-routes-buttons'>SignUp</button></NavLink>
      </>
    )
  }
}

const Header = (props) => {

  return (
    <div className='navbar'>
      
        <div className='navbar-logo'>
          <h1>Portfoli-Ü</h1>
        </div>

        <div className='navbar-routes'>
            <NavLink to="/"><button className='navbar-routes-buttons'>Home</button></NavLink>
            {
            handleLoginRender(props.isLoggedIn)
            }
        </div>

    </div>
  )
}

export default Header;