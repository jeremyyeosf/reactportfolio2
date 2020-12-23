import React from 'react'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="p-grid p-align-center header">
                <div className="p-col-2 p-offset-1 footer-text centertext">
                    <div className="p-text-bold header-heading">Jeremy Yeo</div>
                </div>
            </div>
        );
    }
}

