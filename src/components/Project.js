import React from "react";


export default function Project(props) {
    return (
        <div>
            <h1>{props.projectTitle}</h1>
            <img src={props.projectImageUrl} alt="not found" />
            <a href={props.appLink}>
                Check it out!
            </a>
            <a href={props.projectSourceCode}>
                View Source
            </a>
        </div>
    );
}
