import React, { Component } from 'react';
import {connect} from 'react-redux';

class Band extends Component {

    render() {
        return(
            <div>
                <li>
                    <button onClick = {() => this.props.deleteBand(this.props.band.id)}></button>
                    {this.props.band.text}
                </li>
            </div>
        );
    }
};


export default Band;
