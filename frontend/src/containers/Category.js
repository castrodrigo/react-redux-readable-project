import { connect } from "react-redux";
import CategoryListItem from "../components/Category/ListItem";

const mapStateToProps = ({ categories }, { path }) => ({
  category: categories[path]
});

export default connect(mapStateToProps)(CategoryListItem);
