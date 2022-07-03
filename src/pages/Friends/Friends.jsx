import React from "react";
// components
import UsersContent from "../../components/UsersContent/UsersContent";
// reducers
import {
  getFriends,
  unFollow,
  cleaningState,
} from "../../redux/reducers/friendsReducer";
import { setUserIdAC } from "../../redux/reducers/profileReducer";
// redux
import { connect } from "react-redux";
import { compose } from "redux";
//HOCs
import { IsAuthRedirect } from "../../HOC/IsAuthRedirect";

const Friends = (props) => {
  return (
    <UsersContent
      items={props.friends}
      currentPage={props.currentPage}
      isFetching={props.isFetching}
      searchingName={props.searchingName}
      totalCount={props.totalCount}
      getItems={props.getFriends}
      changeStatus={props.unFollow}
      setUserIdAC={props.setUserIdAC}
      cleaningState={props.cleaningState}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    isFetching: state.friendsPage.isFetching,
    currentPage: state.friendsPage.currentPage,
    searchingName: state.friendsPage.searchingName,
    totalCount: state.friendsPage.totalCount,
  };
};

export default compose(
  connect(mapStateToProps, {
    getFriends,
    unFollow,
    setUserIdAC,
    cleaningState,
  }),
  IsAuthRedirect
)(Friends);
