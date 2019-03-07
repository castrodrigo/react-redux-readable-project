import React from "react";
import { connect } from "react-redux";
import { handleAddPost } from "../../actions/posts";
import PostNew from "../../components/Post/New";

class NewContainer extends React.Component {
  submitPost = post => {
    this.props.dispatch(handleAddPost(post));
  };

  render() {
    return <PostNew onSubmit={this.submitPost} />;
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps)(NewContainer);
