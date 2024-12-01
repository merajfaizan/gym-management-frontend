"use client";

import { useState, useEffect } from "react";
import "./classes.css";
import classesByDay from "./classesData";
import CLOCK from "../../assets/logos/clock.png";
import COACH from "../../assets/logos/coach2.png";
import Image from "next/image";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";

const Classes = () => {
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    // Set the default active day to be the current day of the week on page load
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    setSelectedDay(currentDayOfWeek);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <NavbarWrapper>
      <section className="classes">
        <h1 className="classes-title">Classes schedule</h1>
        <div className="classes-container">
          <div className="classes-days">
            {Object.keys(classesByDay).map((day) => (
              <button
                className={selectedDay === day ? "active" : ""}
                key={day}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <ul className="classes-list">
            {classesByDay[selectedDay]?.map((classItem, index) => (
              <li
                key={index}
                className="class-info"
                style={{ backgroundImage: `url(${classItem.img})` }}
              >
                <p className="class-name">{classItem.name}</p>
                <Image src={CLOCK} alt="clock" className="class-logo" />
                <p>{classItem.time}</p>
                <Image src={COACH} alt="coach" className="class-logo" />
                <p>{classItem.trainer}</p>
                <button className="reserve-btn">Reserve</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </NavbarWrapper>
  );
};

export default Classes;
