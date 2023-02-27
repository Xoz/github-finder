import React from "react";
import { FaHtml5 } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaHtml5 />

        <p>Copyright &copy; {footerYear} ozmen.io All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
