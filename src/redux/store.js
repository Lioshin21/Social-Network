import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  usersPage: userReducer,
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
