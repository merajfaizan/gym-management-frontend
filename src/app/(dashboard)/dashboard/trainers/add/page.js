"use client";

import { useAddTrainerMutation } from "@/redux/features/trainerApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


const AddTrainer = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("trainer");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("male");

  const [addTrainer, { isLoading, isError, isSuccess, error }] =
    useAddTrainerMutation();

  // Get user and token from Redux store
  const { user, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user?.role !== "admin") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "You are not authorized to add a trainer.",
      });
      return;
    }

    try {
      const response = await addTrainer({
        avatar,
        name,
        role,
        subject,
        description,
        gender,
      }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Trainer added successfully!",
      });

      setAvatar("");
      setName("");
      setRole("trainer");
      setSubject("");
      setDescription("");
      setGender("male");
    } catch (err) {
      console.error("Error adding trainer:", err);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Add Trainer</h1>
      <form
        className="flex flex-col gap-4 bg-gray-100 p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        {/* Avatar Field */}
        <div>
          <label htmlFor="avatar" className="block text-lg font-semibold">
            Avatar URL
          </label>
          <input
            id="avatar"
            type="url"
            placeholder="Enter avatar image URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter trainer's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Role Field */}
        <div>
          <label htmlFor="role" className="block text-lg font-semibold">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-lg font-semibold">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Enter subject (e.g., Yoga)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-lg font-semibold">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter a brief description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Gender Field */}
        <div>
          <label htmlFor="gender" className="block text-lg font-semibold">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-500"
        >
          {isLoading ? "Submitting..." : "Add Trainer"}
        </button>
        {isError && (
          <p className="text-red-500">
            {error?.data?.message || "Error occurred"}
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500">Trainer added successfully!</p>
        )}
      </form>
    </div>
  );
};

export default AddTrainer;
