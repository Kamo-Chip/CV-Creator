import CV from "./CV";
import "../styles/form-styles.css";
import React, { useState } from "react";

export default function Form(){
    const [ userDetails, setUserDetails ] = 
    useState({
            firstName: "",
            lastName: "",
            applicationTitle: "", 
            phoneNumber: "", 
            email: "", 
            githubProfile:"", 
            description: "",
            
            experiences:
            [
                {
                    position: "",
                    company: "",
                    yearJobStarted: "",
                    yearJobEnded: "",
                    jobDescription: "",
                }
            ],

            educationHistory:
            [
                {
                    institutionName: "",
                    degree: "",
                    yearCourseStarted: "",
                    yearCourseEnded: "",
                    courseDescription: "",
                }
            ],
            
            skills: [],

            languages: [],
    });


    function handleChangeInput(e){
        setUserDetails({...userDetails, [e.target.name]: e.target.value});
    }

    function handleChangeExperiencesAndEducation(e){
        switch(e.target.className){
            case "experiences":
                setDetailsFor(e);
                break;
            case "educationHistory":
                setDetailsFor(e);
                break;
            default:
        }
    }

    function setDetailsFor(item){
        let arr = [];

        arr = userDetails.experiences;
        arr[item.target.id][item.target.name] = item.target.value;
        setUserDetails({...userDetails, [item.target.name]: arr});
    }

    function deleteFromList(e){
        e.preventDefault();
        let source = e.target.parentElement.parentElement.parentElement.children[0].name;

        const list = getList(source);
    
        let updatedArr = [];
    
        for(let i = 0; i < list.length; i++){
            if(list[i] === e.target.parentElement.children[0].textContent)continue;
            updatedArr.push(list[i]);
        }
        setUserDetails({ ...userDetails, [source]: updatedArr});
    }

    function getList(source){
        return source === "skills" ? userDetails.skills : userDetails.languages;
    }

    function addToList(e){
        e.preventDefault();
        let source = e.target.parentElement.children[0];
        setUserDetails({...userDetails, [source.name]: userDetails[source.name].concat(source.value)});
        source.value = "";
    }

    function addSection(e) {
        e.preventDefault();

        switch(e.target.name) {
            case "addExperience":
                setUserDetails({ ...userDetails, experiences: userDetails.experiences
                    .concat({
                        position: "",
                        company: "",
                        yearJobStarted: "",
                        yearJobEnded: "",
                        jobDescription: "",
                    })
                });
                break;

            case "addEducation":
                setUserDetails({...userDetails, educationHistory: userDetails.educationHistory
                    .concat({
                        institutionName: "",
                        degree: "",
                        yearCourseStarted: "",
                        yearCourseEnded: "",
                        courseDescription: "",
                    })})
                break;

            default:     
        }
    }

    function deleteSection(e){
        e.preventDefault();
        let array = [];

        switch(e.target.name){
            case "deleteExperience":
                for(let i = 0; i < userDetails.experiences.length; i++){
                    if(i == e.target.id)continue;
        
                    array.push(userDetails.experiences[i]);
                }
                setUserDetails({ ...userDetails, experiences: array});
                break;
            case "deleteEducation":
                for(let i = 0; i < userDetails.educationHistory.length; i++){
                    if(i == e.target.id)continue;
        
                    array.push(userDetails.educationHistory[i]);
                }
                setUserDetails({ ...userDetails, educationHistory: array});
                break;
            default:
        }
    }

    function displayExperiences(){
        return (
            <div>
                <ul className="form-list">
                    {userDetails.experiences.map((experience, index) => {
                        return (
                            <div key={`formExperiences${index}`}>
                                <li >{experienceUI(handleChangeExperiencesAndEducation, [index])}</li>
                                {index !== 0 && <button className="remove-button" name = "deleteExperience" onClick = {deleteSection} id={index}>-</button>}    
                            </div>
                        )
                    })}
                </ul>
                <button id="list-button" className="add-button" name="addExperience" onClick={addSection}>+</button>     
            </div>
        )
    }

    function displayEducationHistory(){
        return (
            <div>
                <ul className="form-list">
                    {userDetails.educationHistory.map((education, index) => {
                        return (
                            <div key={`formEducationHistory${index}`}>
                                <li>{educationUI(handleChangeExperiencesAndEducation, [index])}</li>
                                {index !== 0 && <button className="remove-button" name="deleteEducation" onClick={deleteSection} id={index}>-</button>}
                            </div>
                        )
                    })}
                </ul>
                <button id="list-button" className="add-button" name="addEducation" onClick={addSection}>+</button>           
            </div>
        )
    }

    return (
        <div id="app-container">
            <div id="form-container">
                <form id="cv-form">
                    <h1>Personal Info</h1>
                    {personalInfoUI(handleChangeInput)}
                    <h1>Experience</h1>
                    {displayExperiences()}
                    <h1>Education</h1>
                    {displayEducationHistory()}
                    <h1>Languages</h1>
                    {languagesUI(userDetails, addToList, deleteFromList)}
                    <h1>Skills</h1>
                    {skillsUI(userDetails, addToList, deleteFromList)}
                </form>        
            </div>
        <CV cvDetails={userDetails}/>
    </div>       
    )
}

function personalInfoUI(handleChangeInput){
    return(
        <fieldset>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChangeInput}></input>
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChangeInput}></input>
            <input type="text" placeholder="Applying for" name="applicationTitle" onChange={handleChangeInput}></input>
            <input type="tel" placeholder="Phone number" name="phoneNumber" onChange={handleChangeInput}></input>
            <input type="email" placeholder="Email" name="email"onChange={handleChangeInput}></input>
            <input type="url" placeholder="GitHub Profile" name="githubProfile" onChange={handleChangeInput}></input>
            <textarea placeholder="Tell your story. Try to keep it short!" name="description" onChange={handleChangeInput}></textarea>
        </fieldset>
    );
}

function experienceUI(handler, index){
    return(
        <fieldset>
            <input className="experiences" id={index} type="text" placeholder="Position" name="position" onChange={handler}></input>
            <input className="experiences" id={index} type="text" placeholder="Company" name="company" onChange={handler}></input>
            <input className="experiences" id={index} type="text" placeholder="From" name="yearJobStarted" onChange={handler}></input>
            <input className="experiences" id={index} type="text" placeholder="To" name="yearJobEnded" onChange={handler}></input>
            <textarea className="experiences" id={index} placeholder="Describe your role" name="jobDescription" onChange={handler}></textarea>
        </fieldset> 
    );
}

function educationUI(handler, index){
    return(
        <fieldset>
            <input id={index} type="text" placeholder="Degree" name="degree" onChange={handler}></input>
            <input id={index} type="text" placeholder="Institution's name" name="institutionName" onChange={handler}></input>
            <input id={index} type="text" placeholder="Year started" name="yearCourseStarted" onChange={handler}></input>
            <input id={index} type="text" placeholder="Year completed" name="yearCourseEnded" onChange={handler}></input>
            <textarea id={index} placeholder="Describe what you learned" name="courseDescription" onChange={handler}></textarea>
        </fieldset>
    );
}

function skillsUI(userDetails, addToList, removeFromList){
    return (
        <fieldset>
            <input type="text" name="skills" placeholder="Enter skill"></input>
            <button name="addSkills" onClick={addToList}>Enter</button>
            <ul id="skills-list">
                {userDetails.skills.map((skill, index) => {
                    return (
                        <li id="language-and-skill-list" key={`formSkills${index}` }>
                        <p>{ skill }</p>
                        <button name="removeSkills" className="remove-button" onClick={removeFromList}>-</button>
                    </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}

function languagesUI(userDetails, addToList, removeFromList){
    return(
        <fieldset>
            <input type="text" name="languages" placeholder="Enter language" id="language-input"></input>
            <button name="addLanguages" onClick={addToList}>Enter</button>
            <ul>
                { userDetails.languages.map((language, index) => {
                    return (
                        <li id="language-and-skill-list" key={`formLanguages${index}`}>
                            <p>{ language }</p>
                            <button name="removeLanguages" className="remove-button" onClick={removeFromList}>-</button>
                        </li>
                    )  
                })}
            </ul>
        </fieldset>
    );
}

export {Form}