import React from "react";
import { Button } from 'primereact/button';

export default function Project(props) {
    return (
        <div className="center">
            <h1>{props.projectTitle}</h1>
            <img className="imagecenter" src={props.projectImageUrl} alt="not found" />
            <br></br>
            <a href={props.appLink}>
                <Button label="Check it out!" className="p-button-primary"/>
            </a>
            &nbsp;&nbsp;
            <a href={props.projectSourceCode}>
                <Button label="View Source" className="p-button-warning"/>
            </a>
        </div>
    );
}


