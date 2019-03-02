import React from "react";
import List from "./Post/List";
import Categories from "../containers/Categories";

const Home = ({ postIds }) => (
  <React.Fragment>
    <List title={"All Posts"} postIds={postIds} />
    <Categories />
  </React.Fragment>
);
export default Home;
