import React from 'react';
import '../App.css';
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import Header from './Header'
import ProfilePage from './ProfilePage'
import ProjectPage from './ProjectPage'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {

  state = {
    isLoggedIn: false,
    current_user: '',
    username: '',
    password: ''
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
      current_user: current_user.username
    })
  }

  handleSignIn = (username, password) => {
    this.setState({
      username: username,
      password: password
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

          <Route exact path='/project' component={() => {
            if(localStorage.getItem('auth_key')){
              return <ProjectPage currentUser={this.props.current_user} isLoggedIn={this.props.isLoggedIn} />
            } else {
              return <Redirect to='/login' />
            }
          }} />

          <Route path='/login' component={() => {
            return <Login username={this.state.username} password={this.state.password} current_user={this.state.current_user} handleCurrentUser={this.handleCurrentUser} handleLogin={this.handleLogin} handleSignIn={this.handleSignIn} />
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
