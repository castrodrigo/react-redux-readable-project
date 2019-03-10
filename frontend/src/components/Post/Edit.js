import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import Form from "./Form";

const disabledFields = ["author", "category"];

const Edit = ({ onSubmit, categories, post }) => (
  <Layout
    content={
      <React.Fragment>
        <h2>Edit post</h2>
        <Form
          onSubmit={onSubmit}
          categories={categories}
          post={post}
          disabledFields={disabledFields}
        />
      </React.Fragment>
    }
  />
);

Edit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired
};

export default Edit;
