"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useGetTrainerQuery,
  useUpdateTrainerMutation,
} from "@/redux/features/trainerApiSlice";

const EditTrainer = ({ id }) => {
  const { data: trainer, isLoading, isError } = useGetTrainerQuery(id);
  const [updateTrainer, { isLoading: isUpdating, isError: updateError, isSuccess }] =
    useUpdateTrainerMutation();

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");

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
      alert("You are not authorized to update trainer details.");
      return;
    }

    try {
      const response = await updateTrainer({ id, data: { avatar, name, role, subject, description, gender } }).unwrap();
      alert("Trainer updated successfully!", response);
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading trainer details.</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Edit Trainer</h1>
      <form className="flex flex-col gap-4 bg-gray-100 p-5 rounded-md" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="avatar">Avatar URL</label>
          <input id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Trainer"}
        </button>
        {updateError && <p>Error updating trainer.</p>}
        {isSuccess && <p>Trainer updated successfully!</p>}
      </form>
    </div>
  );
};

export default EditTrainer;
