import React from "react";
import "/home/kamo/cv-creator/src/styles/cv-styles.css";
import gitHubLogo from "/home/kamo/cv-creator/src/github-logo.png";
import phoneIcon from "/home/kamo/cv-creator/src/phone-call.png";
import emailIcon from "/home/kamo/cv-creator/src/email.png";

export default class CV extends React.Component{
    render(){
        const {
            firstName, lastName, phoneNumber, email, githubProfile, description,
            position, company, yearJobStarted, yearJobEnded, jobDescription,
            institutionName, degree, yearCourseStarted, yearCourseEnded, courseDescription,
            skills, languages}  = this.props.cvInformation;

        return(
            <div id="cv">
                <div id="main-container">
                    <div id="self-description">
                        <p>{description}</p>
                    </div>
                    <div id="details-container">
                        <div id="info">
                            <h1>Experience</h1>
                            <div id="details">
                            <div id="date-container">
                                    <div id="date">{yearJobStarted}</div>
                                    <div id="date">{yearJobEnded}</div>
                                </div>
                                <div id="explanation">
                                    <p>{position}</p>
                                    <p>{company}</p>
                                    <p>{jobDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div id="info">
                            <h1>Education</h1>
                            <div id="details">
                                <div id="date-container">
                                    <div id="date">{yearCourseStarted}</div>
                                    <div id="date">{yearCourseEnded}</div>
                                </div>
                                <div id="explanation">
                                    {(degree) !== "" && 
                                    <p>{degree}, {institutionName}</p>}
                                    <p>{courseDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div id="info">
                            <h1>Skills</h1>
                            <div id="details">
                                <ul>
                                    {skills.map((skill)=>{
                                        return <li>{skill}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar">
                    <div id="header">
                        <div id="name" name="firstName">
                            <p>{firstName} {lastName}</p>
                        </div>
                    </div>
                    <div id="personal-info">
                        <p>Personal Information</p>
                        <div id="contact-details">
                            <img src={phoneIcon} alt="Phone" name="phoneNumber"/>
                            <p id="phone-number">{phoneNumber}</p>
                        </div>
                        <div id="contact-details">
                            <img src={emailIcon} alt="Email"/>
                            <p id="email-address">{email}</p>
                        </div>
                        <div id="contact-details">
                            <img src={gitHubLogo} alt="GitHub"/>
                            <p id="github-link" >{githubProfile}</p>
                        </div>
                    </div>
                    <div id="languages-container">
                        <p>Languages</p>
                        <ul>
                            {languages.map((element)=>{
                                return <li>
                                    <div id="language-display">
                                        <img height="50px" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${element.toLowerCase()}/${element.toLowerCase()}-original.svg`} alt="logo for language"/>
                                        <p>{element}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}