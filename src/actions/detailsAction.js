import axios from "axios";
import { gameDetailsURL } from "../api";

// Action Creator

export const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailData.data,
    },
  });
};
