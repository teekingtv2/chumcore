import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import HomePage from "./pages/home/index.jsx";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/globals/NavBar.jsx";

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
