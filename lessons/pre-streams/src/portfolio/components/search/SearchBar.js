import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onTextChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    //will be passed in from parent
    console.log("Form submitted ", event);
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Password Entry</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
