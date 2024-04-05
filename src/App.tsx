import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import HomePage from "./components/homepage/Homepage";
import UserProfile from "./components/userProfile/UserProfile";
import SideBar from "./components/sideBar/SideBar";
import Activity from "./components/activity/Activity";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  // Get user from Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  console.log("user", user);

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path='/*' element={<LandingPage />} />
        ) : (
          <Route
            path='/*'
            element={
              <main className='h-screen max-h-screen flex justify-center mx-64 mq1600:mx-52 mq1275:mx-36  mq1190:mx-10 font-lato'>
                <SideBar />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/profile' element={<UserProfile />} />
                </Routes>
                <Activity />
              </main>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
