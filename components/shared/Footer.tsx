import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-3 md:gap-0 bg-white justify-between p-4 md:px-10">
      <Logo />
      <p>2024 EventSpark. &copy; All Rights reserved.</p>
    </footer>
  );
};

export default Footer;
