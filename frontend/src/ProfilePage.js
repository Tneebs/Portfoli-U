import React from 'react';
import Project from './Project'

class ProfilePage extends React.Component {

    state = {
        name: '',
        picture: '',
        age: null,
        email: '',
        phone: '',
        skill: '',
        work: '',
        education: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleEditSubmit = (e) => {
        e.preventDefault()

        let newUser = {
            name: this.state.name,
            picture: this.state.picture,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
            skill: this.state.skill,
            work: this.state.work,
            education: this.state.education
        }

        fetch('http://localhost:3000/user/${user.id}', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: { newUser }
        })
        .then(resp => resp.json())
        .then(update => console.log(update))
    }


    render() {
        return (
            <div className='profile-display'>
                <div className='profile-name'>
                    <p>Image tag for User's Profile Picture</p>
                    <h1>User's name goes here</h1>
                </div>
                <div className='profile-stats'>
                    <ul>Age: {this.state.age}</ul>
                    <ul>Email: {this.state.email}</ul>
                    <ul>Phone Number: {this.state.phone}</ul>
                    <ul>Skills: {this.state.skill}</ul>
                    <ul>Work Experience: {this.state.work}</ul>
                    <ul>Education: {this.state.education}</ul>
                </div>
                <button>Edit Profile</button>
            </div>,

            <div className='project-display'>
                <Project />
            </div>
        )
    }
}

export default ProfilePage;