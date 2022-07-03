import React from "react";
// views
import {
  Wrapper,
  Main,
  HeaderInfoWrapper,
  FullName,
  Status,
  InfoWrapper,
  ContactsWrapper,
  ContactsList,
  ContactsBtn,
  Photo,
  PhotoWrapper,
  ChangePhotoBtn,
  FollowBtn,
  ArrowUp,
  ArrowDown,
  ChangeStatusBtn,
  CnahgeContactsBtn,
} from "./views";
// components
import { ContactsElem } from "../../components/Contacts/ContactsElem";
//form
import ChangeStatusForm from "../../form/ChangeStatus/ChangeStatusForm";
import FileInputForm from "../../form/FileInput/FileInputForm";
import ChangeContactsForm from "../../form/ChangeContacts/ChangeContactsForm";
// common
import Preloader from "../../common/Preloader/Preloader";
// public
import noUserImage from "../../public/noUserImage.gif";

export const Profile = (props) => {
  return (
    <Wrapper>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Main>
          <HeaderInfoWrapper>
            <FullName>{props.profile.fullName}</FullName>
            <Status displayStatusForm={props.displayStatusForm}>
              {props.status ? `status: ${props.status}` : "status: not filled"}
              {props.isOwner ? (
                <ChangeStatusBtn
                  onClick={() => props.handleActiveStatusForm()}
                  displayStatusForm={props.displayStatusForm}
                >
                  Change status
                </ChangeStatusBtn>
              ) : null}
              <ChangeStatusForm
                displayStatusForm={props.displayStatusForm}
                onSubmit={props.handleSubmittingStatusForm}
              />
            </Status>
          </HeaderInfoWrapper>
          <PhotoWrapper>
            <Photo
              onClick={() =>
                window.open(
                  props.profile.photos.large
                    ? props.profile.photos.large
                    : noUserImage
                )
              }
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : noUserImage
              }
              alt="img"
            />
            {props.isOwner ? (
              <ChangePhotoBtn
                onClick={() => props.handleActivePhotoForm()}
                displayPhotoForm={props.displayPhotoForm}
              >
                Change photo
              </ChangePhotoBtn>
            ) : null}
            {props.displayPhotoForm ? (
              <FileInputForm
                handleActivePhotoForm={props.handleActivePhotoForm}
                changePhoto={props.changePhoto}
              />
            ) : null}
          </PhotoWrapper>
          <InfoWrapper>
            <ContactsWrapper>
              <ContactsBtn onClick={() => props.handleActiveContacts()}>
                Contacts
                {props.displayContacts ? <ArrowUp /> : <ArrowDown />}
              </ContactsBtn>
              {!props.displayContactsForm ? (
                <ContactsList activeContacts={props.displayContacts}>
                  {Object.keys(props.profile.contacts).map((objKey, index) => (
                    <ContactsElem
                      key={index}
                      objKey={objKey}
                      value={Object.values(props.profile.contacts)[index]}
                    />
                  ))}
                  {props.isOwner ? (
                    <CnahgeContactsBtn
                      onClick={() => props.handleActiveContactsForm()}
                    >
                      Change contacts
                    </CnahgeContactsBtn>
                  ) : null}
                </ContactsList>
              ) : (
                <ChangeContactsForm
                  onSubmit={props.handleSubmittingContsctsForm}
                  profile={props.profile}
                />
              )}
            </ContactsWrapper>
            {!props.isOwner ? (
              <FollowBtn
                onClick={() => props.changeFollow(props.userId, props.isFollow)}
              >
                {props.isFollow ? "Unfollow" : "Follow"}
              </FollowBtn>
            ) : null}
          </InfoWrapper>
        </Main>
      )}
    </Wrapper>
  );
};
