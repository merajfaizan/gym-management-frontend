"use client";
import Link from "next/link";
import "./navbar.css";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: var(--transition);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <CgClose className="menu-close" onClick={toggle} />
      <div className="dropdown-menu">
        <Link href="/" className="dropdown-items">
          Home
        </Link>
        <Link href="/dashboard" className="dropdown-items">
          Dashboard
        </Link>
        <Link href="/classes" className="dropdown-items">
          Classes
        </Link>
        <Link href="/contact" className="dropdown-items">
          Contact
        </Link>
        <Link href="/login" className="dropdown-items">
          Login
        </Link>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
