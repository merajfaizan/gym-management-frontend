"use client";

import Image from "next/image";
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
    router.push("/login");
  };

  return (
    <div className="relative w-auto h-screen p-5 flex flex-col justify-between">
      {/* Top section for Dashboard */}
      <div className="text-2xl text-center">
        <span className="font-bold">Dashboard</span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 flex-grow">
        {/* Manage Trainers Section */}
        <div>
          <p className="text-xl font-bold">Manage Trainers:</p>
        </div>
        <ul>
          <Link href={"/dashboard/trainers"}>
            <li className="text-lg">View Trainers</li>
          </Link>
          <Link href={"/dashboard/trainers/add"}>
            <li className="text-lg">Add Trainers</li>
          </Link>
        </ul>

        {/* Classes Section */}
        <div>
          <p className="text-xl font-bold">Classes:</p>
        </div>
        <ul>
          <Link href={"/dashboard/classes"}>
            <li className="text-lg">View Classes</li>
          </Link>
          <Link href={"/dashboard/classes/add"}>
            <li className="text-lg">Schedule Class</li>
          </Link>
        </ul>
      </div>

      {/* Bottom section for Logout and Go Back buttons */}
      <div className="mt-auto">
        <Link href="/">
          <button
            className="text-lg font-bold mb-4 w-full py-2 bg-cyan-500 text-white rounded mt-5"
          >
            Go Back to Home
          </button>
        </Link>
        <button
          className="text-lg font-bold w-full py-2 bg-pink-500 text-white rounded mt-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
