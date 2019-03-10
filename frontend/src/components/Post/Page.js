import React from "react";
import PropTypes from "prop-types";
import Post from "../../containers/Post/Post";
import CommentNew from "../../containers/Comment/New";
import CommentList from "../Comment/List";
import Layout from "../Layout";

const Page = ({ postId, commentIds }) => (
  <Layout
    content={
      <React.Fragment>
        <Post id={postId} />
        <CommentNew postId={postId} />
        <CommentList
          commentIds={commentIds}
          postId={postId}
          title="Comments of this post"
        />
      </React.Fragment>
    }
  />
);

Page.propTypes = {
  postId: PropTypes.string.isRequired,
  commentIds: PropTypes.array
};

export default Page;
