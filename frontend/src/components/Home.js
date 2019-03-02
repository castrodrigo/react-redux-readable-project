import React from "react";
import List from "./Post/List";
import Categories from "../containers/Categories";
import Layout from "./Layout";

const Home = ({ postIds }) => (
  <Layout
    content={<List title={"All Posts"} postIds={postIds} />}
    sidebar={<Categories />}
  />
);

export default Home;
