import React from 'react';

class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        name: '',
        email: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const newUser = {
            user: {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                email: this.state.email
            }
        }
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(userDetails => console.log(userDetails))
        this.props.history.push('/login')
    }

    render() {
        return(
            <div className='limiter'>
            <div className='container-login100'>
            <div className={'wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55'}>
              <form className={'login100-form validate-form flex-sb flex-w'} onSubmit={this.handleOnSubmit}>
                <span className='login100-form-title p-b-32'>Signup</span>
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
                          <span className='txt1 p-b-11'>
                  Name: 
                </span>
                <div className="wrap-input100 validate-input m-b-36" data-validate="Name is required">
                <input className='input100'type="text" value={this.state.name} onChange={this.handleInputChange} name='name' placeholder='Joe Doe'/>
                              <span className="focus-input100"></span>
                          </div>
                          <span className='txt1 p-b-11'>
                  Email: 
                </span>
                <div className="wrap-input100 validate-input m-b-36" data-validate="Email is required">
                <input className='input100'type="text" value={this.state.email} onChange={this.handleInputChange} name='email' placeholder='example@mail.com'/>
                              <span className="focus-input100"></span>
                          </div>

                <div class="container-login100-form-btn">
                              <button class="login100-form-btn" id="submit" type="submit" value="Submit">
                                  SignUp!
                              </button>
                          </div>
              </form>
            </div>
            </div>
            </div>
        )
    }
}

export default SignUp;

