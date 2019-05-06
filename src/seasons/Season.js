import './Season.css'

import React, { Component } from 'react';

const seasonConfig = {
    summer: {
        text: "summer!",
        iconName: "sun"
    }
}

class Season extends Component {

    getSeason(lat, month){
        return lat > 0 ? "winter" : "summer";
    }

    render() {
        const season = this.getSeason(1, new Date().getMonth);
        const iconString = season === "winter" ? 'snowflake' : 'sun';

        console.log("props ", this.props);
        //alwasy want the root div of class to match class name
        return (
            <div className={"season " + season }>
                <i className={"icon-left massive icon " + iconString}/>
                <h1>Long: {this.props.long ? this.props.long : "Locating..."}</h1>
                <br/>
                <h1>Latititude: {this.props.lat ? this.props.lat : "Locating..."}</h1>
                <h2>{this.props.errorMessage && "Error obtaining location " + this.props.errorMessage}</h2>
                <i className={"icon-right massive icon " + iconString}/>
            </div>
        );
    }

}

export default Season;