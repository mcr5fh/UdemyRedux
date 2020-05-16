import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //Redux form calls preventDefaultForYou
    // event.preventDefault();
    //OnSubmit gets called with the values in the form
    console.log("Submitting Create Form " + JSON.stringify(formValues));
    this.props.createStream(formValues);
    //After a user creates a stream, we will send them back to the stream list
    //via Programatic (as opposed to intentional (user) navigation) via the action creator
  };

  render() {
    return (
      <div>
        <h3>StreamCreate</h3>
        <StreamForm onSubmitCallback={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null, //map state to props
  { createStream } //actionCreators
)(StreamCreate);
