import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { RootState } from "../../app/store"; // Assuming this is the path to your RootState
import { useNavigate } from "react-router-dom";
import CreatePost from "./CreatePost";
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
    <div className='w-full p-y border-solid border-x border-gray-600'>
      <section className='border-solid border-b border-gray-600 p-5'>
        {" "}
        <div className='w-full'>
          <label className='input input-bordered custom-border flex items-center gap-2'>
            <input type='text' className='grow' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
      </section>

      <section>
        <CreatePost />
      </section>
    </div>
  );
}

export default Homepage;
