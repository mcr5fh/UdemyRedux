
import React from 'react';

const Loader = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui text loader">{props.loadingText}</div>
            </div>
    )
};

export default Loader;