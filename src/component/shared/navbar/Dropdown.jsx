"use client";
import Link from "next/link";
import "./navbar.css";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

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
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logout());
  };
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <CgClose className="menu-close" onClick={toggle} />
      <div className="dropdown-menu">
        <Link href="/" className="dropdown-items">
          Home
        </Link>
        {user?.role === "admin" || user?.role === "trainer" ? (
          <Link href="/dashboard" className="menu-items">
            Dashboard
          </Link>
        ) : (
          <Link href="/my-classes" className="menu-items">
            My Classes
          </Link>
        )}
        <Link href="/classes" className="dropdown-items">
          Classes
        </Link>
        <Link href="/contact" className="dropdown-items">
          Contact
        </Link>
        {!user ? (
          <Link href="/login" className="dropdown-items">
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="btn-login dropdown-items">
            Logout
          </button>
        )}
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
