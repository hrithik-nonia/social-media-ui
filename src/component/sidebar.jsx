import SidebarLogo from "../assets/logo/navigation-logo";
import { CiHome } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";
import { useState } from "react";
import CreatePost from "./sidebar-element/createPost";
import SettingElements from "./sidebar-element/manageProfile/settings";
import ProfileElements from "./sidebar-element/manageProfile/profile";

const Sidebar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSettingElements, setShowSettingElements] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <SidebarLogo></SidebarLogo>
          <span className="fs-4">Navigation</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <span className="  me-2">
                <CiHome />
              </span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-white"
              onClick={(e) => {
                e.preventDefault();
                setShowForm(true);
              }}
            >
              <span className="  me-2">
                <IoIosCreate />
              </span>
              Create post
            </a>
            {showForm && (
              <CreatePost onClose={() => setShowForm(false)}></CreatePost>
            )}
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setShowSettingElements(true)}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setShowProfile(true)}
              >
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showSettingElements && (
        <SettingElements
          onClose={() => setShowSettingElements(false)}
        ></SettingElements>
      )}
      {showProfile && (
        <ProfileElements
          onClose={() => setShowProfile(false)}
        ></ProfileElements>
      )}
    </>
  );
};
export default Sidebar;
