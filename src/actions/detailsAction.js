import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

// Action Creator

export const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailData.data,
      screenshot: screenshotData.data,
    },
  });
};
