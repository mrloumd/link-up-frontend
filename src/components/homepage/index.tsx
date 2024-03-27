import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { RootState } from "../../app/store"; // Assuming this is the path to your RootState
import { useNavigate } from "react-router-dom";
import SideBar from "./pages/sideBar";
import HomeFeed from "./pages/homeFeed";
import Activity from "./pages/activity";
import UserProfile from "./pages/userProfile";

function Homepage() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  // State to manage which component to display
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleLogout = () => {
    dispatch(logout() as any);
    navigate("/"); // Navigate to the landing page after logout
  };

  return (
    <main className='h-screen max-h-screen flex justify-center mx-64 mq1600:mx-52 mq1275:mx-36  mq1190:mx-10 font-lato'>
      <SideBar setShowUserProfile={setShowUserProfile} />
      {showUserProfile ? <UserProfile /> : <HomeFeed />}
      <Activity />
    </main>
  );
}

export default Homepage;
