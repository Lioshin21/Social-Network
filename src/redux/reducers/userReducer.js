// API
import { userAPI } from "../../API/api";
// ActionTypes
import { userTypes } from "../types/types";

const initialState = {
  users: [],
  totalCount: 0,
  error: "",
  currentPage: 1,
  isFetching: false,
  searchingName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
        totalCount: action.totalCount,
        error: action.error
      };
    case userTypes.CHANGE_FOLLOW_STATUS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId
            ? { ...user, followed: !user.followed }
            : user
        ),
      };
    case userTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case userTypes.IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case userTypes.SET_SEARCHING_NAME:
      return {
        ...state,
        searchingName: action.searchingName
      };
    case userTypes.CLEANING_STATE:
      return {
        ...state,
        users: [],
        currentPage: 1
      }
    default:
      return state;
  }
};


// ActionCreators
const changeFollowStatus = userId => ({
  type: userTypes.CHANGE_FOLLOW_STATUS,
  userId,
});
const getUsersAC = (users, totalCount, error) => ({
  type: userTypes.GET_USERS,
  users,
  totalCount,
  error
});
const setCurrentPageAC = currentPage => ({
  type: userTypes.SET_CURRENT_PAGE,
  currentPage,
});
const isFetchingAC = status => ({
  type: userTypes.IS_FETCHING,
  isFetching: status,
});
const setSearchingName = searchingName => ({
  type: userTypes.SET_SEARCHING_NAME,
  searchingName
})

export const cleaningState = () => ({
  type: userTypes.CLEANING_STATE,
})

// Thunks

export const getUsers = (currentPage, count = 5, term = '') => {
  return (dispatch) => {
    dispatch(isFetchingAC(true));
    dispatch(setSearchingName(term))
    userAPI.getUsers(currentPage, count, term)
      .then((response) => {
        dispatch(getUsersAC(response.items, response.totalCount, response.error));
        dispatch(isFetchingAC(false));
        dispatch(setCurrentPageAC(currentPage));
      });
  };
};

export const changeStatus = (id, status) => {
  return (dispatch) => {
    if (status) {
      userAPI.unFollow(id).then(() => dispatch(changeFollowStatus(id)));
    } else {
      userAPI.follow(id).then(() => dispatch(changeFollowStatus(id)));
    }
  };
};

export default userReducer;
