import axios from "axios";
import { GET_ERRORS } from "./types";

export const createUser = (newUser, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/user", newUser);
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
    console.log(err.response.data);
    if(err.response.data.errors.userName != null){
    alert(err.response.data.errors.userName);
    }
    if(err.response.data.errors.firstName != null){
      alert(err.response.data.errors.firstName);
    }
    if(err.response.data.errors.lastName != null){
      alert(err.response.data.errors.lastName);
    }
    if(err.response.data.errors.phoneNumber != null){
      alert(err.response.data.errors.phoneNumber);
    }
    if(err.response.data.errors.homeAddress != null){
      alert(err.response.data.errors.homeAddress);
    }
    if(err.response.data.errors.password != null){
      alert(err.response.data.errors.password);
    }
    if(err.response.data.errors.passwordConfirmation != null){
      alert(err.response.data.errors.passwordConfirmation);
    }
  }
};
