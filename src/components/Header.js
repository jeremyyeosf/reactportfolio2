import React from 'react'
import headerImage from '../assets/space-header.png'


export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="p-grid">
                    <div className="p-col"><img src={headerImage} alt="not found" className="headerImage"></img></div>
                    <div className="p-col"></div>
                    <div className="p-col"></div>
            </div>
        )
    }
}

