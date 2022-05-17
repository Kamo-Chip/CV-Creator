import React, { useState } from "react";
import { styleFieldset, removeStyleFieldset } from "../utils/utils";

export default function Education(){
    const [ education, setEducation ] = 
    useState({
        degree: "",
        institutionName: "",
        yearCourseStarted: "",
        yearCourseEnded: "",
        courseDescription: "",
    });

    function handleChange(e) {
        const inputSource = e.target.name;
        setEducation({ ...education, [inputSource]: e.target.value});
    }

    return (
        <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
            <legend>Education</legend>
            <input type="text" placeholder="Degree" name="degree" onChange={handleChange} value={education.degree}></input>
            <input type="text" placeholder="Institution's name" name="institutionName" onChange={handleChange} value={education.institutionName}></input>
            <input type="text" placeholder="Year started" name="yearCourseStarted" onChange={handleChange} value={education.yearCourseStarted}></input>
            <input type="text" placeholder="Year completed" name="yearCourseEnded" onChange={handleChange} value={education.yearCourseEnded}></input>
            <textarea placeholder="Describe what you learned" name="courseDescription" onChange={handleChange} value={education.courseDescription}></textarea>
        </fieldset>
    )
}