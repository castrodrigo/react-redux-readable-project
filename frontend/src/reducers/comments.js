import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comments";

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
    case VOTE_COMMENT:
    case UPDATE_COMMENT:
    case ADD_COMMENT:
      const { comment } = action;
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          [comment.id]: comment
        }
      };
    case REMOVE_COMMENT:
      const { id, postId } = action;
      return {
        ...state,
        [postId]: {
          ...state[postId],
          [id]: undefined
        }
      };
    default:
      return state;
  }
};
