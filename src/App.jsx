import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import HomePage from "./pages/home/index.jsx";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/globals/NavBar.jsx";
import Footer from "./components/globals/Footer.jsx";
import LoginPage from "./pages/auth/login/index.jsx";
import DashboardPage from "./pages/dashboard/index.jsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
