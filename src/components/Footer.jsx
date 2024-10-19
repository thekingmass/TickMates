import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      click on the item to mark them as completed or vice versa <br />©{" "}
      {currentYear} &nbsp; Mass
    </div>
  );
}

export default Footer;
