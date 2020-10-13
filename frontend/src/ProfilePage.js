import React from 'react';
import Project from './Project'

import ImageUploader from 'react-images-upload';

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
         this.state = { 
            name: '',
            pictures: [],
            age: null,
            email: '',
            phone: '',
            skill: '',
            work: '',
            education: 'test'
        };

         this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() {
        console.log(this.props.currentUser)
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleInputChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePictureUpdate = (e) => {
        this.setState({
            picture: `c:\fakepath\${e.target.value}`
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

        let user = localStorage.getItem('user')
        console.log(localStorage)

        fetch(`http://localhost:3000/users/${this.props.current_user.id}`, {
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

                    <div className='profile-picture-uploader'>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose Image'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            accept="accept=image/*"
                        />                    
                    </div>

                    <div className='profile-picture-name'>
                        <img src={this.state.picture} />
                        <h1>{this.props.currentUser.name}</h1>
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
                                <textarea type='text' value={this.state.education} onChange={this.handleInputChange} name='education' placeholder={this.state.education} />
                            </div>

                            <div className='form-submit'>
                                <button className='form-submit-btn' id='submit' type='submit' value='Submit' onClick={this.handleEditSubmit}>Confirm</button>
                            </div>

                            </div>
                        </form>
                    </div>


                    <div className='profile-display-stats'>

                        <div className='profile-age' contenteditable='true' onChange={this.handleInputChange}>
                            <ul>Age: {this.state.age}</ul>
                        </div>

                        <div className='profile-email' contenteditable='true' onChange={this.handleInputChange}>
                            <ul>Email: {this.state.email}</ul>
                        </div>

                        <div className='profile-number' contenteditable='true' onChange={this.handleInputChange}>
                            <ul>Phone Number: {this.state.phone}</ul>
                        </div>

                        <div className='profile-skill' contenteditable='true' onChange={this.handleInputChange}>
                            <ul>Skills: {this.state.skill}</ul>
                        </div>

                        <div className='profile-work' contenteditable='true' onChange={this.handleInputChange}>
                            <ul>Work Experience: {this.state.work}</ul>
                        </div>

                        <div className='profile-education'>
                            <div><h3>Education: </h3></div>
                            <div className='education-state'>
                            <p contenteditable='true' name='education' value={this.state.education} onChange={(e) => this.handleInputChange(e)}>{this.state.education}</p>
                            </div>
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