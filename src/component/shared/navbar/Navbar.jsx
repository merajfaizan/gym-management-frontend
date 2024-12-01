"use client";

import { useState, useEffect } from "react";
import "./navbar.css";
import LOGO from "../../../assets/logos/strike.svg";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbarColor] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(user, token);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground); // Cleanup event listener
    };
  });

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logout());
    router.push("/login");
  };

  return (
    <nav className={navbar ? "navbar-active-color" : "navbar"}>
      <HiMenu className="menu-bars" onClick={toggle} />
      <Link href="/dashboard" className="menu-items">
        Dashboard
      </Link>
      <Link href="/classes" className="menu-items">
        Classes
      </Link>
      <Link href="/">
        <Image src={LOGO} alt="strike" className="strike" />
      </Link>
      <Link href="/contact" className="menu-items">
        Contact
      </Link>
      {user ? (
          <div onClick={handleLogout} className="btn-login">Logout</div>
      ) : (
        <Link href="/login" className="">
          <div className="btn-login">Login</div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
