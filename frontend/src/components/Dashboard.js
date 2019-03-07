import React from "react";
import PropTypes from "prop-types";
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

Dashboard.propTypes = {
  postIds: PropTypes.array.isRequired,
  category: PropTypes.any
};

export default Dashboard;
