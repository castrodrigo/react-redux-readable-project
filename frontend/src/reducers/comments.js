import { GET_COMMENTS } from "../actions/comments";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      const commentsObject = {};
      action.comments.map(comment => (commentsObject[comment.id] = comment));
      return {
        ...state,
        ...commentsObject
      };
    default:
      return state;
  }
};
