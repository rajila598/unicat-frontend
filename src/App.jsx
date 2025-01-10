import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpsertCourses from "./pages/UpsertCourses";
import AllCourses from "./pages/AllCourses";
import { useEffect, useState } from "react";
// import { VITE_API_URL } from "./constants/domain";
import { useDispatch } from "react-redux";
import { setUser } from "./app/slice/userSlice";
import axios from "axios";
import { RingLoader } from "react-spinners";
import MyCourses from "./pages/MyCourses";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const VITE_API_URL = "https://unicat-backend.onrender.com";
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            axios
                .get(`${VITE_API_URL}/auth/tutor`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setIsLoading(false);
                    dispatch(setUser(res.data));
                })
                .catch((err) => {
                    toast.error("Error");
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);
    const [isUser, setIsUser] = useState(null);
    return (
        <>
            {isLoading ? (
                <div className="bg-third flex items-center justify-center h-screen">
                    <RingLoader color="#14BDEE" size={84}/>
                </div>
            ) : (
                <>
                    <Header user={isUser} setUser={setIsUser} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="courses/:_id" element={<CourseDetails />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="blog" element={<Blogs />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />

                        <Route path="" element={<ProtectedRoute role={"tutor"} />}>
                            <Route path="/allcourses" element={<AllCourses />} />
                            <Route path="/mycourses" element={<MyCourses />} />
                            <Route path="add" element={<UpsertCourses />} />
                            <Route path="edit/:_id" element={<UpsertCourses />} />
                        </Route>
                    </Routes>
                    <Footer />
                </>
            )}

            <ToastContainer />
        </>
    );
};

export default App;
