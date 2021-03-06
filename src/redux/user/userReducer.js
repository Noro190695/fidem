import { ADD_USER, EDIT_USER, EDIT_DATA_USER, DELETE_USER, SEARCH_USER } from "./userAction";

const initialState = {
  data: [
    {
      id: new Date().getTime(),
      name: "Norayr",
      surname: "Kokhlikyan",
      email: "koxlikyan1995@gmail.com",
      address: "V.Ananyan 6",
      phone: "098 190 695",
    },
    {
      id: new Date().getTime() + 1,
      name: "Fidem",
      surname: "Task",
      email: "info@fidem.com",
      address: "Abelyan 6/1",
      phone: "099 054 555",
    },
  ],
  editData: {},
  searchData: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, data: [...state.data, payload] };
    case EDIT_USER:
      return { ...state, data: payload };
    case DELETE_USER:
      return { ...state, data: payload };
    case EDIT_DATA_USER:
      return { ...state, editData: payload };
    case SEARCH_USER:
      return { ...state, searchData: payload };
    default:
      return state;
  }
};

export default userReducer;
