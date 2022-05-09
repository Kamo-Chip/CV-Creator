import React from "react";
import "/home/kamo/cv-creator/src/styles/cv-styles.css";

export default class CV extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="cv">
                <div id="main-container">
                    <div id="description"></div>
                    <div id="details-container">
                        <div id="experience">
                            <h1>Experience</h1>
                            <div id="details">
                                <div id="date"></div>
                                <div id="explanation"></div>
                            </div>
                        </div>
                        <div id="experience">
                            <h1>Education</h1>
                            <div id="details">
                                <div id="date"></div>
                                <div id="explanation"></div>
                            </div>
                        </div>
                        <div id="experience">
                            <h1>Skills</h1>
                            <div id="details">
                                <div id="date"></div>
                                <div id="explanation"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar"></div>
            </div>
        )
    }
}