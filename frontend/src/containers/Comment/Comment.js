import { connect } from "react-redux";
import {
  handleRemoveComment,
  handleUpdateComment,
  handleVoteComment,
  UPVOTE,
  DOWNVOTE
} from "../../actions/comments";
import { handleGetPost } from "../../actions/posts";
import Comment from "../../components/Comment";

const mapStateToProps = ({ comments }, { postId, id }) => ({
  comment: comments[postId][id] || null
});

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(handleVoteComment(id, UPVOTE)),
  voteDown: id => dispatch(handleVoteComment(id, DOWNVOTE)),
  handleUpdateComment: (id, data) => dispatch(handleUpdateComment(id, data)),
  handleRemoveComment: (id, postId) =>
    dispatch(handleRemoveComment(id, postId)).then(() =>
      dispatch(handleGetPost(postId))
    )
});

const mergeProps = (
  { comment },
  { voteUp, voteDown, handleRemoveComment, handleUpdateComment },
  { postId, id }
) => {
  return {
    comment,
    voteUp: () => voteUp(id),
    voteDown: () => voteDown(id),
    updateComment: data => handleUpdateComment(id, data),
    removeComment: () => handleRemoveComment(id, postId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Comment);
