import React from "react";
import PostNew from "../../components/Post/New";

class NewContainer extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return <PostNew onSubmit={this.handleSubmit} />;
  }
}

export default NewContainer;
