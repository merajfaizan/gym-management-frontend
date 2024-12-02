"use client";

import { logout } from "../../../redux/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="relative w-auto h-screen p-5 flex flex-col justify-between">
      {/* Top section for Dashboard */}
      <div className="text-2xl text-center">
        <Link href={"/dashboard"}>
          <span className="font-bold text-black">Dashboard</span>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 flex-grow">
        {/* Manage Trainers Section */}
        {user?.role == "admin" && (
          <>
            <div>
              <p className="text-xl font-bold">Manage Trainers:</p>
            </div>
            <ul className="flex flex-col gap-y-5">
              <Link href={"/dashboard/trainers"}>
                <li className="text-lg block mt-2 text-black bg-gray-100 p-2 rounded-lg">
                  View Trainers
                </li>
              </Link>
              <Link href={"/dashboard/trainers/add"}>
                <li className="text-lg block mt-2 text-black bg-gray-100 p-2 rounded-lg">
                  Add Trainers
                </li>
              </Link>
            </ul>
          </>
        )}

        {/* Classes Section */}
        {user?.role == "admin" && (
          <>
            <div>
              <p className="text-xl font-bold">Classes:</p>
            </div>
            <ul className="flex flex-col gap-y-5">
              <Link href={"/dashboard/classes"}>
                <li className="text-lg block mt-2 text-black bg-gray-100 p-2 rounded-lg">
                  View Classes
                </li>
              </Link>
              <Link href={"/dashboard/classes/add"}>
                <li className="text-lg block mt-2 text-black bg-gray-100 p-2 rounded-lg">
                  Schedule Class
                </li>
              </Link>
            </ul>
          </>
        )}
        {user?.role == "trainer" && (
          <div>
            <div>
              <p className="text-xl font-bold">Classes:</p>
            </div>
            <Link href={"/dashboard/classes/trainer"}>
              <li className="text-lg block mt-2 text-black bg-gray-100 p-2 rounded-lg ">
                My Classes
              </li>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom section for Logout and Go Back buttons */}
      <div className="mt-auto flex flex-col gap-y-5 w-full">
        <Link href="/">
          <button className="text-lg font-bold mb-4 w-full p-2 bg-cyan-500 text-white rounded mt-5">
            Go Back to Home
          </button>
        </Link>
        <button
          className="text-lg font-bold w-full py-2 bg-pink-500 text-white rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
