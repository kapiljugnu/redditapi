import { ActionTypes } from "../constant";
export const selectedSubreddit = (state = "reactjs", action) => {
  switch (action.type) {
    case ActionTypes.SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};
