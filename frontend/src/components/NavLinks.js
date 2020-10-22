import React from 'react'

import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const NavLinks = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleRoute = (e) => {
    props.history.push(e.target.getAttribute('name'))
  }

  const handleLogin = () => {
      if(props.isLoggedIn){
          return(
            <MenuItem name="/logout" onClick={(e) => {handleClose(); handleRoute(e)}}>Logout</MenuItem>
          )
      }else{
          return(
            <div>
            <MenuItem name="/login" onClick={(e) => {handleClose(); handleRoute(e)}}>Login</MenuItem>
            <MenuItem name='/signup' onClick={(e) => {handleClose(); handleRoute(e)}}>SignUp</MenuItem>
            </div>
          )
      }
  }

    return(
        <div className='navbar-routes'>

              <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              >
              Menu
              </Button>

              <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >

            <MenuItem name="/" onClick={(e) => {handleClose(); handleRoute(e)}}>Home</MenuItem>

            {handleLogin(props.isLoggedIn)}

            </Menu>
        </div>
    )
}

export default withRouter(NavLinks);