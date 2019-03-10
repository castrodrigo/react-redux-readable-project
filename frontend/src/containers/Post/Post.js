import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  handleVotePost,
  handleRemovePost,
  UPVOTE,
  DOWNVOTE
} from "../../actions/posts";
import Post from "../../components/Post";

const mapStateToProps = ({ posts }, { id }) => ({
  post: posts[id] || null
});

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(handleVotePost(id, UPVOTE)),
  voteDown: id => dispatch(handleVotePost(id, DOWNVOTE)),
  handleRemovePost: (history, id) =>
    dispatch(handleRemovePost(id)).then(() => history.push(`/`))
});

const mergeProps = (
  { post },
  { voteUp, voteDown, handleRemovePost },
  { id, history }
) => {
  return {
    post,
    voteUp: () => voteUp(id),
    voteDown: () => voteDown(id),
    removePost: () => handleRemovePost(history, id)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(Post)
);
