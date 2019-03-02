import React from "react";
import { connect } from "react-redux";
import { handleGetCategories } from "../actions/categories";
import CategoryList from "../components/Category/List";

class Categories extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetCategories());
  }

  render() {
    return this.props.categories.length > 0 ? (
      <CategoryList title="Categories" categories={this.props.categories} />
    ) : null;
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: Object.keys(categories)
});

export default connect(mapStateToProps)(Categories);
