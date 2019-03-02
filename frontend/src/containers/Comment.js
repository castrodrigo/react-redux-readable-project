import { connect } from "react-redux";
import Comment from "../components/Comment";

const mapStateToProps = ({ comments }, { id }) => ({
  comment: comments[id] || null
});

export default connect(mapStateToProps)(Comment);
