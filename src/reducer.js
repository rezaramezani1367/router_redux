import { errorType, loadingType, successType } from "./constants";
export const myState = (state = {error:"",loading:false,data:[]}, { type, payload }) => {
  switch (type) {
    case errorType:
      return payload;
    case loadingType:
      return payload;
    case successType:
      return payload;

    default:
      return state;
  }
};
