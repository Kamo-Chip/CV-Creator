import React, { useState } from "react";
import { styleFieldset, removeStyleFieldset } from "/home/kamo/cv-creator/src/utils/utils.js";

export default function Experience(){
    const [ experience, setExperience ] = 
    useState({
        position: "",
        company: "",
        yearJobStarted: "",
        yearJobEnded: "",
        jobDescription: "",
    });

    function handleChange(e){
        const inputSource = e.target.name;
        setExperience({...experience, [inputSource]: e.target.value});
    }

    return (
        <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
            <legend>Experience</legend>
            <input type="text" placeholder="Position" name="position" onChange={handleChange} value={experience.position}></input>
            <input type="text" placeholder="Company" name="company" onChange={handleChange} value={experience.company}></input>
            <input type="text" placeholder="From" name="yearJobStarted" onChange={handleChange} value={experience.yearJobStarted}></input>
            <input type="text" placeholder="To" name="yearJobEnded" onChange={handleChange} value={experience.yearJobEnded}></input>
            <textarea placeholder="Describe your role" name="jobDescription" onChange={handleChange} value={experience.jobDescription}></textarea>
        </fieldset> 
    )
}