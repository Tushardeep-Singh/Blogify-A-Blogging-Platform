// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  // get url
  const location = useLocation();
  // Use to disable the Link for the page we are currently onn
  const isActive = (path) => location.pathname === path;
  
  return (
    <Fragment>
      <nav className="navbar">
        {/* Navbar links */}
        <Link
          to="/"
          className={`navbar-link navbar-link-home ${
            isActive("/") ? "disabled" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/NewPost.js"
          className={`navbar-link navbar-link-post ${
            isActive("/NewPost.js") ? "disabled" : ""
          }`}
        >
          Post a Blog
        </Link>
        <Link
          to="/PostPage.js"
          className={`navbar-link navbar-link-stories ${
            isActive("/PostPage.js") ? "disabled" : ""
          }`}
        >
          Stories
        </Link>
        <Link
          to="/About.js"
          className={`navbar-link navbar-link-about ${
            isActive("/About.js") ? "disabled" : ""
          }`}
        >
          Connect
        </Link>
      </nav>
    </Fragment>
  );
};
