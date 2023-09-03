import React, { useState } from "react";
import Logo from "../assets/iulogo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <h1> 아이유 공식 팬카페</h1>
          <div class="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Album</Link>
            <Link to="/contact">SignUp</Link>
            <Link to="/hello">Video</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Album</Link>
          <Link to="/contact">SignUp</Link>
          <Link to="/hello">Video</Link>
          <button onClick={toggleNavbar}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
