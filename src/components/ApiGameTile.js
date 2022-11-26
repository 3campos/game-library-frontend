import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ApiGameTile extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <p>{this.props.gameTitle}</p>
                            <p>{this.props.genre}</p>
                            <p>{this.props.rating}</p>
                            <p>{<img src = {this.props.image} />}</p>
                        </div>
                    </div>
                    <Link to = {`/showapi?id=${this.props.id}`}> View More
                    </Link>
                </div>
            </div>
        )
    }
}

export default ApiGameTile