import React from "react";
import { connect } from "react-redux";
import { handleGetComments } from "../../actions/comments";
import PostPage from "../../components/Post/Page";

class PageContainer extends React.Component {
  componentDidMount() {
    this.props.loadComments(this.props.postId);
  }

  render() {
    return (
      <PostPage
        post={this.props.post}
        postId={this.props.postId}
        commentIds={this.props.commentIds}
      />
    );
  }
}

const filterComments = (comments, postId) => {
  if (comments[postId]) {
    return Object.keys(comments[postId]).sort(
      (a, b) =>
        comments[postId][a] &&
        comments[postId][b] &&
        comments[postId][b].timestamp - comments[postId][a].timestamp
    );
  }
  return [];
};

const mapStateToProps = ({ posts, comments }, props) => {
  const { id } = props.match.params;
  return {
    post: posts[id] || null,
    postId: id,
    commentIds: filterComments(comments, id)
  };
};

const mpatDispatchToProps = dispatch => ({
  loadComments: postId => dispatch(handleGetComments(postId))
});

export default connect(
  mapStateToProps,
  mpatDispatchToProps
)(PageContainer);
