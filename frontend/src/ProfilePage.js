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

        fetch('http://localhost:3000/users/${user.id}', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: { newUser }
        })
        .then(resp => resp.json())
        .then(update => this.setState({ 
            name: update.name,
            picture: update.picture,
            age: update.age,
            email: update.email,
            phone: update.phone,
            skill: update.skill,
            work: update.work,
            education: update.education
         }))
    }


    render() {
        return (
            <div className='profile-page'>
                <div className='profile-display'>

                    <div className='profile-name'>
                        <p>Image tag for User's Profile Picture</p>
                        <h1>User's name goes here</h1>
                    </div>

                    <div className='profile-form-stats'>
                        <form>
                        <div className='form-stats'>
                            <div className='form-age'>
                                <div>Age: </div>
                                <input type='text' value={this.state.age} onChange={this.handleInputChange} name='age' placeholder={this.state.age} />
                            </div>

                            <div className='form-email'>
                                <div>Email: </div>
                                <input type='text' value={this.state.email} onChange={this.handleInputChange} name='email' placeholder={this.state.email} />
                            </div>

                            <div className='form-phone'>
                                <div>Phone Number: </div>
                                <input type='text' value={this.state.phone} onChange={this.handleInputChange} name='phone' placeholder={this.state.phone} />
                            </div>

                            <div className='form-skill'>
                                <div>Skills: </div>
                                <input type='text' value={this.state.skill} onChange={this.handleInputChange} name='skill' placeholder={this.state.skill} />
                            </div>

                            <div className='form-work'>
                                <div>Work Experience: </div>
                                <input type='text' value={this.state.work} onChange={this.handleInputChange} name='work' placeholder={this.state.work} />
                            </div>

                            <div className='form-education'>
                                <div>Education: </div>
                                <input type='text' value={this.state.education} onChange={this.handleInputChange} name='education' placeholder={this.state.education} />
                            </div>

                            <div className='form-submit'>
                                <button className='form-submit-btn' id='submit' type='submit' value='Submit' onClick={this.handleEditSubmit}>Confirm</button>
                            </div>

                            </div>
                        </form>
                    </div>


                    <div className='profile-display-stats'>
                        <ul>Age: {this.state.age}</ul>
                        <ul>Email: {this.state.email}</ul>
                        <ul>Phone Number: {this.state.phone}</ul>
                        <ul>Skills: {this.state.skill}</ul>
                        <ul>Work Experience: {this.state.work}</ul>
                        <ul>Education: {this.state.education}</ul>
                            <div className='edit-profile-btn'>
                                <button>Edit Profile</button>
                            </div>
                    </div>

                </div>


                    <div className='project-container'>
                        <button className='project-create-btn'>Create Project</button>
                        <div className='project-display'>
                            <Project />
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProfilePage;