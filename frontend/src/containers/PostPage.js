import React from "react";
import { connect } from "react-redux";
import * as api from "../api";
import { getComments } from "../actions/comments";
import PostPage from "../components/Post/Page";

class PostPageContainer extends React.Component {
  componentDidMount() {
    api
      .getComments(this.props.postId)
      .then(comments =>
        this.props.dispatch(getComments(comments, this.props.postId))
      );
  }

  render() {
    return (
      <PostPage postId={this.props.postId} commentIds={this.props.commentIds} />
    );
  }
}

const filterComments = (comments, postId) => {
  if (comments[postId]) {
    return Object.keys(comments[postId]).sort(
      (a, b) => comments[postId][b].timestamp - comments[postId][a].timestamp
    );
  }
  return [];
};

const mapStateToProps = ({ comments }, props) => {
  const { id } = props.match.params;
  return {
    postId: id,
    commentIds: filterComments(comments, id)
  };
};

export default connect(mapStateToProps)(PostPageContainer);
