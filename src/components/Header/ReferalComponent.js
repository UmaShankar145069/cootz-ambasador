import React from "react";
import "./HeaderComponent.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Referal from "../BodyComponents/Referal";

export default function ReferalComponent(props) {
  return (
    <>
      <Navbar profile={props.profile} />
      <Sidenav />
      <Referal />
    </>
  );
}
