import { profileAPI, userAPI } from "../../API/api";
import { profileTypes } from "../types/types";

const initialState = {
  profile: null,
  isFetching: false,
  id: null,
  status: null,
  isFollow: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileTypes.GET_PROFILE:
      return { ...state, profile: action.profile };
    case profileTypes.IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case profileTypes.SET_USERID:
      return { ...state, id: action.userId };
    case profileTypes.SET_STATUS:
      return { ...state, status: action.payload };
    case profileTypes.GET_FOLLOW:
      return { ...state, isFollow: action.payload };
    case profileTypes.SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    case profileTypes.SET_CONTACTS:
      return {
        ...state,
        profile: { ...action.payload, photos: state.profile.photos },
      };
    default:
      return state;
  }
};

// actionCreateer
const setProfileAC = (info) => ({
  type: profileTypes.GET_PROFILE,
  profile: info,
});

const isFetchingAC = (status) => ({
  type: profileTypes.IS_FETCHING,
  isFetching: status,
});

export const setUserIdAC = (id) => ({
  type: profileTypes.SET_USERID,
  userId: id,
});

const setStatusAC = (status) => ({
  type: profileTypes.SET_STATUS,
  payload: status,
});

const setFollowAC = (status) => ({
  type: profileTypes.GET_FOLLOW,
  payload: status,
});

const setProfilePhotoAC = (photo) => ({
  type: profileTypes.SET_PHOTO,
  payload: photo,
});

const setContactsAC = (contacts) => ({
  type: profileTypes.SET_CONTACTS,
  payload: contacts,
});

// thunks
// PROFILE
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true));
    profileAPI
      .getProfile(userId)
      .then((response) => {
        dispatch(setProfileAC(response.data));
        dispatch(setUserIdAC(userId));
      })
      .then(() => {
        dispatch(isFetchingAC(false));
      });
  };
};

// STATUS
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI
      .getStatus(userId)
      .then((response) => dispatch(setStatusAC(response.data)));
  };
};

export const changeStatus = (status) => {
  return (dispatch) => {
    profileAPI
      .changeStatus(status)
      .then((response) =>
        response.data.resultCode === 0
          ? dispatch(setStatusAC(status))
          : console.error(response.data.messages)
      );
  };
};

// FOLLOW
export const getFollow = (userId) => {
  return (dispatch) => {
    userAPI.followStatus(userId).then((response) => {
      if (response.status === 200) {
        dispatch(setFollowAC(response));
      }
    });
  };
};

export const changeFollow = (userId, isFollowed) => {
  return (dispatch) => {
    if (isFollowed) {
      userAPI
        .unFollow(userId)
        .then((response) =>
          response.data.resultCode === 0
            ? dispatch(setFollowAC(response.data))
            : null
        );
    } else {
      userAPI
        .follow(userId)
        .then((response) =>
          response.data.resultCode === 0
            ? dispatch(setFollowAC(response.data))
            : null
        );
    }
  };
};

// PHOTO
export const changePhoto = (photoFile) => {
  return (dispatch) => {
    profileAPI
      .changePhoto(photoFile)
      .then((response) =>
        response.data.resultCode === 0
          ? dispatch(setProfilePhotoAC(response.data.data.photos))
          : null
      );
  };
};

// CONTACTS
export const changeContacts = (contacts) => {
  return (dispatch) => {
    profileAPI
      .changeContacts(contacts)
      .then((response) =>
        response.data.resultCode === 0
          ? dispatch(setContactsAC(contacts))
          : console.error(response.data.messages)
      );
  };
};
export default profileReducer;
