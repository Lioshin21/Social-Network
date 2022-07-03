import { authAPI } from "../../API/api";
import { authTypes } from "../types/types";

const initialState = {
  id: null,
  email: null,
  login: null,
  // isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER_DATA:
      return { ...state, ...action.payload };
    case authTypes.LOGIN:
      return { ...state, id: action.payload.userId };
    case authTypes.LOGOUT:
      return { ...state, id: null, email: null, login: null };
    case authTypes.IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

// actionCreator
export const setUserDataAC = (data) => ({
  type: authTypes.SET_USER_DATA,
  payload: data,
});

const LoginAC = (data) => ({ type: authTypes.LOGIN, payload: data });

const logoutAC = () => ({ type: authTypes.LOGOUT });

const isAuthAC = (status) => ({ type: authTypes.IS_AUTH, payload: status });

// thunks
export const getAuthDate = () => {
  return (dispatch) => {
    authAPI.getAuthDate().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(response.data.data));
        dispatch(isAuthAC(true));
      }
    });
  };
};

export const login = (formData) => {
  return (dispatch) => {
    authAPI
      .login(formData.email, formData.password, formData.rememberMe)
      .then((resp) => {
        if (resp.data.resultCode === 0) {
          dispatch(LoginAC(resp.data.data));
          dispatch(isAuthAC(true));
        }
      })
      .then(() => {
        getAuthDate();
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI
      .logout()
      .then((resp) => {
        if (resp.data.resultCode === 0) {
          dispatch(logoutAC(resp.data));
          dispatch(isAuthAC(false));
        }
      })
      .then(() => {
        getAuthDate();
      });
  };
};
export default authReducer;
