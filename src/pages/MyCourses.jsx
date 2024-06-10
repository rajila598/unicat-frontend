import React, { useEffect, useState } from "react";
import { VITE_API_URL } from "../constants/domain";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MyCourses = () => {
    // const user = useSelector((store) => store.user.value);
    const user = JSON.parse(localStorage.getItem("user"));
    const [courses, setCourses] = useState([]);
    const checkCourse = () => {
        if (courses.createdBy?._id === user._id) {
            return courses;
        }
    };
    let token = localStorage.getItem("token");
    const handleDelete = (_id) => {
        axios.delete(`${VITE_API_URL}/courses/${_id}`).then((res) => {
            toast("sucessfully deleted");
        });
    };
    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/courses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                let allCourses = res.data.data;
                let course = allCourses.filter((el) => el.createdBy?._id === user._id);
                setCourses(course);
                console.log("tutor courses", course);
                console.log("course data", res.data.data);
                // console.log("created by data", allCourses.createdBy);
            });
    }, []);

    return (
        <>
            <div className="bg-white py-8">
                <div className="container">
                    <div className="btn-div w-52 my-5">
                        <button className="btn-text">
                            <Link to={"/add"}>Add Courses</Link>
                        </button>
                    </div>
                    <table className="pt-5 w-full text-secondary pb-5">
                        <thead>
                            <tr>
                                <th className="border border-secondary px-4 py-2">Title</th>
                                <th className="border border-secondary px-4 py-2">Price</th>
                                <th className="border border-secondary px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((el) => {
                                return (
                                    <>
                                        <tr>
                                            <td className="border border-secondary px-4 py-2">{el.title}</td>
                                            <td className="border border-secondary px-4 py-2">{el.price}</td>
                                            <td className="border border-secondary  px-4 py-2">
                                                <div className="flex gap-4">
                                                    <Link to={`/edit/${el._id}`}>
                                                        <MdEdit />
                                                    </Link>
                                                    <FaTrash onClick={handleDelete(el._id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyCourses;
