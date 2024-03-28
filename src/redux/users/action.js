export const updateGigId = (gigId) => {
  console.log("gigggId",gigId)
  return{
  type: "UPDATE_GIG_ID",
  payload: gigId,
}};
export const UserDetails = (data) => {
    return {
      type: "USER_DETAILS",
      payload: data,
    };
  };
  export const userDataAction = (data) => {
    return {
      type: "USER_DATA",
      payload: data,
    };
  };
  export const loaderAction = (data) => {
    return {
      type: "LOADING_DATA",
      payload: data,
    };
  };
  export const userCheckAction = (data) => {
    return {
      type: "USER_CHECK",
      payload: data,
    };
  };

  export const appDetailsAction = (data) => {
    return {
      type: "APP_DETAILS",
      payload: data,
    };
  };

export const setUserRoleAction = (role) => ({
  type: "SET_USER_ROLE",
  payload: role,
});