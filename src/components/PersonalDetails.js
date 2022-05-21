import React, { useState } from "react";
import { styleFieldset, removeStyleFieldset } from "/home/kamo/cv-creator/src/utils/utils.js";

export default function PersonalDetails(props) {
    // const [ personalDetails, setPersonalDetails ] = 
    // useState(
    //     {firstName: "",
    //      lastName: "", 
    //      applicationTitle: "", 
    //      phoneNumber: "", 
    //      email: "", 
    //      githubProfile:"", 
    //      description: ""});
         
    // function handleChange(e){
    //     const inputSource = e.target.name;
    //     setPersonalDetails({ ...personalDetails, [inputSource]: e.target.value });
    //     //console.log(personalDetails)
    // }

    function handleChange(e) {
        props.personalDetails[e.target.name] = e.target.value;
    }
    
    return (
        <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset} id="personalInfo">
            <legend>Personal Info</legend>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange}></input>
            {/* <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={personalDetails.lastName}></input>
            <input type="text" placeholder="Applying for" name="applicationTitle" onChange={handleChange} value={personalDetails.applicationTitle}></input>
            <input type="tel" placeholder="Phone number" name="phoneNumber" onChange={handleChange} value={personalDetails.phoneNumber}></input>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={personalDetails.email}></input>
            <input type="url" placeholder="GitHub Profile" name="githubProfile" onChange={handleChange} value={personalDetails.githubProfile}></input>
            <textarea placeholder="Tell your story. Try to keep it short!" name="description" onChange={handleChange} value={personalDetails.description}></textarea> */}
        </fieldset>
    )
}