import React from "react";
import Post from "../../containers/Post";
import CommentList from "../Comment/List";

const Page = ({ postId, comments }) => (
  <React.Fragment>
    <Post id={postId} />
    <CommentList commments={comments} />
  </React.Fragment>
);
export default Page;
