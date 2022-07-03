import React from "react";
// router
import { Route, Routes } from "react-router-dom";
// components
import Header from "./components/Header/Header";
import NavbarBL from "./components/Navbar/NavbarBL";
import { Footer } from "./components/Footer/Footer";
// pages
import Users from "./pages/Users/Users";
import ProfileBL from "./pages/Profile/ProfileBL";
import Friends from "./pages/Friends/Friends";
import Login from "./pages/Login/Login";
// views
import { Wrapper, WrapperContent } from "./views";
// redux
import { connect } from "react-redux";

function App(props) {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>
        <NavbarBL />
        <Routes>
          <Route path="/" element={<ProfileBL />} />
          <Route
            path={`profile/${props.userId ?? props.authId}`}
            element={<ProfileBL />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </WrapperContent>
      <Footer />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  userId: state.profilePage.id,
  authId: state.auth.id,
});

export default connect(mapStateToProps)(App);
