import React from "react";
import PropTypes from "prop-types";
import Post from "../../containers/Post/Post";
import CommentList from "../Comment/List";
import Layout from "../Layout";

const Page = ({ postId, commentIds }) => (
  <Layout
    content={
      <React.Fragment>
        {<Post id={postId} /> && (
          <CommentList commentIds={commentIds} postId={postId} />
        )}
      </React.Fragment>
    }
  />
);

Page.propTypes = {
  postId: PropTypes.string.isRequired,
  commentIds: PropTypes.array
};

export default Page;
