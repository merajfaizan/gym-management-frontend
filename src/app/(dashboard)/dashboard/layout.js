import ProtectedRoute from "@/component/shared/ProtectedRoute";
import Sidebar from "../../../component/shared/sidebar/Sidebar";

const AdminDashboard = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex flex-row bg-white text-black">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 min-h-screen bg-gray-100">{children}</div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
