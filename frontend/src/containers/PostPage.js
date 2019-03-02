import React from "react";
import { connect } from "react-redux";
import * as api from "../api";
import { getComments } from "../actions/comments";
import PostPage from "../components/Post/Page";

class PostPageContainer extends React.Component {
  componentDidMount() {
    api
      .getComments(this.props.postId)
      .then(comments => this.props.dispatch(getComments(comments)))
      .catch(console.log);
  }

  render() {
    return (
      <PostPage postId={this.props.postId} comments={this.props.comments} />
    );
  }
}

const mapStateToProps = ({ comments }, props) => {
  const { id } = props.match.params;
  return {
    postId: id,
    commentIds: Object.keys(comments).sort(
      (a, b) => comments[b].timestamp - comments[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(PostPageContainer);
