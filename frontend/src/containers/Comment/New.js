import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddComment } from "../../actions/comments";
import { handleGetPost } from "../../actions/posts";
import CommentNew from "../../components/Comment/New";

const maptDispatchToProps = dispatch => ({
  submitComment: (comment, postId) =>
    dispatch(handleAddComment(comment, postId)).then(
      dispatch(handleGetPost(postId))
    )
});

const mergeProps = (propsFromState, { submitComment }, { postId }) => ({
  onSubmit: data => submitComment(data, postId)
});

export default withRouter(
  connect(
    null,
    maptDispatchToProps,
    mergeProps
  )(CommentNew)
);
