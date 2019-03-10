import { connect } from "react-redux";
import Comment from "../../components/Comment";

const mapStateToProps = ({ comments }, { postId, id }) => ({
  comment: comments[postId][id] || null
});

export default connect(mapStateToProps)(Comment);
