import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = ({ posts }) => ({
  postIds: Object.keys(posts).sort(
    (a, b) => posts[b].timestamp - posts[a].timestamp
  )
});

export default connect(mapStateToProps)(Home);
