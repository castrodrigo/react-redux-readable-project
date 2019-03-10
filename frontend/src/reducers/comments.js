import { GET_COMMENTS, ADD_COMMENT } from "../actions/comments";

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
    case ADD_COMMENT:
      const { comment } = action;
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          [comment.id]: comment
        }
      };
    default:
      return state;
  }
};
