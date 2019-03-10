import { connect } from "react-redux";
import { handleVotePost, UPVOTE, DOWNVOTE } from "../../actions/posts";
import Post from "../../components/Post";

const mapStateToProps = ({ posts }, { id }) => ({
  post: posts[id] || null
});

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(handleVotePost(id, UPVOTE)),
  voteDown: id => dispatch(handleVotePost(id, DOWNVOTE))
});

const mergeProps = ({ post }, { voteUp, voteDown }, { id }) => {
  return {
    post,
    voteUp: () => voteUp(id),
    voteDown: () => voteDown(id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Post);
