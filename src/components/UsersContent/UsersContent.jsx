import React, { useEffect, useState, useRef, useCallback } from "react";
// views
import {
  Wrapper,
  TopContentWrapper,
  ArrowWrapper,
  ArrowUP,
  UsersWrapper,
} from "./views";
// components
import { User } from "./User/User";
import Preloader from "../../common/Preloader/Preloader";
import SearchingForm from "../../components/SearchingForm/SearchingForm";
// public
import arrowToTop from "../../public/arrowUP.png";
import noUserImage from "../../public/noUserImage.gif";

const UsersContent = (props) => {
  const scrollRef = useRef(null);
  const [positionTop, setPositionTop] = useState(0);

  const addMoreUsers = () => {
    if (
      scrollRef.current.scrollTop >
        (scrollRef.current.scrollHeight - scrollRef.current.clientHeight) *
          0.8 &&
      props.totalCount > props.currentPage * 10
    ) {
      setPositionTop(scrollRef.current.scrollTop);
      props.getItems(props.currentPage + 1, 10, props.searchingName);
    }
    if (scrollRef.current.scrollTop === 0) {
      setPositionTop(0);
    }
  };

  const scrollTo = useCallback(
    (position) => {
      if (props.items.length !== 0 && props.isFetching === false) {
        scrollRef.current.scrollTo(0, position);
      }
    },
    [props.isFetching, props.items.length]
  );

  // Effects

  useEffect(() => {
    props.getItems(1, 10, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      props.cleaningState();
    };
  }, []);

  useEffect(() => {
    scrollTo(positionTop);
  }, [positionTop, scrollTo]);

  return (
    <Wrapper>
      <TopContentWrapper>
        <SearchingForm
          getItems={props.getItems}
          searchingName={props.searchingName}
          cleaningState={props.cleaningState}
          isFetching={props.isFetching}
        />
        {positionTop > 0 && (
          <ArrowWrapper>
            <ArrowUP src={arrowToTop} onClick={() => scrollTo(0)} />
          </ArrowWrapper>
        )}
      </TopContentWrapper>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <UsersWrapper onScroll={addMoreUsers} ref={scrollRef}>
          {props.items.map((item) => (
            <User
              noUserImage={noUserImage}
              changeStatus={props.changeStatus}
              user={item}
              key={item.id}
              setUserIdAC={props.setUserIdAC}
            />
          ))}
        </UsersWrapper>
      )}
    </Wrapper>
  );
};

export default UsersContent;
