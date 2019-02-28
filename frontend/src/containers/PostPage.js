import { connect } from "react-redux";
import PostPage from "../components/Post/Page";

const mapStateToProps = ({ comments }, props) => {
  const { id } = props.match.params;
  return {
    postId: id,
    comments: {}
  };
};

export default connect(mapStateToProps)(PostPage);
