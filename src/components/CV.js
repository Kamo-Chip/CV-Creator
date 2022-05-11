import React from "react";
import "/home/kamo/cv-creator/src/styles/cv-styles.css";
import gitHubLogo from "/home/kamo/cv-creator/src/github-logo.png";
import phoneIcon from "/home/kamo/cv-creator/src/phone-call.png";
import emailIcon from "/home/kamo/cv-creator/src/email.png";

export default class CV extends React.Component{
    render(){
        console.log(this.props);
        const {
            firstName, lastName, phoneNumber, email, githubProfile, description,
            position, company, yearJobStarted, yearJobEnded, jobDescription,
            institutionName, degree, yearCourseStarted, yearCourseEnded, courseDescription,
            skills, languages}  = this.props.cvInformation;
        //console.log(this.props.cvInformation.firstName)
        console.log(githubProfile);
        return(
            <div id="cv">
                <div id="main-container">
                    <div id="selfDescription">
                        <p>{description}</p>
                    </div>
                    <div id="details-container">
                        <div id="info">
                            <h1>Experience</h1>
                            <div id="details">
                                <div id="date">{yearJobStarted} - {yearJobEnded}</div>
                                <div id="explanation">
                                    <p>{position} at {company}</p>
                                    <p>{jobDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div id="info">
                            <h1>Education</h1>
                            <div id="details">
                                <div id="date">{yearCourseStarted} - {yearCourseEnded}</div>
                                <div id="explanation">
                                    <p>{degree} at {institutionName}</p>
                                    <p>{courseDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div id="info">
                            <h1>Skills</h1>
                            <div id="details">

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
                        {/*Render list*/}
                    </div>
                </div>
            </div>
        )
    }
}