import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { RootState } from "../../../app/store"; // Assuming this is the path to your RootState
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faSearch,
  faBell,
  faMessage,
  faGear,
  faG,
} from "@fortawesome/free-solid-svg-icons";

interface SideBarProps {
  setShowUserProfile: (value: boolean) => void;
}

function SideBar({ setShowUserProfile }: SideBarProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout() as any);
    navigate("/"); // Navigate to the landing page after logout
  };

  return (
    <div className='w-[50%] flex flex-col p-5 text-lg'>
      <Link to={"/"}>
        <header className='p-5'>LOGO</header>
      </Link>
      <section>
        <ul className='menu gap-5 text-inherit'>
          <li>
            <a>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              Home
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              Explore
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              Notifications
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
              Messages
            </a>
          </li>
          <li>
            <a onClick={() => setShowUserProfile(true)}>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              Profile
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
              Settings
            </a>
          </li>
        </ul>
      </section>
      <section className='mt-auto'>
        <div className='dropdown dropdown-top w-full'>
          <ul tabIndex={0} role='button' className='menu text-lg '>
            <li>
              <a>
                {" "}
                <FontAwesomeIcon icon={faUser} className='me-3 py-2' />
                {user.firstName}
              </a>
            </li>
          </ul>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
