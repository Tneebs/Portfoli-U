import React from 'react';
import ProjectPage from './ProjectPage'
import ProjectCard from '../components/ProjectCard'

import ProfileForm from '../components/ProfileForm'
import ProfileDisplay from '../components/ProfileDisplay'

import ImageUploader from 'react-images-upload';

import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
         this.state = { 
            name: this.props.currentUser.name,
            pictures: [],
            age: null,
            email: '',
            phone: '',
            skill: '',
            work: '',
            education: '',
            users_projects: [],
            isActive: true
        };

         this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() {
        let user = Number(localStorage.getItem('user'))  // This is getting the user.id set from Login with token

        fetch(`http://localhost:3000/users/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(resp => resp.json())
        // .then(update => console.log(update.projects[0]))
        .then(update => this.setState({
            picture: update.user.picture,
            age: update.user.age,
            email: update.user.email,
            phone: update.user.phone,
            skill: update.user.skill,
            work: update.user.work,
            education: update.user.education,
            users_projects: update.projects
         }))
    }


    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    toggleDetails = () => {
        this.setState(previousState => {
          return {
            isActive: !previousState.isActive}
          })
        
      }

    handleInputChange = e => {
        // console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleEditSubmit = (e) => {
        e.preventDefault()

        let user = Number(localStorage.getItem('user'))    // This is getting the user.id set from Login with token

        let newUser = {
            picture: this.state.picture,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
            skill: this.state.skill,
            work: this.state.work,
            education: this.state.education
        }

        fetch(`http://localhost:3000/users/${user}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify( newUser )
        })
        .then(resp => resp.json())
        // .then(update => console.log(update))
        .then(update => this.setState({ 
            picture: update.picture,
            age: update.age,
            email: update.email,
            phone: update.phone,
            skill: update.skill,
            work: update.work,
            education: update.education
         }))
    }

    createProject = () => {

    let userProject = {
                title: '',
                id: Number(localStorage.getItem('user'))
        }

        fetch(`http://localhost:3000/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(userProject)
        })
        .then(resp => resp.json())
        .then(project => this.setState({
            users_projects: project.users_projects
        }))
    }



    render() {

        return (
            <div>                
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
                        <h1>{this.state.name}</h1>
                    </div>

                    {
                    !this.state.isActive
                    ?
                    <ProfileForm name={this.state.name} pictures={this.state.pictures} age={this.state.age} email={this.state.email} phone={this.state.phone} skill={this.state.skill} work={this.state.work} education={this.state.education} users_projects={this.state.users_projects} isActive={this.state.isActive} handleInputChange={this.handleInputChange} handleEditSubmit={this.handleEditSubmit} toggleDetails={this.toggleDetails}/>
                    :
                    <ProfileDisplay name={this.state.name} pictures={this.state.pictures} age={this.state.age} email={this.state.email} phone={this.state.phone} skill={this.state.skill} work={this.state.work} education={this.state.education} users_projects={this.state.users_projects} isActive={this.state.isActive} handleInputChange={this.handleInputChange} handleEditSubmit={this.handleEditSubmit} toggleDetails={this.toggleDetails}/>
                    }
                    
                </div>

                    <div className='project-container'>
                        <Link to='/project'>
                            <button className='project-create-btn' onClick={this.createProject}>Create Project</button>
                        </Link>
                        <div className='project-display'>
                            {this.state.users_projects.map(project => 
                            <ProjectCard project={project} />
                            )}
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default ProfilePage;