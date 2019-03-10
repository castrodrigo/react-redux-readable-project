import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentNew from "../../components/Comment/New";

const maptDispatchToProps = dispatch => ({
  submitComment: (postId, comment) => console.log(postId, comment)
});

const mergeProps = (propsFromState, { submitComment }, { postId }) => ({
  onSubmit: data => submitComment(postId, data)
});

export default withRouter(
  connect(
    null,
    maptDispatchToProps,
    mergeProps
  )(CommentNew)
);
