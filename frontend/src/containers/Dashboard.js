import { connect } from "react-redux";
import { setOrderBy } from "../actions/dashboard";
import Dashboard from "../components/Dashboard";

const sortPosts = (postIds, posts, order) => {
  let orderBy = order || "timestamp";
  return postIds.sort((a, b) => posts[b][orderBy] - posts[a][orderBy]);
};

const mapStateToProps = ({ posts, dashboard }, props) => {
  const category = props.match.params.category || null;
  const filteredPosts = category
    ? Object.values(posts)
        .filter(post => post.category === category)
        .map(post => post.id)
    : Object.keys(posts);

  return {
    postIds: filteredPosts,
    posts,
    category,
    dashboard
  };
};

const mapDispatchToProps = dispatch => ({
  setOrder: order => dispatch(setOrderBy(order))
});

const mergeProps = (propsFromState, { setOrder }) => ({
  postIds: sortPosts(
    propsFromState.postIds,
    propsFromState.posts,
    propsFromState.dashboard
  ),
  setOrder,
  orderBy: propsFromState.dashboard,
  category: propsFromState.category
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Dashboard);
