import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddPost } from "../../actions/posts";
import PostNew from "../../components/Post/New";

class NewContainer extends React.Component {
  submitPost = post => {
    this.props
      .dispatch(handleAddPost(post))
      .then(() => this.props.history.push(`/${post.category}/`));
  };

  render() {
    return (
      <PostNew onSubmit={this.submitPost} categories={this.props.categories} />
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: Object.keys(categories).map(key => ({
    value: key,
    label: categories[key].name
  }))
});

export default connect(mapStateToProps)(withRouter(NewContainer));
