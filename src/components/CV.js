import React from "react";
import "/home/kamo/cv-creator/src/styles/cv-styles.css";
import gitHubLogo from "/home/kamo/cv-creator/src/assets/github-logo.png";
import phoneIcon from "/home/kamo/cv-creator/src/assets/phone-call.png";
import emailIcon from "/home/kamo/cv-creator/src/assets/email.png";

export default class CV extends React.Component{
    render(){
        const {
            firstName, lastName, applicationTitle, phoneNumber, email, githubProfile, description,
            position, company, yearJobStarted, yearJobEnded, jobDescription,
            institutionName, degree, yearCourseStarted, yearCourseEnded, courseDescription,
            skills, languages}  = this.props.cvInformation;

        return(
            <div id="cv-container">
                <div id="themes">
                    <div className ="colour" id="red" onClick={styleForm}></div>
                    <div className ="colour" id="teal" onClick={styleForm}></div>
                    <div className ="colour" id="blue" onClick={styleForm}></div>
                    <div className ="colour" id="purple" onClick={styleForm}></div>
                </div>
                <div id="cv">
                    <div id="main-container">
                        <div id="self-description">
                            <p>{description}</p>
                        </div>
                        <div id="details-container">
                            <div id="info">
                                <h1 className="header-2">Experience</h1>
                                <div id="details">
                                <div id="date-container">
                                        <div id="date">{yearJobStarted} -</div>
                                        <div id="date">{yearJobEnded}</div>
                                    </div>
                                    <div id="explanation">
                                        {position !== "" &&
                                            <p id="cv-position">{position}, {company}</p>
                                        }
                                        
                                        <p id="cv-job-description">{jobDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="info">
                                <h1 className="header-2">Education</h1>
                                <div id="details">
                                    <div id="date-container">
                                        <div id="date">{yearCourseStarted} -</div>
                                        <div id="date">{yearCourseEnded}</div>
                                    </div>
                                    <div id="explanation">
                                        {(degree) !== "" && 
                                        <p id="cv-position">{degree}, {institutionName}</p>}
                                        <p>{courseDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="info">
                                <h1 className="header-2">Skills</h1>
                                <div id="details">
                                    <div id="date-container">
                                        <div id="date"></div>
                                        <div id="date"></div>
                                    </div>
                                    <div id="explanation">
                                        <ul>
                                            {skills.map((skill)=>{
                                                return <li>{skill}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sidebar">
                        <div id="header">
                            <div id="name" name="firstName">
                                <p>{firstName} {lastName}</p>
                                <p id="application-title">{applicationTitle}</p>
                            </div>
                        </div>
                        <div id="personal-info">
                            <p id="section-header" className="header">Personal Info</p>
                            <div id="contact-container">
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
                        </div>
                        <div id="languages-container">
                            <p id="section-header" className="header">Languages</p>
                            <ul>
                                {languages.map((element)=>{
                                    return <li>
                                        <div id="language-display">
                                            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${element.toLowerCase()}/${element.toLowerCase()}-original.svg`} alt="Icon not found"/>
                                            <p>{element}</p>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <button id="download">Download PDF</button>
            </div>
        )
    }
}

function styleForm(e){
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementsByClassName("header");
    const header2 = document.getElementsByClassName("header-2");

    switch(e.target.id){
        case "red":
            sidebar.style.backgroundColor = "#cf6679";
            header[0].style.backgroundColor = "#9b2c3e";
            header[1].style.backgroundColor = "#9b2c3e";
            header2[0].style.backgroundColor = "#9b2c3e";
            header2[1].style.backgroundColor = "#9b2c3e";
            header2[2].style.backgroundColor = "#9b2c3e";
            break;
        case "teal":
            sidebar.style.backgroundColor = "#03dac6";
            header[0].style.backgroundColor = "#009284";
            header[1].style.backgroundColor = "#009284";
            header2[0].style.backgroundColor = "#009284";
            header2[1].style.backgroundColor = "#009284";
            header2[2].style.backgroundColor = "#009284";
            break;
        case "blue":
            sidebar.style.backgroundColor = "#3358fa";
            header[0].style.backgroundColor = "#22399e";
            header[1].style.backgroundColor = "#22399e";
            header2[0].style.backgroundColor = "#22399e";
            header2[1].style.backgroundColor = "#22399e";
            header2[2].style.backgroundColor = "#22399e";
            break;
        case "purple":
            sidebar.style.backgroundColor = "#bb86fc";
            header[0].style.backgroundColor = "#825caf";
            header[1].style.backgroundColor = "#825caf";
            header2[0].style.backgroundColor = "#825caf";
            header2[1].style.backgroundColor = "#825caf";
            header2[2].style.backgroundColor = "#825caf";
            break;
        default:

    }
}
