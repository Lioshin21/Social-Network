import styled from "styled-components";
// import { FollowBtn } from "../../components/User/views";

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  background: transparent;
  color: black;
  color: white;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const HeaderInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 20px;
`;

export const FullName = styled.div`
  font-size: 32px;
  color: #0d2525;
`;

export const Status = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: ${(props) => (!props.displayStatusForm ? "row" : "column")};
  color: #0d2525;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 85%;
  border-bottom: 3px solid rgba(13, 37, 37, 1);
  padding-bottom: 20px;
  transition: all 200ms ease-in-out;
`;

export const Photo = styled.img`
  width: 450px;
  height: 450px;
  border: 1px solid black;
  border-radius: 50%;
  transition: all 200ms ease-in-out;
  margin: 5px;
  border-bottom: 3px solid black;
  box-shadow: 0px 8px 35px 10px rgb(0 0 0 / 64%);
  cursor: pointer;

  :hover {
    border-radius: 0;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;
export const ContactsList = styled.ul`
  position: relative;

  display: ${(props) => (props.activeContacts ? "flex" : "none")};
  flex-direction: column;

  top: ${(props) => (props.activeContacts ? "0px" : "-100%")};
  border-radius: 10px;
  padding: 10px 25px;
  color: white;
  background: #0d2525;
  transition: all 1000ms ease-in;
`;

export const ContactsBtn = styled.button`
  align-self: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 40px;
  margin: 10px 20px;

  border: none;
  border-radius: 30px;

  background: #0d2525;
  background-position: 100% 0;
  box-shadow: 0px 21px 25px -4px rgb(0 0 0 / 64%);

  font-size: 18px;
  font-weight: 600;
  color: white;
  transition: all 0.1s ease;

  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const FollowBtn = styled(ContactsBtn)``;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: white;
  border-bottom: 0;
  margin-left: 5px;
`;

export const ArrowUp = styled(ArrowDown)`
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-color: white;
  border-top: 0;
  margin-left: 5px;
`;

export const ChangeStatusBtn = styled(ContactsBtn)`
  display: ${(props) => (props.displayStatusForm ? "none" : "inline-block")};
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 10px;
`;

export const ChangePhotoBtn = styled(ContactsBtn)`
  display: ${(props) => (props.displayPhotoForm ? "none" : "inline-block")};
  margin: 0 5px;
  padding: 5px 10px;
`;

export const CnahgeContactsBtn = styled(ContactsBtn)`
  border: 1px solid white;
  padding: 5px;
  font-size: 14px;
  margin: 5px;
`;
