import { connect } from "react-redux";
import Home from "../components/Dashboard";

const mapStateToProps = ({ posts }, props) => {
  const category = props.match.params.category || null;
  const filteredPosts = category
    ? Object.values(posts)
        .filter(post => post.category === category)
        .map(post => post.id)
    : Object.keys(posts);
  return {
    postIds: filteredPosts.sort(
      (a, b) => posts[b].timestamp - posts[a].timestamp
    ),
    category
  };
};

export default connect(mapStateToProps)(Home);
