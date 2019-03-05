import React from "react";
import List from "./Post/List";
import Categories from "../containers/Categories";
import Layout from "./Layout";

const Dashboard = ({ postIds, category }) => (
  <Layout
    content={
      <List
        title={category ? `All Posts from ${category}` : "All Posts"}
        postIds={postIds}
      />
    }
    sidebar={<Categories />}
  />
);

export default Dashboard;
