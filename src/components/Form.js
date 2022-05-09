import React from "react";
import CV from "./CV";
import "/home/kamo/cv-creator/src/styles/form-styles.css";

export default class Form extends React.Component{
    constructor(){
        super();
        this.addDetails = this.addDetails.bind(this);
        this.state = {
                        personalInformation: {
                            firstName: "",
                            lastName: "",
                            phoneNumber: "",
                            email: "",
                            githubProfile: "",
                            description: "",
                        },
                       
                        experiences: [
                            {
                                position: "",
                                company: "",
                                yearStarted: "",
                                yearEnded: "",
                            },
                        ],
                        
                        educationHistory: [
                            {
                                institutionName: "",
                                degree: "",
                                yearStarted: "",
                                yearEnded: ""
                            },
                        ],
                        
                        skills: [
                            "",
                        ]
                    }
    }

    addDetails(e){
        e.preventDefault();
        console.log(e.target.parentElement.children[0].textContent)
        switch(e.target.parentElement.children[0].textContent){
            case "Education":
                //console.log("fdfas")
                this.setState({
                    educationHistory: this.state.educationHistory.concat(
                        {
                            institutionName: "",
                            degree: "",
                            yearStarted: "",
                            yearEnded: ""
                    })
                });
                break;

            case "Experience":
                //console.log("hsdfa")
                this.setState({
                    experiences: this.state.experiences.concat(
                        {
                            position: "",
                            company: "",
                            yearStarted: "",
                            yearEnded: "",
                    })
                });
                break;

            case "Skills":
                this.setState({
                    skills: this.state.skills.concat("")
                })
                break;
            default:
        }
       //console.log(this.state)
    }
    
    render(){
        return (
            <div id="app-container">
                <div id="form-container">
                    <form id="cv-form">
                        <fieldset>
                            <legend>Personal Information</legend>
                            <input type="text" placeholder="First Name" id="firstName"></input>
                            <input type="text" placeholder="Last Name" id="lastName"></input>
                            <input type="text" placeholder="Phone number" id="phoneNumber"></input>
                            <input type="text" placeholder="Email" id="email"></input>
                            <input type="text" placeholder="GitHub Profile" id="gitHubProfile"></input>
                            <textarea placeholder="Tell your story. Try to keep it short!" id="description"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Experience</legend>
                                {this.state.experiences.forEach((element)=>{
                                        <div>
                                            
                                        </div>
                                })}
                            <input type="text" placeholder="Position" id="position"></input>
                            <input type="text" placeholder="Company" id="company"></input>
                            <input type="text" placeholder="Year started" id="yearStarted"></input>
                            <input type="text" placeholder="Year ended" id="yearEnded"></input>
                            <button className="btnAdd" onClick={this.addDetails}>Add</button>
                        </fieldset>
                        <fieldset>
                            <legend>Education</legend>
                            <input type="text" placeholder="Institution's name" id="institutionName"></input>
                            <input type="text" placeholder="Degree" id="degree"></input>
                            <input type="text" placeholder="Year started" id="yearStarted"></input>
                            <input type="text" placeholder="Year ended" id="yearEnded"></input>
                            <button className="btnAdd" onClick={this.addDetails}>Add</button>
                        </fieldset>
                        <fieldset>
                            <legend>Skills</legend>
                            <input type="text" placeholder="Skill" className="skills"></input>
                            <button className="btnAdd" onClick={this.addDetails}>Add</button>
                        </fieldset>
                    </form>
                </div>
                <CV/>
            </div>
            
        );
    }
}

// function addExperience(){
//     return(
//         <div id="sectionContainer">
//             <input type="text" placeholder="Position" id="position"></input>
//             <input type="text" placeholder="Company" id="company"></input>
//             <input type="text" placeholder="Year started" id="yearStarted"></input>
//             <input type="text" placeholder="Year ended" id="yearEnded"></input>
//             <button className="btnAdd" onClick={this.addDetails}>Add</button>
//         </div>  
//     ) 
// }