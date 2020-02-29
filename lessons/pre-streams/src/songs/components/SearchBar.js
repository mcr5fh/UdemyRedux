import React from "react";

import { connect } from "react-redux";
import { filterSongs, setQueryString } from "../actions";

class SearchBar extends React.Component {
  onTextChange = event => {
    console.log(event.target.value);
    // this.props.setQueryString(event.target.value);
    this.props.filterSongs(event.target.value);
  };

  //Won't need this?
  onFormSubmit = event => {
    event.preventDefault();
    //will be passed in from parent
    console.log("Form submitted ", this.props.searchTerm);
    // this.props.setSearchString(this.props.searchTerm);
    // this.props.filterSongs(this.props.searchTerm);
    // this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Song Search</label>
            <input
              type="text"
              text={this.props.searchTerm}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state List: ", state);
  return {
    searchTerm: state.setQueryString
  };
};

export default connect(
  mapStateToProps,
  { filterSongs, setQueryString }
)(SearchBar);
