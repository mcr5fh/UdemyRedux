import React, { Component } from 'react';

import Season from './Season';
import Spinner from './Spinner';

class SeasonsDisplay extends Component {

    state = {
        long: null,
        lat: null,
        errorMessage: '',
        isLoading: true
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    long: position.coords.longitude,
                    lat: position.coords.latitude,
                    isLoading: false
                });
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            } 
        );
    }

    render() {

        console.log("state ", this.state);
        return (
            <div>
                {this.state.isLoading ? <Spinner text="Obtaining Geolocation"/> :
                <div>
                    <Season long={this.state.long} lat={this.state.lat}/>
                    <h2>{this.state.errorMessage && "Error obtaining location " + this.state.errorMessage}</h2>
                    </div>
                }
            </div>
        );
    }

}

export default SeasonsDisplay;