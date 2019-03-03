import React from "react";
import Post from "../../containers/Post/Post";
import CommentList from "../Comment/List";
import Layout from "../Layout";

const Page = ({ postId, commentIds }) => (
  <Layout
    content={
      <React.Fragment>
        <Post id={postId} />
        <CommentList commentIds={commentIds} postId={postId} />
      </React.Fragment>
    }
  />
);

export default Page;
