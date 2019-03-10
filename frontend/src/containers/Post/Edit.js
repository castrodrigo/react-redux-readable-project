import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddPost } from "../../actions/posts";
import PostEdit from "../../components/Post/Edit";

const mapStateToProps = ({ posts, categories }, props) => {
  const { id } = props.match.params;
  return {
    post: posts[id] || null,
    categories
  };
};

const maptDispatchToProps = dispatch => ({
  submitPost: post =>
    dispatch(handleAddPost(post)).then(() =>
      this.props.history.push(`/${post.category}/`)
    )
});

const mergeProps = ({ post, categories }, { submitPost }) => ({
  post,
  categories: Object.keys(categories).map(key => ({
    value: key,
    label: categories[key].name
  })),
  onSubmit: submitPost
});

export default connect(
  mapStateToProps,
  maptDispatchToProps,
  mergeProps
)(withRouter(PostEdit));
