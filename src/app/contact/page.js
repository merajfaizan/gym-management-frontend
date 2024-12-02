"use client";

import "./contact.css";
import LOCATION_CYAN from "../../assets/logos/location-cyan.png";
import PHONE_CYAN from "../../assets/logos/phone-cyan.png";
import EMAIL_CYAN from "../../assets/logos/email-cyan.png";
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png";
import CHEVRON from "../../assets/logos/chevron-up.png";
import Image from "next/image";
import Link from "next/link";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";
import { useGetAllTrainersQuery } from "@/redux/features/trainerApiSlice";
import classNames from "classnames";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";

const Contact = () => {
  const { data: trainers, isLoading, error } = useGetAllTrainersQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error fetching trainers: {error.message}</p>;

  return (
    <NavbarWrapper>
      <div className="container">
        <section id="contact">
          <h1 className="contact-title">Reach out to us!</h1>
          <div className="contact-container">
            <div className="contact-london">
              <h2>London gym</h2>
              <ul>
                <li>
                  <Image src={LOCATION_CYAN} alt="location" />
                  416 Marion Drive
                </li>
                <li>
                  <Image src={PHONE_CYAN} alt="phone" />
                  +123 456 789 000
                </li>
                <li>
                  <Image src={EMAIL_CYAN} alt="email" />
                  info@gymnasia.com
                </li>
                <li>
                  <Image src={CLOCK_CYAN} alt="clock" />
                  MO - SU: 0:00 - 0:00
                </li>
              </ul>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="contact-form-bg">
                <div className="contact-form">
                  <div className="first-row">
                    <div className="name">
                      <p className="input-text">Full name</p>
                      <input type="text" name="fullName" required />
                    </div>

                    <div className="email">
                      <p className="input-text">Email</p>
                      <input type="text" name="email" required />
                    </div>
                  </div>
                  <div className="second-row">
                    <p className="input-text">Your message</p>
                    <textarea
                      className="message"
                      name="message"
                      rows="8"
                      required
                    ></textarea>
                  </div>
                  <button className="send-btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section id="team">
          <h1 className="team-title">Meet the team</h1>
          <div className="team-container">
            {trainers?.map(
              ({ _id, avatar, name, role, description, gender }) => {
                const className_name = classNames({
                  male: gender === "male",
                  female: gender === "female",
                });

                return (
                  <div key={_id} className={`team-card ${className_name}`}>
                    <div className="img-box">
                      <Image
                        className="avatar rounded-full"
                        src={avatar}
                        alt={`${name}'s avatar`}
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3 className="role">{role}</h3>
                    <div className="content-box">
                      <Image
                        src={CHEVRON}
                        className="chevron"
                        alt="chevron"
                        width={20}
                        height={20}
                      />
                      <h2 className="name">{name}</h2>
                      <div className="description-box">
                        <p className="description">{description}</p>
                      </div>
                      <Link href="/">Book a lesson</Link>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>
    </NavbarWrapper>
  );
};

export default Contact;
