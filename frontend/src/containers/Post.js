import { connect } from "react-redux";
import Post from "../components/Post";

const mapStateToProps = ({ posts }, { id }) => ({
  post: posts[id] || null
});

export default connect(mapStateToProps)(Post);
