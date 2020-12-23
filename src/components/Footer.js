import React from 'react'

export default function Footer(props) {
    return (
        <div className="p-grid p-align-center footer">
            <div className="p-col-2 p-offset-3 footer-text centertext">
                <div className="p-text-bold footer-heading">Contact</div>
                <hr></hr>
                <div className="p-text-normal">+65 90015430</div>
                <div className="p-text-normal">Jeremyyeo.sf@gmail.com</div>
            </div>
            <div className="p-col-2 p-offset-2 footer-text centertext">
                <div className="p-text-bold footer-heading">Social</div>
                <hr></hr>
                <a className="p-text-normal" href="https://www.linkedin.com/in/jeremy-yeo-8a7969145/">LinkedIn</a>
                <br></br>
                <a className="p-text-normal" href="https://github.com/jeremyyeosf">Github</a>
            </div>
        </div>
    );
}

