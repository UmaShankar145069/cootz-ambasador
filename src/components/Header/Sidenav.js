import React from "react";
import { NavLink } from "react-router-dom";
import logout from "../../assets/images/logout-icon.png";

const Sidenav = () => {
  return (
    <>
      {/* sidebar menu  */}
      <div id="side-menu" class="side-nav">
        <NavLink to="/referal" className="link">
          My Referals
        </NavLink>
        <NavLink to="/contest" className="link">
          Add Contests
        </NavLink>
        <NavLink to="/profile" className="link">
          Profile
        </NavLink>
        <NavLink to="/logout" className="logout-btn link">
          <img src={logout} alt="logout-icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidenav;
