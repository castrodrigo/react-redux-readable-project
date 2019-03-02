import { GET_COMMENTS } from "../actions/comments";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      const commentsObject = {};
      action.comments.map(comment => (commentsObject[comment.id] = comment));
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          ...commentsObject
        }
      };
    default:
      return state;
  }
};
