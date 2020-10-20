import React from "react";

class ProfileDisplay extends React.Component {
  render() {
    return (
      <div className="profile-display-stats">
        <div className="profile-age">
          <div>
            <h3>Age: </h3>
          </div>
          <div className="age-display">
            <ul name="age" value={this.props.age}>
              {this.props.age}
            </ul>
          </div>
        </div>

        <div className="profile-email">
          <div>
            <h3>Email: </h3>
          </div>
          <div className="email-display">
            <ul name="email" value={this.props.email}>
              {this.props.email}
            </ul>
          </div>
        </div>

        <div className="profile-number">
          <div>
            <h3>Phone Number: </h3>
          </div>
          <div className="phone-display">
            <ul name="phone" value={this.props.phone}>
              {this.props.phone}
            </ul>
          </div>
        </div>

        <div className="profile-skill">
          <div>
            <h3>Skills: </h3>
          </div>
          <div className="skill-display">
            <ul name="skill" value={this.props.skill}>
              {this.props.skill}
            </ul>
          </div>
        </div>

        <div className="profile-work">
          <div>
            <h3>Work Experience: </h3>
          </div>
          <div className="work-display">
            <ul name="work" value={this.props.work}>
              {this.props.work}
            </ul>
          </div>
        </div>

        <div className="profile-education">
          <div>
            <h3>Education: </h3>
          </div>
          <div className="education-display">
            <ul name="education" value={this.props.education}>
              {this.props.education}
            </ul>
          </div>
        </div>

        <div className="profile-edit">
          <button
            className="edit-profile-btn"
            id="edit"
            type="submit"
            value="Submit"
            onClick={(e) => this.props.toggleDetails(e)}
          >
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileDisplay;
