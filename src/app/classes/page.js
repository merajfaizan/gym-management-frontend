"use client";

import "./classes.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  useGetClassesByDayQuery,
  useReserveClassMutation,
} from "@/redux/features/classApiSlice";
import CLOCK from "../../assets/logos/clock.png";
import COACH from "../../assets/logos/coach2.png";
import Image from "next/image";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";
import { useSelector } from "react-redux";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";

const Classes = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const { data: classesByDay, error, isLoading } = useGetClassesByDayQuery();
  const [reserveClass] = useReserveClassMutation();
  const { user } = useSelector((state) => state.auth);

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

  const handleReserve = async (classId) => {
    if (!user?._id) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "You must be logged in to reserve a class.",
      });

      return;
    }

    try {
      const response = await reserveClass({
        classId,
        userId: user._id,
      }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.data?.message || "Failed to reserve class. Please try again.",
      });
    }
  };

  if (isLoading) return <LoadingSpinner />
  if (error) return <p>Error loading classes.</p>;

  return (
    <NavbarWrapper>
      <section className="classes">
        <h1 className="classes-title">Classes schedule</h1>
        <div className="classes-container">
          <div className="classes-days">
            {Object.keys(classesByDay || {}).map((day) => (
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
                <p>{classItem.trainer.name}</p>
                <button
                  className="reserve-btn"
                  onClick={() => handleReserve(classItem._id)}
                >
                  Reserve
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
