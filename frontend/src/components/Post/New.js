import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import Form from "./Form";

const New = ({ onSubmit, categories }) => (
  <Layout
    content={
      <React.Fragment>
        <h2>Create a new post</h2>
        <Form onSubmit={onSubmit} categories={categories} />
      </React.Fragment>
    }
  />
);

New.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default New;
