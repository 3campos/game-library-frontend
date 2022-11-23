import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomGameTile extends Component {
    render(){
        return(
        <div>
            <div>
                <div>
                    <div>
                        <p>{this.props.name}</p>
                    </div>
                </div>
                <p>{this.props.description}</p>
                <Link to={`/showcustom?id=${this.props.id}`}>
                    <p>
                        View More
                    </p>
                </Link>
            </div>
        </div>
        )
    }
}

export default CustomGameTile