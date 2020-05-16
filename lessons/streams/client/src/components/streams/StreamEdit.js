import React from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import { getStream, updateStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentWillMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    //Redux form calls preventDefaultForYou
    // event.preventDefault();
    //OnSubmit gets called with the values in the form
    console.log("Submitting Create Form " + JSON.stringify(formValues));
    const streamId = this.props.stream.id;
    this.props.updateStream(streamId, formValues);
    //After a user creates a stream, we will send them back to the stream list
    //via Programatic (as opposed to intentional (user) navigation) via the action creator
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log("Edit stream:");
    console.log(this.props.stream);

    return (
      <div>
        <h3>StreamEdit</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description
          }}
          onSubmitCallback={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const streamId = ownProps.match.params.id;
  const streamToEdit = state.streamsData[streamId];
  return { stream: streamToEdit };
};

export default connect(
  mapStateToProps, //map state to props
  { getStream, updateStream } //actionCreators
)(StreamEdit);
