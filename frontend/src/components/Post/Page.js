import React from "react";
import Post from "../../containers/Post/Post";
import CommentList from "../Comment/List";

const Page = ({ postId, commentIds }) => (
  <React.Fragment>
    <Post id={postId} />
    <CommentList commentIds={commentIds} postId={postId} />
  </React.Fragment>
);

export default Page;
