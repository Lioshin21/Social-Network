import React, { useEffect, useMemo, useState } from "react";
// redux
import { connect } from "react-redux";
import { compose } from "redux";
// reducer
import {
  getProfile,
  getStatus,
  getFollow,
  changeFollow,
  changeStatus,
  changePhoto,
  changeContacts,
} from "../../redux/reducers/profileReducer";
// components
import { Profile } from "./Profile";
// HOCs
import { IsAuthRedirect } from "../../HOC/IsAuthRedirect";

const ProfileBL = (props) => {
  const [displayStatusForm, setDisplayStatusForm] = useState(false);
  const [displayContacts, setDisplayContacts] = useState(false);
  const [displayContactsForm, setDisplayContactsForm] = useState(false);
  const [displayPhotoForm, setDisplayPhotoForm] = useState(false);

  const isOwner = useMemo(() => {
    if (props.userId === props.authId) {
      return true;
    }
    return false;
  }, [props.userId, props.authId]);

  // Effects
  useEffect(() => {
    props.getProfile(props.userId || props.authId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userId, props.authId]);

  useEffect(() => {
    props.getStatus(props.userId || props.authId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userId, props.authId]);

  useEffect(() => {
    props.getFollow(props.userId || props.authId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFollow]);

  // Handlers
  const handleActiveStatusForm = () => {
    setDisplayStatusForm((resp) => !resp);
  };

  const handleActiveContactsForm = () => {
    setDisplayContactsForm((resp) => !resp);
  };

  const handleActiveContacts = () => {
    setDisplayContacts((resp) => !resp);
    if (displayContactsForm) {
      setDisplayContactsForm((resp) => !resp);
    }
  };

  const handleActivePhotoForm = () => {
    setDisplayPhotoForm((resp) => !resp);
  };

  const handleSubmittingStatusForm = async (formData) => {
    if (formData.status) {
      await props.changeStatus(formData.status);
    }
    setDisplayStatusForm((resp) => !resp);
  };

  const handleSubmittingContsctsForm = async (formData) => {
    const requestObj = {
      aboutMe: formData.aboutMe ?? `I am ${props.profile.fullName}`,
      contacts: {
        github: formData.github ?? props.profile.contacts.github,
        vk: formData.vk ?? props.profile.contacts.vk,
        facebook: formData.facebook ?? props.profile.contacts.facebook,
        instagram: formData.instagram ?? props.profile.contacts.instagram,
        twitter: formData.twitter ?? props.profile.contacts.twitter,
        website: formData.website ?? props.profile.contacts.website,
        youtube: formData.youtube ?? props.profile.contacts.youtube,
        mainLink: formData.mainLink ?? props.profile.contacts.mainLink,
      },
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу",
      fullName: props.profile.fullName,
    };
    await props.changeContacts(requestObj);
    setDisplayContacts((resp) => !resp);
    setDisplayContactsForm((resp) => !resp);
  };

  return props.userId ? (
    <Profile
      changeFollow={props.changeFollow}
      isOwner={isOwner}
      changePhoto={props.changePhoto}
      {...props}
      //display
      displayStatusForm={displayStatusForm}
      displayContacts={displayContacts}
      displayPhotoForm={displayPhotoForm}
      displayContactsForm={displayContactsForm}
      //submit
      handleSubmittingStatusForm={handleSubmittingStatusForm}
      handleSubmittingContsctsForm={handleSubmittingContsctsForm}
      //handle display
      handleActiveContactsForm={handleActiveContactsForm}
      handleActiveStatusForm={handleActiveStatusForm}
      handleActiveContacts={handleActiveContacts}
      handleActivePhotoForm={handleActivePhotoForm}
    />
  ) : null;
};
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    userId: state.profilePage.id,
    isAuth: state.auth.isAuth,
    authId: state.auth.id,
    status: state.profilePage.status,
    isFollow: state.profilePage.isFollow,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    getFollow,
    changeFollow,
    changeStatus,
    changePhoto,
    changeContacts,
  }),
  IsAuthRedirect
)(ProfileBL);
