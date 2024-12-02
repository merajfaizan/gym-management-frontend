import React from "react";
import "./footer.css";
import LOGO from "../../../assets/logos/strike.svg";
import INSTAGRAM from "../../../assets/logos/instagram_white.svg";
import YOUTUBE from "../../../assets/logos/youtube_white.png";
import SPOTIFY from "../../../assets/logos/spotify_white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="row1">
          <div className="col1">
            <h3 className="footer-title">
              <span className="footer-underline">Gymnasia gym</span>
            </h3>
            <ul className="footer-text">
              <li>London</li>
              <li>416 Marion drive</li>
              <li>mo - su: 0:00 - 0:00</li>
            </ul>
          </div>

          <div className="col2">
            <h3 className="footer-title">
              <span className="footer-underline">Quick links</span>
            </h3>
            <ul className="footer-text">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/classes">Classes</a>
              </li>
              <li>
                <a href="/pricing">Membership</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row2">
          <div className="col3">
            <Image src={LOGO} alt="Strike" />
            <h3 className="footer-strike-title">Gymnasia fitness</h3>
          </div>
        </div>

        <div className="row3">
          <div className="col4">
            <h3 className="footer-title">
              <span className="footer-underline">Get in touch</span>
            </h3>
            <ul className="footer-text">
              <li>info@Gymnasia.com</li>
              <li>+123 456 789 000</li>
            </ul>
          </div>

          <div className="col5">
            <h3 className="footer-title">
              <span className="footer-underline">Gymnasia socials</span>
            </h3>
            <span></span>
            <ul className="footer-text">
              <Link href="https://www.instagram.com">
                <li>
                  <Image src={INSTAGRAM} alt="Instagram" />
                  Instagram
                </li>
              </Link>
              <Link href="https://www.youtube.com">
                <li>
                  <Image src={YOUTUBE} alt="Youtube" />
                  Youtube
                </li>
              </Link>
              <Link href="https://www.spotify.com">
                <li>
                  <Image src={SPOTIFY} alt="Spotify" />
                  Spotify
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
