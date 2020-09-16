import axios from "axios";
import { GET_ERRORS } from "./types";

export const createPerson = (newUser, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/user", newUser);
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
