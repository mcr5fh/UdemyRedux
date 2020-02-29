import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // Pre-caching
  //   componentDidMount() {
  //     console.log(this.props);
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    if (this.props.user == null) {
      return null; //<div className="header">User header: Loading</div>;
    }

    return <div className="header">User header: {this.props.user.name}</div>;
  }
}

//ownProps is a reference to the props in the Component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
