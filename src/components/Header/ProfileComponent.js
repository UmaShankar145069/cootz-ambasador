import React from "react";
import "./HeaderComponent.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Profile from "../BodyComponents/Profile";

export default function ProfileComponent(props) {
  return (
    <>
      <Navbar profile={props.profile} />
      <Sidenav />
      <Profile profile={props.profile} imageHandler={props.imageHandler} />
    </>
  );
}
