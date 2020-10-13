import React from 'react';
import './App.css';
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Header from './Header'
import ProfilePage from './ProfilePage'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

let current_user = ''

class App extends React.Component {

  state = {
    isLoggedIn: false,
    current_user: ''
  }


  componentDidMount() {
    if(localStorage.getItem('auth_key')){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  handleCurrentUser = (current_user) => {
    this.setState({
      current_user: current_user
    })
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key')){
      this.setState({
        isLoggedIn: true
      })
    }
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>

        <Header isLoggedIn={this.state.isLoggedIn} />

        <Switch>

          <Route exact path='/' component={() => {
            if(localStorage.getItem('auth_key')){
              return <ProfilePage currentUser={this.state.current_user} isLoggedIn={this.state.isLoggedIn} />
            } else {
              return <Redirect to='/login' />
            }
          }} />

          <Route path='/login' component={() => {
            return <Login handleCurrentUser={this.handleCurrentUser} handleLogin={this.handleLogin} />
          }} />

          <Route path='/signup' component={SignUp} />

          <Route path='/logout' component={() => {
            localStorage.clear()
            this.setState({
              isLoggedIn: false
            })
            return <Redirect to='/login' />
          }} />

          <Route>
            <Redirect to='/' />
          </Route>
          
        </Switch>

      </BrowserRouter>
    </div>
  );
}}

export default App;
