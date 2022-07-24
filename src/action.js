import axios from "axios";
import { errorType, loadingType, successType } from "./constants";

export const getUser = () => async (dispatch, getState) => {
    dispatch({
        type:loadingType,
        payload:{...getState().myState,loading:true}
    })
    try {
        const {data}=await axios("https://jsonplaceholder.typicode.com/users");
        console.log(data)
        dispatch({
            type:successType,
            payload:{error:"",loading:false,data:[...data]}
        })
    } catch (error) {
        dispatch({
            type:errorType,
            payload:{error:error.message,loading:false,data:[]}
        })
        
    }
};
