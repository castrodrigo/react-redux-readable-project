import React from "react";
import PropTypes from "prop-types";
import List from "./Post/List";
import Categories from "../containers/Categories";
import OrderBy from "./OrderBy";
import Layout from "./Layout";

const Dashboard = ({ postIds, category, orderBy, setOrder }) => (
  <Layout
    content={
      <React.Fragment>
        <OrderBy orderBy={orderBy} onSelect={setOrder} />
        <List
          title={category ? `All Posts from "${category}"` : "All Posts"}
          postIds={postIds}
        />
      </React.Fragment>
    }
    sidebar={<Categories />}
  />
);

Dashboard.propTypes = {
  postIds: PropTypes.array.isRequired,
  category: PropTypes.any,
  orderBy: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired
};

Dashboard.defaultProps = {
  orderBy: "timestamp"
};

export default Dashboard;
