import React from "react";
import CV from "./CV";
import "/home/kamo/cv-creator/src/styles/form-styles.css";

export default class Form extends React.Component{
    constructor(){
        super();
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.exampleOnclick = this.exampleOnclick.bind(this);
        this.state = {
                        firstName: "",
                        lastName: "",
                        applicationTitle: "",
                        phoneNumber: "",
                        email: "",
                        githubProfile: "",
                        description: "",
                
                        position: "",
                        company: "",
                        yearJobStarted: "",
                        yearJobEnded: "",
                        jobDescription: "",
                            
                        institutionName: "",
                        degree: "",
                        yearCourseStarted: "",
                        yearCourseEnded: "",
                        courseDescription: "",
                       
                        skills: [],

                        languages: [],
                    }
    }

    exampleOnclick = (e) =>{
        e.preventDefault();
        this.setState({
                        firstName: "Ada",
                        lastName: "Lovelace",
                        applicationTitle: "Senior Software Engineer",
                        phoneNumber: "011 511 1115",
                        email: "adalovelace@gmail.com",
                        githubProfile: "github.com/AdaLovey",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

                        position: "Senior Software Engineer",
                        company: "Meta",
                        yearJobStarted: "2018",
                        yearJobEnded: "present",
                        jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                            
                        institutionName: "University of Design",
                        degree: "Graphic design",
                        yearCourseStarted: "2008",
                        yearCourseEnded: "2013",
                        courseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                       
                        skills: ["Good communicator", "Fast learner", "Competitive pizza eater"],

                        languages: ["Java", "C", "Ruby", "Python"],
        })
    }    
    
    handleChangeInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleAdd = (e) =>{
        e.preventDefault();
        const target = e.target.parentElement.children[1];
        const name = target.name;
        
        this.setState({
           [target.name]: this.state[name].concat(target.value)
        })
        target.value = "";
    }
    
    render(){
        return (
            <div id="app-container">
                <div id="form-container">
                    <form id="cv-form">
                        {this.personalInfoUI()}
                        {this.experienceUI()}
                        {this.educationUI()}
                        {this.skillsUI()}
                        {this.languagesUI()}
                    </form>
                    
                    <button onClick={this.exampleOnclick}>Load example</button>
                </div>
                <CV cvInformation={this.state}/>
            </div>
        );
    }

    personalInfoUI(){
        return(
            <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
                <legend>Personal Info</legend>
                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChangeInput} value={this.state.firstName}></input>
                <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChangeInput} value={this.state.lastName}></input>
                <input type="text" placeholder="Applying for" name="applicationTitle" onChange={this.handleChangeInput} value={this.state.applicationTitle}></input>
                <input type="tel" placeholder="Phone number" name="phoneNumber" onChange={this.handleChangeInput} value={this.state.phoneNumber}></input>
                <input type="email" placeholder="Email" name="email" onChange={this.handleChangeInput} value={this.state.email}></input>
                <input type="url" placeholder="GitHub Profile" name="githubProfile" onChange={this.handleChangeInput} value={this.state.githubProfile}></input>
                <textarea placeholder="Tell your story. Try to keep it short!" name="description" onChange={this.handleChangeInput} value={this.state.description}></textarea>
            </fieldset>
        );
    }
    
    experienceUI(){
        return(
            <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
                <legend>Experience</legend>
                <input type="text" placeholder="Position" name="position" onChange={this.handleChangeInput} value={this.state.position}></input>
                <input type="text" placeholder="Company" name="company" onChange={this.handleChangeInput} value={this.state.company}></input>
                <input type="text" placeholder="From" name="yearJobStarted" onChange={this.handleChangeInput} value={this.state.yearJobStarted}></input>
                <input type="text" placeholder="To" name="yearJobEnded" onChange={this.handleChangeInput} value={this.state.yearJobEnded}></input>
                <textarea placeholder="Describe your role" name="jobDescription" onChange={this.handleChangeInput} value={this.state.jobDescription}></textarea>
            </fieldset> 
        );
    }
    
    educationUI(){
        return(
            <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
                <legend>Education</legend>
                <input type="text" placeholder="Degree" name="degree" onChange={this.handleChangeInput} value={this.state.degree}></input>
                <input type="text" placeholder="Institution's name" name="institutionName" onChange={this.handleChangeInput} value={this.state.institutionName}></input>
                <input type="text" placeholder="Year started" name="yearCourseStarted" onChange={this.handleChangeInput} value={this.state.yearCourseStarted}></input>
                <input type="text" placeholder="Year completed" name="yearCourseEnded" onChange={this.handleChangeInput} value={this.state.yearCourseEnded}></input>
                <textarea placeholder="Describe what you learned" name="courseDescription" onChange={this.handleChangeInput} value={this.state.courseDescription}></textarea>
            </fieldset>
        );
    }
    
    skillsUI(){
        return(
            <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
                <legend>Skills</legend>
                <input type="text" name="skills" placeholder="Type skill then click add"></input>
                <button onClick={this.handleAdd}>Add</button>
            </fieldset>
        );
    }

    languagesUI(){
        return(
            <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
                <legend>Languages</legend>
                <input type="text" name="languages" placeholder="Type language then click add"></input>
                <button onClick={this.handleAdd}>Add</button>
            </fieldset>
        );
    }
}


function styleFieldset(e){
    e.target.parentElement.children[0].style.textDecoration = "underline";
}

function removeStyleFieldset(e){
    e.target.parentElement.children[0].style.textDecoration = "none";
}