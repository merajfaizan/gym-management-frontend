"use client";

import "../classes.css";
import { useState, useEffect } from "react";
import { useGetBookedClassesByUserQuery } from "@/redux/features/classApiSlice";
import CLOCK from "../../../assets/logos/clock.png";
import COACH from "../../../assets/logos/coach2.png";
import Image from "next/image";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";

const Classes = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: bookedClasses,
    error,
    isLoading, refetch
  } = useGetBookedClassesByUserQuery(user?._id);

  const [selectedDay, setSelectedDay] = useState("");
  const router = useRouter();

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
    refetch()
  };


  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error loading booked classes.</p>;

  return (
    <NavbarWrapper>
      <section className="classes">
        <h1 className="classes-title">Your Booked Classes</h1>
        <div className="classes-container">
          <div className="classes-days">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <button
                key={day}
                className={selectedDay === day ? "active" : ""}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Display booked classes for the selected day */}
          <ul className="classes-list">
            {bookedClasses.length > 0 &&
              bookedClasses
                .filter((classItem) => classItem.day === selectedDay)
                .map((classItem, index) => (
                  <li
                    key={index}
                    className="class-info"
                    style={{ backgroundImage: `url(${classItem.img})` }}
                  >
                    <p className="class-name">{classItem.name}</p>
                    <Image src={CLOCK} alt="clock" className="class-logo" />
                    <p>{classItem.time}</p>
                    <Image src={COACH} alt="coach" className="class-logo" />
                    <p>{classItem.trainer.name}</p>
                    <button className="reserve-btn" disabled>
                      Details
                    </button>
                  </li>
                ))}
          </ul>
        </div>
      </section>
    </NavbarWrapper>
  );
};

export default Classes;
