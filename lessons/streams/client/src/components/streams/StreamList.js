import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

// We want this to be a class because we want to call the reducer in
// componentDidMount
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  //He called it renderAdmin()
  renderStreamOwnerButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderStreamOwnerButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {/* Stream title should be clickable; owner should have options to edit or delete their own streams */}
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  //but only want this if user is signed in
  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

//this state is the redux state, and we are sending whatevr we want to the props
const mapStateToProps = state => {
  //to remove big dependency on lodash, change it to an array
  return {
    streams: Object.values(state.streamsData),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
