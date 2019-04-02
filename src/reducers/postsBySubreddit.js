import { ActionTypes } from "../constant";

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case ActionTypes.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case ActionTypes.RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.INVALIDATE_SUBREDDIT:
    case ActionTypes.RECEIVE_POSTS:
    case ActionTypes.REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
};
