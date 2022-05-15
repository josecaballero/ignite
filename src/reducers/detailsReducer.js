const initState = {
  game: {},
  screenshot: {},
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
