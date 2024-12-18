import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import axios from "axios";
axios.defaults.withCredentials = true;

const DashboardTop = () => {
  const handleLogout = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/admin-auth/logout`,
      null,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        setTimeout(() => window.location.replace("/login"), 500);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/update-login"
        className="bg-slate-500 py-1 px-5 rounded-lg flex justify-center items-center cursor-pointer text-white font-semibold"
      >
        Update Login
      </Link>
      <div
        onClick={handleLogout}
        className="impact py-1 px-5 h-max rounded-lg flex justify-center items-center cursor-pointer text-white font-semibold"
      >
        Logout
      </div>
    </div>
  );
};

export default DashboardTop;
