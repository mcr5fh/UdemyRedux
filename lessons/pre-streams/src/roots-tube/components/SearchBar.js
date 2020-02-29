import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ""
    };

    onTextChange = event => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();
        //will be passed in from parent
        console.log("Form submitted ", event);
        this.props.onFormSubmit(this.state.term);

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            text={this.state.term}
                            onChange={this.onTextChange}
                        />
                    </div>
                </form>
            </div>
        )
    };

}

export default SearchBar;