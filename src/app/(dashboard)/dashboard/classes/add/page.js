"use client";

import { useState } from "react";
import { useGetAllTrainersQuery } from "@/redux/features/trainerApiSlice";
import { useAddClassMutation } from "@/redux/features/classApiSlice";
import Swal from "sweetalert2";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";


const ScheduleClass = () => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    trainer: "",
    img: "",
    day: "",
    bookedTrainees: [],
  });

  const { data: trainers, isLoading: isTrainersLoading } =
    useGetAllTrainersQuery();
  const [addClass, { isLoading: isAdding }] = useAddClassMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateTime = (time) => {
    const timePattern =
      /^[0-9]{1,2}:[0-9]{2}\s?(AM|PM|am|pm)\s-\s[0-9]{1,2}:[0-9]{2}\s?(AM|PM|am|pm)$/;
    return timePattern.test(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateTime(formData.time)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Invalid time format. Use 'HH:MM AM - HH:MM PM'",
      });
      return;
    }

    try {
      await addClass(formData).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Class scheduled successfully!",
      });
      setFormData({
        name: "",
        time: "",
        trainer: "",
        img: "",
        day: "",
        bookedTrainees: [],
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.data?.message || "Class reserved successfully!",
      });
    }
  };

  if (isTrainersLoading) return <LoadingSpinner />;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-5 rounded shadow"
    >
      <h1 className="text-2xl font-bold mb-5">Schedule a New Class</h1>

      <label className="block mb-3">
        Class Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Class Name ex: yoga, boxing, etc."
          className="ring ring-gray-200 w-full px-3 py-2 rounded"
          required
        />
      </label>

      <label className="block mb-3">
        Time (HH:MM AM - HH:MM PM):
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="8:00 AM - 10:00 AM"
          className="ring ring-gray-200 w-full px-3 py-2 rounded"
          required
        />
      </label>

      <label className="block mb-3">
        Trainer:
        <select
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          className="ring ring-gray-200 w-full px-3 py-2 rounded"
          required
        >
          <option value="">Select Trainer</option>
          {trainers?.map((trainer) => (
            <option key={trainer._id} value={trainer._id}>
              {trainer.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-3">
        Image URL:
        <input
          type="url"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="ring ring-gray-200 w-full px-3 py-2 rounded"
        />
      </label>

      <label className="block mb-3">
        Day:
        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="ring ring-gray-200 w-full px-3 py-2 rounded"
          required
        >
          <option value="">Select Day</option>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={isAdding}
        className="bg-cyan-500 text-white px-4 py-2 w-full mt-5 rounded hover:bg-cyan-700"
      >
        {isAdding ? "Scheduling..." : "Schedule Class"}
      </button>
    </form>
  );
};

export default ScheduleClass;
