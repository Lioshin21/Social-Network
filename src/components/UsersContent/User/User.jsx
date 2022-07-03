import React from "react";
import { Wrapper, Info, FollowBtn, LinkElem, ProfileImg } from "./views";

export const User = (props) => {
  return (
    <Wrapper>
      <Info>
        <LinkElem
          to={`/profile/${props.user.id}`}
          onClick={() => props.setUserIdAC(props.user.id)}
        >
          <ProfileImg
            src={
              props.user.photos.small ??
              props.noUserImage
            }
          />
          {props.user.name}
        </LinkElem>
      </Info>
      <FollowBtn
        onClick={() => props.changeStatus(props.user.id, props.user.followed)}
      >
        {props.user.followed ? "Unfollow" : "Follow"}
      </FollowBtn>
    </Wrapper>
  );
};
