import { connect } from "react-redux";
import { handleVoteComment, UPVOTE, DOWNVOTE } from "../../actions/comments";
import Comment from "../../components/Comment";

const mapStateToProps = ({ comments }, { postId, id }) => ({
  comment: comments[postId][id] || null
});

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(handleVoteComment(id, UPVOTE)),
  voteDown: id => dispatch(handleVoteComment(id, DOWNVOTE))
});

const mergeProps = ({ comment }, { voteUp, voteDown }, { id }) => {
  return {
    comment,
    voteUp: () => voteUp(id),
    voteDown: () => voteDown(id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Comment);
