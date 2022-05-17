import React, { useState } from "react";

export default function Skills(){
    const [ skills, setSkills ] = useState([]);

    function addToList(e){
        e.preventDefault();
        setSkills(skills.concat(e.target.parentElement.children[1].value));
    }

    function removeFromList(e){
        e.preventDefault();

        let updatedSkills = [];

        for(let i = 0; i < skills.length; i++){
            if(skills[i] === e.target.parentElement.children[0].textContent)continue;
            updatedSkills[i] = skills[i];
        }

        setSkills(updatedSkills);
    }

    console.log(skills);

    return (
        <fieldset>
            <legend>Skills</legend>
            <input type="text" name="skills" placeholder="Enter skill"></input>
            <button onClick={addToList}>Add</button>
            <ul id="skills-list">
                {skills.map((skill, index) => {
                    return (
                        <li key={ `skillItem${index}` }>
                        <p>{ skill }</p>
                        <button onClick={removeFromList}>Remove</button>
                    </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}