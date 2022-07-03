/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// reducers
import {
  getUsers,
  changeStatus,
  cleaningState,
} from "../../redux/reducers/userReducer";
import { setUserIdAC } from "../../redux/reducers/profileReducer";
// redux
import { connect } from "react-redux";
import UsersContent from "../../components/UsersContent/UsersContent";

const Users = (props) => {
  
  return (
    <UsersContent 
    items={props.users}
    currentPage={props.currentPage}
    isFetching={props.isFetching}
    searchingName={props.searchingName}
    totalCount={props.totalCount}
    getItems={props.getUsers}
    changeStatus={props.changeStatus}
    setUserIdAC={props.setUserIdAC}
    cleaningState={props.cleaningState}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    searchingName: state.usersPage.searchingName,
    totalCount: state.usersPage.totalCount,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  changeStatus,
  setUserIdAC,
  cleaningState,
})(Users);
