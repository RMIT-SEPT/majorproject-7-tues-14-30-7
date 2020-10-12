import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerAction = (newUser, newBusiness, newWorkerDetails, form, history) => async dispatch => {
  try {
      if(form == 1){
            const res = await axios.post("http://localhost:8080/api/user", newUser);
            console.log(res.data.id);
            const userID = res.data.id;
            history.push(`/UserHomepage/${userID}`);
      }
      if(form == 2){
        console.log("here")
        const resbus = await axios.post("http://localhost:8080/api/Business", newBusiness);
        const busID = resbus.data.id;
        console.log(busID);

        for(var i= 1; i <=7; i++){
            var postbusinessTime = {
                day: i,
                business_id: busID
            }
            console.log(postbusinessTime);
            await axios.post("http://localhost:8080/api/BusinessHours", postbusinessTime);
        }
        console.log("end of loop");
        history.push(`/BusinessPage/${busID}`);
      }
      if(form == 3){
        const res = await axios.post("http://localhost:8080/api/user", newUser);
        console.log(res.data.id);
        const userID = res.data.id;
        const newWorker = {
            user:{
                id: userID
            },
            business:
                {
                    id: newWorkerDetails.id
                },
            workerWState: null,
            services: [],
            availableStartTimes: [],
            availableEndTimes: [],
            shiftStartTimes:[],
            shiftEndTimes:[],
            description: "Description goes here",
            created_At: "2020-32-07",
            updated_At: null
        }
        const res2 = await axios.post("http://localhost:8080/api/worker", newWorker)
        console.log("FINAL LOG FOR res2")
        console.log(res2);
        const workerID = res2.data.id;
        history.push(`/Worker/?id=${workerID}`);
      }
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
