import axios from 'axios'
import { GET_ERRORS } from "./types"

export const createBusiness = (newuser ,newBusiness, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/Business", newBusiness);
        const busID = res.data.id;
        console.log(busID)

        for(var i = 1; i <= 7;i++){
            var postbusinessTime = {
                day: i,
                business_id: busID
            }
            console.log(postbusinessTime)
            const res = await axios.post("http://localhost:8080/api/BusinessHours", postbusinessTime);
        }
        history.push(`/BusinessPage/${busID}`);
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload:err.reponse.data
        })

        if(err.reponse.data.errors.businessName != null)
            alert(err.response.data.errors.businessName);
        if(err.reponse.data.errors.businessblurb != null)
            alert(err.response.data.errors.businessblurb);
        if(err.reponse.data.errors.businessdescription != null)
            alert(err.response.data.errors.businessdescription);
        if(err.reponse.data.errors.businessAddress != null)
            alert(err.response.data.errors.businessAddress);
        if(err.reponse.data.errors.businessPhoneNumber != null)
            alert(err.response.data.errors.businessPhoneNumber);
        if(err.reponse.data.errors.businessUser != null)
            alert(err.response.data.errors.businessUser);
    }
}