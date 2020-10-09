import React from 'react';
import { withRouter } from 'react-router';


class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const newUser = {
    //   username: this.state.username,
    //   password: this.state.password
    // }
    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
      })
    }).then(res => res.json())
    .then(token => {
        console.log(token)
      localStorage.setItem('auth_key',token['auth_key'])
      this.props.handleLogin()
      this.props.history.push('/')
    })
  }

  render(){
    return (
      <div className='limiter'>
      <div className='container-login100'>
      <div className={'wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55'}>
        <form className={'login100-form validate-form flex-sb flex-w'} onSubmit={this.handleSubmit}>
          <span className='login100-form-title p-b-32'>Login</span>
          <span className='txt1 p-b-11'>
            Username: 
          </span>
          <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
          <input className='input100'type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder='Username'/>
						<span className="focus-input100"></span>
					</div>
          <span className='txt1 p-b-11'>
            Password: 
          </span>
          <div class="wrap-input100 validate-input m-b-12" data-validate="Password is required">
						<span class="btn-show-pass">
							<i class="fa fa-eye"></i>
						</span>
            <input className='input100' type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
						<span class="focus-input100"></span>
					</div>
          <div class="container-login100-form-btn">
						<button class="login100-form-btn" id="submit" type="submit" value="Submit">
							Login
						</button>
					</div>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Login);
