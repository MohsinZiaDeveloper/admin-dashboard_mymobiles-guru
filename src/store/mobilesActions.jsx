import { MobileAction } from "./actionsTypes";

export const addNewMobile = (values) => {
  return (dispatch) => {
    dispatch({
      type: MobileAction.ADD_MOBILE,
      payload: values,
    });
  };
};

export const deleteMobile = (value) => {
  return (dispatch) => {
    dispatch({
      type: MobileAction.DELETE_MOBILE,
      payload: value,
    });
  };
};

// export const addNewMobile = ()=>{

//     return dispatch =>{

//     }
// }
