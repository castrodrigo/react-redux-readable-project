import { GET_POSTS } from "../actions/posts";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      const postsObject = {};
      action.posts.map(post => (postsObject[post.id] = post));
      return {
        ...state,
        ...postsObject
      };
    default:
      return state;
  }
};
