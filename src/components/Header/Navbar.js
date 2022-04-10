import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import wallet from "../../assets/images/wallet.png";
import profile from "../../assets/images/profile-img.png";

const Navbar = (props) => {
  const [post, setPost] = useState("Manager");
  return (
    <React.Fragment>
      {/* header  */}
      <header className="header">
        {/* left  */}
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>COOTZ</span>
          </div>
        </div>

        {/* right  */}
        <div className="right">
          <button className="wallet-container">
            <img src={wallet} alt="wallet-icon" />
            <span>{props.profile.wallet}</span>
          </button>
          <div className="profile-container">
            <img src={profile} alt="" />
            <span className="detail">
              <p id="name">{props.profile.name}</p>
              <p id="post">{post}</p>
            </span>
          </div>
        </div>
      </header>
      <input type="checkbox" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner top"></div>
        <div class="spinner middle"></div>
        <div class="spinner bottom"></div>
      </label>
    </React.Fragment>
  );
};

export default Navbar;
