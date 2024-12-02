"use client"
import "./membership.css";
import { Fade } from "react-awesome-reveal";
import CLICK from "../../assets/logos/click.png";
import Image from "next/image";

const Membership = () => {
  return (
    <section id="membership">
      <div className="membership-container">
        <Fade bottom triggerOnce="true">
          <h1>
            It&apos;s your time to <span>Gymnasia!</span>
          </h1>
          <h2 className="plans-h2">Membership plans</h2>
        </Fade>

        <Fade bottom triggerOnce="true">
          <div className="membership-cards">
            <div className="membership-card">
              <p className="price">30$</p>
              <p className="per_month">Per month</p>
              <ul>
                <li> - 10 entries</li>
                <li> - Ladies zone</li>
                <li> - Access to boxing gym</li>
              </ul>
              <div className="btn-basic">Basic</div>
            </div>

            <div className="membership-card-strike">
              <p className="price">70$</p>
              <p className="per_month">Per month</p>
              <ul>
                <li> - Unlimited access</li>
                <li> - Ladies zone</li>
                <li> - Access to boxing gym</li>
                <li> - Group lessons</li>
                <li> - Free drinks</li>
                <li> - Gymnasia merchandise</li>
              </ul>
              <div className="btn-strike">Gymnasia</div>
            </div>

            <div className="membership-card">
              <p className="price">50$</p>
              <p className="per_month">Per month</p>
              <ul>
                <li> - 20 entries</li>
                <li> - Ladies zone</li>
                <li> - Access to boxing gym</li>
                <li> - Group lessons</li>
                <li> - Free drinks</li>
              </ul>
              <div className="btn-pro">Pro</div>
            </div>
          </div>
        </Fade>

        <Fade bottom triggerOnce="true">
          <h2 className="voucher-h2">Still not sure?</h2>
          <div className="btn-voucher">
            Get 1 free entry
            <Image src={CLICK} alt="click" className="voucher-click" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Membership;
