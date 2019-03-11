import { connect } from "react-redux";
import {
  handleRemoveComment,
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
  handleRemoveComment: (id, postId) =>
    dispatch(handleRemoveComment(id, postId)).then(() =>
      dispatch(handleGetPost(postId))
    )
});

const mergeProps = (
  { comment },
  { voteUp, voteDown, handleRemoveComment },
  { postId, id }
) => {
  return {
    comment,
    voteUp: () => voteUp(id),
    voteDown: () => voteDown(id),
    removeComment: () => handleRemoveComment(id, postId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Comment);
