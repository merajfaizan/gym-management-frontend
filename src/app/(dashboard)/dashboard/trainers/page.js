"use client";

import {
  useGetAllTrainersQuery,
  useDeleteTrainerMutation,
} from "@/redux/features/trainerApiSlice";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";


const TrainersPage = () => {
  const {
    data: trainers,
    isLoading,
    isError,
    refetch,
  } = useGetAllTrainersQuery();
  const [deleteTrainer, { isLoading: isDeleting, isError: isDeleteError }] =
    useDeleteTrainerMutation();

  const handleDelete = async (id) => {
    try {
      const response = await deleteTrainer(id).unwrap();
      refetch();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response?.message || "Delete successful!",
      });
    } catch (err) {
      console.log("Error deleting trainer:", err);
    }
  };

  if (isLoading) return <LoadingSpinner />
  if (isError) return <p>Error loading trainers.</p>;

  return (
    <div className="p-5 min-h-screen">
      <h1 className="text-2xl font-bold mb-5">All Trainers</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Avatar</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers?.map((trainer) => (
            <tr key={trainer?._id}>
              <td className="border px-4 py-2">
                <Image
                  src={trainer?.avatar}
                  alt="avatar"
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="border px-4 py-2">{trainer?.name}</td>
              <td className="border px-4 py-2">{trainer?.role}</td>
              <td className="border px-4 py-2">{trainer?.subject}</td>
              <td className="border px-4 py-2">
                <Link href={`/dashboard/trainers/edit/${trainer?._id}`}>
                  <button className="bg-cyan-500 hover:bg-pink-500 transition duration-500 text-white px-4 py-2 rounded-md mr-2">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(trainer?._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isDeleteError && (
        <p className="text-red-500">Failed to delete trainer</p>
      )}
    </div>
  );
};

export default TrainersPage;
