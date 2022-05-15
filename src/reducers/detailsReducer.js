const initState = {
  game: {},
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
