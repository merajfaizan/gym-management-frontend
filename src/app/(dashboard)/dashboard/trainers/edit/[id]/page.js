"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useGetTrainerQuery,
  useUpdateTrainerMutation,
} from "@/redux/features/trainerApiSlice";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";


const EditTrainer = () => {
  const { id } = useParams();
  const { data: trainer, isLoading, isError , refetch} = useGetTrainerQuery(id);
  const [
    updateTrainer,
    { isLoading: isUpdating, isError: updateError, error, isSuccess },
  ] = useUpdateTrainerMutation();

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");

  // Get user and token from Redux store
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (trainer) {
      setAvatar(trainer.avatar);
      setName(trainer.name);
      setRole(trainer.role);
      setSubject(trainer.subject);
      setDescription(trainer.description);
      setGender(trainer.gender);
    }
  }, [trainer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user?.role !== "admin") {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "You are not authorized to update trainer details.",
      });
      
      return;
    }

    try {
      const response = await updateTrainer({
        id,
        data: { avatar, name, role, subject, description, gender },
      }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Trainer updated successfully!",
      });
      
      refetch()
    } catch (error) {
      console.log("Error updating trainer:", error);
    }
  };

  if (isLoading) return <LoadingSpinner />
  if (isError) return <p>Error loading trainer details.</p>;

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
          disabled={isUpdating}
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-500"
        >
          {isUpdating ? "Updating..." : "Update Trainer"}
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

export default EditTrainer;
