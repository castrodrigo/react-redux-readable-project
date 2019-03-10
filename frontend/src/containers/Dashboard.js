import { connect } from "react-redux";
import { setOrderBy } from "../actions/dashboard";
import Dashboard from "../components/Dashboard";
import { sortArrayObjects } from "../util/sort";

const sortPosts = (postIds, posts, order) => {
  let orderBy = order || "timestamp";
  return sortArrayObjects(postIds, posts, orderBy);
};

const filterPosts = (posts, category) => {
  const postKeys = Object.keys(posts);
  if (postKeys.length > 0 && category) {
    return Object.values(posts)
      .filter(post => post && post.category === category)
      .map(post => post.id);
  }
  return postKeys;
};

const mapStateToProps = ({ posts, dashboard }, props) => {
  const category = props.match.params.category;
  const filteredPosts = filterPosts(posts, category);

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
