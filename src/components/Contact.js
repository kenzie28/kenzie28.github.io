import React, {Component} from "react";
import "./Contact.css";
import { FaBookOpen, FaDownload, FaGithub, FaLinkedin, FaProjectDiagram } from 'react-icons/fa';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverProjects: false,
      hoverExperiences: false
    };
  }

  redirectToGitHub() {
    window.location.assign("https://github.com/kenzie28?tab=repositories");
  }

  redirectToLinkedIn() {
    window.location.assign("https://www.linkedin.com/in/kenzie-mihardja/");
  }



  handleMouseInProjects() {
    this.setState({ hoverProjects: true })
  }
  
  handleMouseOutProjects() {
    this.setState({ hoverProjects: false })
  }

  handleMouseInExperiences() {
    this.setState({ hoverExperiences: true })
  }
  
  handleMouseOutExperiences() {
    this.setState({ hoverExperiences: false })
  }


  render() {
    const tooltipProjects = {
      display: this.state.hoverProjects ? 'block' : 'none'
    }

    const tooltipExperiences = {
      display: this.state.hoverExperiences ? 'block' : 'none'
    }

    return (
        <div className="flexbox-container">
          <div className="item" id="clickable" onClick={this.redirectToGitHub}>
            <FaGithub size={70}/>
            <h3 onClick={this.redirectToGitHub}>GitHub</h3>
          </div>

          <div className="item" id="clickable" onClick={this.redirectToLinkedIn}>
            <FaDownload size={70}/>
            <h3 >Resume</h3>
          </div>

          <div className="item" id="clickable" onClick={this.redirectToLinkedIn}>
            <FaLinkedin size={70}/>
            <h3>LinkedIn</h3>
          </div>

          <div className="item" onMouseOver={this.handleMouseInProjects.bind(this)} onMouseOut={this.handleMouseOutProjects.bind(this)}>
            <FaProjectDiagram size={70}/>
            <h3 id="hover">Projects</h3>
            <div style={tooltipProjects}>Under construction...</div>
          </div>

          <div className="item" onMouseOver={this.handleMouseInExperiences.bind(this)} onMouseOut={this.handleMouseOutExperiences.bind(this)}>
            <FaBookOpen size={70}/>
            <h3 id="hover">Experiences</h3>
            <div style={tooltipExperiences}>Under construction...</div>
          </div>
        </div>

    );
  }
}

export default Contact;
