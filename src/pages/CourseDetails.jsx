import React, { useEffect, useState } from "react";
import { Accordion } from "react-daisyui";
import ReactStars from "react-rating-stars-component";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { VITE_API_URL } from "../constants/domain";

const CourseDetails = () => {
    const [currentTab, setCurrentTab] = useState("DESCRIPTION");

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    let tabs = ["description", "curriculum"];
    const args = {
        icon: "arrow",
    };
    useEffect(() => {
        axios.get(`${VITE_API_URL}/courses/${_id}`)
        .then(res => {
            console.log(res);
        })
    })
    return (
        <>
            <div className="bg-white">
                <div className="container flex gap-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="max-w-[640px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[600px] xl:max-w-[850px]">
                            <div className="title text-left pb-10">Software Training</div>
                            <div className="bg-third flex flex-col lg:flex-row gap-3 lg:justify-around p-5">
                                <div className="">
                                    <p className="font-bold text-secondary">Teacher:</p>
                                    <p className="text-sm text-secondary">Jacke Masito</p>
                                </div>
                                <div className="lg:border-x-third-2 lg:border-x-2 lg:px-16">
                                    <p className="font-bold text-secondary">Reviews:</p>
                                    <p>
                                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#14BDEE" />
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-secondary">Categories:</p>
                                    <p className="text-sm text-secondary">Language</p>
                                </div>
                            </div>
                            <div className="my-4">
                                <img src="/assets/images/course_1.jpg" alt="" />
                            </div>
                            <div className="">
                                <ul className="flex gap-2 capitalize">
                                    {tabs.map((el) => {
                                        return (
                                            <li
                                                key={el._id}
                                                className={`hover:cursor-pointer p-2 ${
                                                    currentTab === el.toUpperCase() ? "text-white bg-primary" : "text-third-2 bg-third"
                                                }`}
                                                onClick={() => {
                                                    setCurrentTab(el.toUpperCase());
                                                }}
                                            >
                                                {el}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className={`${currentTab === "DESCRIPTION" ? "block" : "hidden"}`}>
                                <div className="p-2">
                                    <p className="title text-left">Software Training</p>
                                    <p>description</p>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea voluptate corporis. Magnam expedita consectetur debitis, cupiditate quasi odio sed, fugiat minus pariatur doloribus suscipit nihil, error cum tenetur eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi minima nulla et cupiditate! Ipsa sed itaque distinctio? Inventore, modi magni sequi velit cupiditate vitae asperiores voluptatem libero eum accusamus?</p>
                                </div>
                            </div>
                            <div className={`${currentTab === "CURRICULUM" ? "block" : "hidden"}`}>
                                <div className="p-2">
                                    <p className="title text-left">Software Training</p>

                                    <div className="">
                                        <div className="flex flex-wrap gap-2 text-secondary">
                                            <Accordion {...args} defaultChecked>
                                                <Accordion.Title className="text-xl font-medium flex gap-2 items-center">
                                                    <IoDocumentTextOutline />
                                                    Lecture 1
                                                </Accordion.Title>
                                                <Accordion.Content>
                                                    <Accordion.Title className="text-lg font-medium">Lecture 1.1</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                    <hr />
                                                    <Accordion.Title className="text-lg font-medium">Lecture 1.2</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                </Accordion.Content>
                                                <hr />
                                            </Accordion>
                                            <hr />
                                            <Accordion {...args}>
                                                <Accordion.Title className="text-xl font-medium flex gap-2 items-center">
                                                    <IoDocumentTextOutline />
                                                    Lecture 2
                                                </Accordion.Title>
                                                <Accordion.Content>
                                                    <Accordion.Title className="text-lg font-medium">Lecture 2.1</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                    <hr />
                                                    <Accordion.Title className="text-lg font-medium">Lecture 2.2</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                </Accordion.Content>
                                                <hr />
                                            </Accordion>
                                            <hr />
                                            <Accordion {...args}>
                                                <Accordion.Title className="text-xl font-medium flex gap-2 items-center">
                                                    <IoDocumentTextOutline />
                                                    Lecture 3
                                                </Accordion.Title>
                                                <Accordion.Content>
                                                    <Accordion.Title className="text-lg font-medium">Lecture 3.1</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                    <hr />
                                                    <Accordion.Title className="text-lg font-medium">Lecture 3.2</Accordion.Title>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint qui enim quod recusandae aliquid,
                                                        dolores vel deleniti quia doloribus reprehenderit fugit eveniet in nesciunt rerum magnam aliquam iusto
                                                        eos!
                                                    </p>
                                                </Accordion.Content>
                                                <hr />
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="title text-left pb-4">Course Features</p>
                            <p className="text-2xl text-primary">$180</p>
                            <div className="flex flex-col gap-3 py-5">
                                <div className="flex justify-between">
                                    <div className="flex gap-2 items-center">
                                        <FaRegClock className="text-primary" />
                                        <p className="text-primary">Duration:</p>
                                    </div>
                                    <p>2 weeks</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-2 items-center">
                                        <IoDocumentTextOutline className="text-primary" />
                                        <p className="text-primary">Lectures:</p>
                                    </div>
                                    <p>20</p>
                                </div>
                            </div>
                            <p className="title text-left">Tutor</p>
                            <div className="flex gap-2 py-3">
                                <img src="/assets/images/team_1.jpg" alt="" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-secondary text-xl font-semibold">Jackie Masito</p>
                                    <p className="">Department</p>
                                </div>
                            </div>
                            <div className="text-justify">Hi, I am Jackie Masito. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum natus qui iure, molestiae asperiores modi nam incidunt quidem, esse, quas minima assumenda in repellendus quaerat odit voluptate libero! Exercitationem.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;
