"use client"

import { useSelector } from "react-redux";

const Dashboard = () => {
  const {user} = useSelector(state => state?.auth)
  return (
    <div className="bg-gray-100 w-full p-5 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to the {user?.role} Dashboard</h1>
      <p className="mt-4">Manage your users, view reports, and more.</p>
    </div>
  );
};

export default Dashboard;
