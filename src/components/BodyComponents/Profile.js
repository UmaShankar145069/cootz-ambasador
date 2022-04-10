import React from "react";
import "./Profile.css";
import pencil from "../../assets/images/pencil.png";

const Profile = (props) => {
  console.log("props", props);

  return (
    <>
      {/* < Main section  */}
      <div id="main">
        <form method="POST" id="profile-form" className="profile-form">
          <div class="image-container">
            <div class="image">
              <img src={props.profile.photo} alt="profile-img" />
            </div>
            <div class="pencil-icon">
              <label htmlFor="img-file">
                <img src={pencil} alt="pencil-icon" />
              </label>
              <input
                type="file"
                id="img-file"
                onChange={props.imageHandler}
                accept="image/*"
              />
            </div>
            <div class="name">{props.profile.name}</div>
          </div>

          <div class="detail-container">
            <div class="detail-field">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="name"
                value={props.profile.name}
                id="name"
                disabled
              />
            </div>
            <div class="detail-field">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                type="tel"
                name="phone"
                value={props.profile.phone}
                id="phone"
                disabled
              />
            </div>
            <div class="detail-field">
              <label htmlFor="referal-id">Referal Id</label>
              <br />
              <input
                type="text"
                name="referal-id"
                value={props.profile.referalId}
                id="referal-id"
                disabled
              />
            </div>
            <div class="detail-field">
              <label htmlFor="email">Email ID</label>
              <br />
              <input
                type="email"
                name="email"
                value={props.profile.email}
                id="email"
                disabled
              />
            </div>
          </div>
          <input type="submit" value="Edit" id="edit" />
        </form>
      </div>
    </>
  );
};

export default Profile;
