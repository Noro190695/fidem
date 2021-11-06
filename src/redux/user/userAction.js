export const ADD_USER = "ADD_USER";
export const EDIT_DATA_USER = "EDIT_DATA_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const SEARCH_USER = "SEARCH_USER";

export const addUserAction = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const editUserAction = (allData, data) => {
  const dataIdx = allData.findIndex((item) => item.id === data.id);
  allData[dataIdx] = data;
  return {
    type: EDIT_USER,
    payload: allData,
  };
};

export const editDataUserAction = (data) => {
  return {
    type: EDIT_DATA_USER,
    payload: data,
  };
};
export const deleteUserAction = (allData, id) => {
  let delData = allData.filter((item) => item.id !== id);
  return {
    type: DELETE_USER,
    payload: delData,
  };
};

export const searchUserAction = (allData, value) => {
  let searchData = allData.filter(item => {
    if (
      item.name.match(value) ||
      item.surname.match(value) ||
      item.email.match(value) ||
      item.address.match(value) ||
      item.phone.match(value)
    ) {
      return item;
    }
  });
  
  return {
    type: SEARCH_USER,
    payload: searchData,
  };
};
