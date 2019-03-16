import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddPost } from "../../actions/posts";
import PostNew from "../../components/Post/New";

const mapStateToProps = ({ categories }) => ({
  categories: Object.keys(categories).map(key => ({
    value: key,
    label: categories[key].name
  }))
});

const mapDispatchToProps = dispatch => ({
  submitPost: post => dispatch(handleAddPost(post))
});

const mapProps = ({ categories }, { submitPost }, { history }) => ({
  onSubmit: post =>
    submitPost(post).then(() => history.push(`/${post.category}/`)),
  categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapProps
)(withRouter(PostNew));
