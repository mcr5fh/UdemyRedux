import React from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list"> {this.renderList()} </div>;
  }
}

const mapStateTorops = state => {
  return { posts: state.posts };
};

//the first parameter must always be mapStateTorops
export default connect(
  mapStateTorops,
  { fetchPostsAndUsers }
)(PostList);
