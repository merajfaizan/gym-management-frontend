"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import Footer from "../footer/Footer";

const NavbarWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer />
    </>
  );
};

export default NavbarWrapper;
