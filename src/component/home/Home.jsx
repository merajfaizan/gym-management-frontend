"use client"
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Membership from "../membership/Membership";
import Playlist from "../playlist/Playlist";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Fade triggerOnce="true">
        <Header />
      </Fade>
      <Hero />
      <Membership />
      <Fade bottom triggerOnce="true">
        <Playlist />
      </Fade>
    </>
  );
};

export default Home;
