"use client"
import "./hero.css";
import DUMBBELL from "../../assets/logos/dumbbell.png";
import COACH from "../../assets/logos/coach.png";
import HANDSHAKE from "../../assets/logos/handshake.png";
import FEMALE from "../../assets/logos/female.png";
import BOXING from "../../assets/logos/boxing.png";
import OPENING_HOURS from "../../assets/logos/opening_hours.png";
import BOXING_CLASS from "../../assets/photos/boxing.jpeg";
import POWER_CLASS from "../../assets/photos/strength.jpeg";
import SPINNING_CLASS from "../../assets/photos/spinning.jpeg";
import YOGA_CLASS from "../../assets/photos/yoga.jpeg";
import POWER_ICON from "../../assets/logos/strength.png";
import BOXING_ICON from "../../assets/logos/boxing2.png";
import SPINNING_ICON from "../../assets/logos/spinning.png";
import YOGA_ICON from "../../assets/logos/yoga.png";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
      <Fade bottom triggerOnce="true">
        <h1 className="h1-cards">
          Why choose <span className="cyan">us?</span>
        </h1>
      </Fade>
      <Fade bottom triggerOnce="true">
        <div className="hero-cards">
          <div className="hero-card">
            <Image src={DUMBBELL} alt="dumbbell" />
            <h2>Modern gyms</h2>
            <p>
              Modern and clean equipment. For the best workout experience
              possible.
            </p>
          </div>

          <div className="hero-card">
            <Image src={COACH} alt="coach" />
            <h2>Pro team</h2>
            <p>
              Our coaches are experts in their field. Ready to help you achieve
              your goals.
            </p>
          </div>

          <div className="hero-card">
            <Image src={HANDSHAKE} alt="handshake" />
            <h2>Group lessons</h2>
            <p>
              Experience the energy of a group session. Every single day in a
              week.
            </p>
          </div>
          <div className="hero-card">
            <Image src={FEMALE} alt="female" />
            <h2>Ladies zone</h2>
            <p>
              Your comfort is our priority. Ladies only zone in all of our gyms.
            </p>
          </div>

          <div className="hero-card">
            <Image src={BOXING} alt="boxing" />
            <h2>Boxing gym</h2>
            <p>
              Boxing part in both of our gyms. With all the equipment needed.
            </p>
          </div>

          <div className="hero-card">
            <Image src={OPENING_HOURS} alt="opening hours" />
            <h2>Open 24/7</h2>
            <p>Gym session at 2AM on Sunday? Sounds good to us.</p>
          </div>
        </div>
      </Fade>
      </div>

      <div className="hero-classes-container">
      <Fade bottom triggerOnce="true">
        <h1 className="h1-classes">
          Together we <span className="pink">achieve!</span>
        </h1>
        <h2 className="h2-classes">
          Group classes
        </h2>
        </Fade>

        <Fade bottom triggerOnce="true">
        <div className="hero-classes">
          <div className="class-grid-item">
            <Image className="class-img" src={POWER_CLASS} alt="POWER" />
            <div className="overlay">
              <div className="overlay-content">
                <Image className="class-icon" src={POWER_ICON} alt="POWER-ICON" />
                <h2>POWER</h2>
                <Link href="/classes">
                  <button className="class-btn">Details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="class-grid-item">
          <Image className="class-img" src={BOXING_CLASS} alt="BOXING" />
            <div className="overlay">
              <div className="overlay-content">
                <Image className="class-icon" src={BOXING_ICON} alt="BOXING-ICON" />
                <h2>BOXING</h2>
                <Link href="/classes">
                  <button className="class-btn">Details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="class-grid-item">
          <Image className="class-img" src={SPINNING_CLASS} alt="SPINNING" />
            <div className="overlay">
              <div className="overlay-content">
                <Image className="class-icon" src={SPINNING_ICON} alt="SPINNING-ICON" />
                <h2>SPINNING</h2>
                <Link href="/classes">
                  <button className="class-btn">Details</button>
                 </Link>
              </div>
            </div>
          </div>

          <div className="class-grid-item">
          <Image className="class-img" src={YOGA_CLASS} alt="YOGA" />
            <div className="overlay">
              <div className="overlay-content">
                <Image className="class-icon" src={YOGA_ICON} alt="YOGA-ICON" />
                <h2>YOGA</h2>
                <Link href="/classes">
                  <button className="class-btn">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
