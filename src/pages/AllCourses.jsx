import React, { useEffect, useState } from "react";
import { VITE_API_URL } from "../constants/domain";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

const AllCourses = () => {
    // const user = useSelector((store) => store.user.value);
    const user = JSON.parse(localStorage.getItem("user"));
    const [allCourses, setAllCourses] = useState([]);
    const [courses, setCourses] = useState([]);
    const checkCourse = () => {
        if(courses.createdBy?._id === user._id){
            return courses;
        }
    }
    let token = localStorage.getItem("token");
    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/courses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setAllCourses(res.data.data);
                let course = allCourses.filter((el) => (el.createdBy?._id === user._id))
                setCourses(course);
                console.log("tutor courses", course);
                console.log("course data", res.data.data);
                // console.log("created by data", allCourses.createdBy);
            });
    }, []);
    
    return (
        <>
            <div className="bg-white">
                <div className="container">
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
                                                    <FaTrash />
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

export default AllCourses;
