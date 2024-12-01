import React from "react";
import "./header.css";
import INSTAGRAM from "../../assets/logos/instagram.svg";
import YOUTUBE from "../../assets/logos/youtube.svg";
import SPOTIFY from "../../assets/logos/spotify.svg";
import Image from "next/image";
import Link from "next/link";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <Link href="https://www.instagram.com" target="__blank">
        <Image src={INSTAGRAM} alt="instagram" />
      </Link>
      <Link href="https://www.youtube.com" target="__blank">
        <Image src={YOUTUBE} alt="youtube" />
      </Link>
      <Link href="https://www.spotify.com" target="__blank">
        <Image src={SPOTIFY} alt="spotify" />
      </Link>
    </div>
  );
};

export default HeaderSocials;
