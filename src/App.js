import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReferalComponent from "./components/Header/ReferalComponent";
import ContestComponent from "./components/Header/ContestComponent";
import ProfileComponent from "./components/Header/ProfileComponent";
import prof from "./assets/images/profile-img.png";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [profile, setProfile] = useState({
    name: "Ritu Sharma",
    email: "asdd2gmail.com",
    phone: 788899999,
    referalId: "tyyuu8888",
    photo: prof,
    wallet: "Rs.20,000",
  });

  const getProfile = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setProfile(data);

      if (!res.status === 201) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile({ ...profile, photo: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/referal"
          element={<ReferalComponent profile={profile} />}
        />
        <Route
          path="/contest"
          element={<ContestComponent profile={profile} />}
        />
        <Route
          path="/profile"
          element={
            <ProfileComponent profile={profile} imageHandler={imageHandler} />
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
