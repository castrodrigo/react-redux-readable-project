import { GET_POSTS, ADD_POST } from "../actions/posts";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      const postsObject = {};
      action.posts.map(post => (postsObject[post.id] = post));
      return {
        ...state,
        ...postsObject
      };
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        [post.id]: post
      };
    default:
      return state;
  }
};
