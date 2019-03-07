import { connect } from "react-redux";
import CategoryList from "../components/Category/List";

const mapStateToProps = ({ categories }) => ({
  title: "Categories",
  categories: Object.keys(categories)
});

export default connect(mapStateToProps)(CategoryList);
