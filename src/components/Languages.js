import React, { useState } from "react";
import { styleFieldset, removeStyleFieldset } from "../utils/utils";

export default function Language() {
    const [ languages, setLanguages ] = useState([]);

    function addToList(e){
        e.preventDefault();
        setLanguages(languages.concat(e.target.parentElement.children[1].value));
        e.target.parentElement.children[1].value = "";
    }

    function removeFromList(e){
        e.preventDefault();
        
        let updatedLanguages = [];

        for(let i = 0; i < languages.length; i++){
            if(languages[i] === e.target.parentElement.children[0].textContent)continue;

            updatedLanguages.push(languages[i])
        }
        setLanguages(updatedLanguages);
    }

    return (
        <fieldset onFocus={styleFieldset} onBlur={removeStyleFieldset}>
            <legend>Languages</legend>
            <input type="text" name="language" placeholder="Enter language" id="language-input"></input>
            <button onClick={addToList}>Add</button>
            <ul>
                { languages.map((language, index) => {
                    return (
                        <li key={`languageItem${index}`}>
                            <p>{ language }</p>
                            <button onClick={removeFromList}>Remove</button>
                        </li>
                    )  
                })}
            </ul>
        </fieldset>
    )
}