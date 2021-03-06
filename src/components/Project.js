import React from "react";
import { Button } from 'primereact/button';

export default class Project extends React.Component {
    
    renderAppButton() {
        if (this.props.appLink) {
            return (
            <a href={this.props.appLink}>
                <Button label="Check it out!" className="p-button-primary" />
            </a>
            );
        } else {
            return
        }
    }

    render() {
        return (
            <div className="center">
                <h1 className="project-title">{this.props.projectTitle}</h1>
                <img
                    className="imagecenter"
                    src={this.props.projectImageUrl}
                    alt="not found"
                />
                <br></br>
                {this.renderAppButton()}
                &nbsp;&nbsp;
                <a href={this.props.projectSourceCode}>
                    <Button label="View Source" className="p-button-warning" />
                </a>
            </div>
        );
    }
}


