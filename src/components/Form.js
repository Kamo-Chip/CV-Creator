import React from "react";
import CV from "./CV";
import "/home/kamo/cv-creator/src/styles/form-styles.css";

export default class Form extends React.Component{
    constructor(){
        super();
        this.handleChangeInput = this.handleChangeInput.bind(this);

        this.state = {
                        firstName: "",
                        lastName: "",
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
                    <p>Enter your details</p>
                    <form id="cv-form">
                        {this.personalInfoUI()}
                        {this.experienceUI()}
                        {this.educationUI()}
                        {this.skillsUI()}
                        {this.languagesUI()}
                    </form>
                </div>
                <CV cvInformation={this.state}/>
            </div>
        );
    }

    personalInfoUI(){
        return(
            <fieldset>
                <legend>Personal Information</legend>
                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChangeInput} value={this.state.firstName}></input>
                <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChangeInput}></input>
                <input type="tel" placeholder="Phone number" name="phoneNumber" onChange={this.handleChangeInput}></input>
                <input type="email" placeholder="Email" name="email" onChange={this.handleChangeInput}></input>
                <input type="url" placeholder="GitHub Profile" name="githubProfile" onChange={this.handleChangeInput}></input>
                <textarea placeholder="Tell your story. Try to keep it short!" name="description" onChange={this.handleChangeInput}></textarea>
            </fieldset>
        );
    }
    
    experienceUI(){
        return(
            <fieldset>
                <legend>Experience</legend>
                <input type="text" placeholder="Position" name="position" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="Company" name="company" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="From" name="yearJobStarted" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="To" name="yearJobEnded" onChange={this.handleChangeInput}></input>
                <textarea placeholder="Describe your role" name="jobDescription" onChange={this.handleChangeInput}></textarea>
            </fieldset> 
        );
    }
    
    educationUI(){
        return(
            <fieldset>
                <legend>Education</legend>
                <input type="text" placeholder="Degree" name="degree" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="Institution's name" name="institutionName" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="Year started" name="yearCourseStarted" onChange={this.handleChangeInput}></input>
                <input type="text" placeholder="Year completed" name="yearCourseEnded" onChange={this.handleChangeInput}></input>
                <textarea placeholder="Describe what you learned" name="courseDescription" onChange={this.handleChangeInput}></textarea>
            </fieldset>
        );
    }
    
    skillsUI(){
        return(
            <fieldset>
                <legend>Skills</legend>
                <input type="text" name="skills" placeholder="List skills in a comma separated list"></input>
                <button onClick={this.handleAdd}>Add</button>
            </fieldset>
        );
    }

    languagesUI(){
        return(
            <fieldset>
                <legend>Languages</legend>
                <input type="text" name="languages" placeholder="List the programming languages in a comma seperated list"></input>
                <button onClick={this.handleAdd}>Add</button>
            </fieldset>
        );
    }
}
