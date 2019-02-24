import React from "react";
import List from "./Post/List";

const Home = ({ postIds }) => <List title={"All Posts"} posts={postIds} />;

export default Home;
