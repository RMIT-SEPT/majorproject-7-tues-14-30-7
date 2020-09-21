import axios from "axios";
import { GET_ERRORS } from "./types";

export const userLogin = (loginUser, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/user/", loginUser);
    console.log(res.data.id);
    const userID = res.data.id;
    history.push(`/UserHomepage/${userID}`);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
    console.log(err.response.data);
  }
};
