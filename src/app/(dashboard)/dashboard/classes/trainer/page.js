"use client";

import Image from "next/image";
import { useGetAllClassesWithTraineesQuery  } from "@/redux/features/classApiSlice";
import LoadingSpinner from "@/component/shared/spinner/LoadingSpinner";

const TrainerClasses = () => {
  const { data: classes, error, isLoading } = useGetAllClassesWithTraineesQuery ();

  if (isLoading) return <LoadingSpinner />
  if (error) return <p>Error loading classes.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Scheduled Classes</h1>

      {/* Grid Layout for classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {classes?.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
          >
            <Image
              src={classItem.img}
              alt={classItem.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{classItem.name}</h2>
              <p className="text-gray-600">{classItem.day}</p>
              <p className="text-gray-500">{classItem.time}</p>
            </div>
            <div className="p-4">
              <h1 className="text-xl font-semibold">Trainees</h1>
              <div>
                {classItem.bookedTrainees.length > 0 ? (
                  classItem.bookedTrainees.map((trainee) => (
                    <li className="list-decimal" key={trainee._id}>
                      {trainee.name}
                    </li>
                  ))
                ) : (
                  <p>No trainees have reserved this class.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerClasses;
