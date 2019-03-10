import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleUpdatePost } from "../../actions/posts";
import PostEdit from "../../components/Post/Edit";

const mapStateToProps = ({ posts, categories }, props) => {
  const { id } = props.match.params;
  return {
    id,
    post: posts[id] || null,
    categories
  };
};

const maptDispatchToProps = dispatch => ({
  submitPost: (history, id, post) =>
    dispatch(handleUpdatePost(id, post)).then(() =>
      history.push(`/${post.category}/${id}`)
    )
});

const mergeProps = ({ id, post, categories }, { submitPost }, { history }) => ({
  post,
  categories: Object.keys(categories).map(key => ({
    value: key,
    label: categories[key].name
  })),
  onSubmit: data => submitPost(history, id, data)
});

export default connect(
  mapStateToProps,
  maptDispatchToProps,
  mergeProps
)(withRouter(PostEdit));
