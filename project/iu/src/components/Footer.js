import React from "react";
import { Instagram, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Facebook />
        <Twitter />
        <LinkedIn />
      </div>
      <p>&copy; made by Tae-Wook Kim</p>
    </div>
  );
}
export default Footer;
