import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import HomePage from "./components/homepage";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  // Get user from Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  console.log("user", user);

  return (
    <>
      <Router>
        <Routes>
          {/* Use a conditional Route to render LandingPage if there is no user */}
          <Route
            path='/'
            element={!user ? <LandingPage /> : <Navigate to='/home' />}
          />
          {/* Render HomePage when there is a user */}
          <Route
            path='/home'
            element={user ? <HomePage /> : <Navigate to='/' />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
