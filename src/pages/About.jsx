// import Slider from "react-slick";
import Slider from "react-slick";
import Accordians from "../components/Accordians";
import Tutors from "../components/Tutors";
import axios from "axios";
import { VITE_API_URL } from "../constants/domain";
import { useEffect, useState } from "react";

const About = () => {
    const [tutor, setTutor] = useState([]);
    const [userQuery, setUserQuery] = useState([]);
    let tutorData = [
        {
            image: "/assets/images/team_1.jpg",
            name: "Jacke Masito",
            department: "Marketing & Management",
        },
        {
            image: "/assets/images/team_2.jpg",
            name: "William James",
            department: "Designer & Website",
        },
        {
            image: "/assets/images/team_3.jpg",
            name: "John TYler",
            department: "Quantum Mechanics",
        },
        {
            image: "/assets/images/team_4.jpg",
            name: "veronica VAhn",
            department: "Math & physics",
        },
    ];

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/auth/tutor`)
            .then((res) => {
                setTutor(res.data.data);
                console.log(res.data);
            })
            .catch((err) => {
                setTutor(tutorData);
                console.log(err);
            });

        axios
            .get(`${VITE_API_URL}/contact`)
            .then((res) => {
                console.log(res.data, "userinfo");
                setUserQuery(res.data);
                console.log(userQuery, "-----------");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // nextArrow: false,
        // prevArrow: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    speed: 500,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    speed: 500,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    speed: 500,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    let info = [
        {
            image: "/assets/images/course_1.jpg",
            title: "Our Stories",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta dolorem ab possimus assumenda tempora voluptat",
        },
        {
            image: "/assets/images/course_2.jpg",
            title: "Our Mission",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta dolorem ab possimus assumenda tempora voluptat",
        },
        {
            image: "/assets/images/course_4.jpg",
            title: "Our Vision",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta dolorem ab possimus assumenda tempora voluptat",
        },
    ];
    let countData = [
        {
            number: "15",
            text: "Years",
        },
        {
            number: "120K",
            text: "Students",
        },
        {
            number: "670+",
            text: "Books",
        },
        {
            number: "320",
            text: "Courses",
        },
    ];
    let logo = [
        {
            image: "/assets/images/partner_1.png",
        },
        {
            image: "/assets/images/partner_2.png",
        },
        {
            image: "/assets/images/partner_3.png",
        },
        {
            image: "/assets/images/partner_4.png",
        },
        {
            image: "/assets/images/partner_5.png",
        },
        {
            image: "/assets/images/partner_6.png",
        },
    ];

    return (
        <>
            <div className="bg-white">
                <div className="bg-third">
                    <div className="container py-3">
                        <p className="text-third-2">Home. About</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="content">
                        <p className="title">Welcome to Unicat E-Learning</p>
                        <p className="sub-title">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio molestias dolores repellat iusto qui tempora id facere, nesciunt.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {info.map((el) => {
                                return (
                                    <div className="h-auto sm:w-96 lg:w-80 bg-white rounded-md group" key={el._id}>
                                        <img src={el.image} alt="" className="rounded-t-md group-hover:scale-105 transition duration-300" />
                                        <div className="flex flex-col gap-4 p-4">
                                            <p className="card-text">{el.title}</p>
                                            <p className="text-sm text-third-2">{el.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* why choose us */}
                <div
                    className="bg-fixed"
                    style={{
                        backgroundImage: `url('/assets/images/courses_background.jpg')`,
                    }}
                >
                    <div className="content">
                        <p className="title">Why Choose Us</p>
                        <p className="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, odit adipisci possimus tenetur provident molestiae voluptatibus
                            aperiam non optio doloremque! Reprehenderit, laboriosam in. Nulla vel sint veritatis. Repudiandae, voluptas expedita!
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            <div>
                                {userQuery.map((item, index) => {
                                    return <Accordians key={index} name={item.name} message={item.message} />;
                                })}
                            </div>
                            <div className="">
                                <img src="/assets/images/course_2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* best tutors in towsn */}
                <div className="bg-white">
                    <div className="content">
                        <p className="title">The Best Tutors in Town</p>
                        <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus explicabo quasi </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                            {tutor.map((el) => {
                                return <Tutors key={el._id} image={"/assets/images/team_1.jpg"} name={el.name} department={el.department} />;
                            })}
                        </div>
                    </div>
                </div>

                {/*  count */}
                <div
                    className="bg-no-repeat bg-cover bg-fixed drop-shadow-lg"
                    style={{
                        backgroundImage: `url('/assets/images/counter_background.jpg')`,
                    }}
                >
                    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-4 py-14 lg:py-16 justify-center">
                            <p className="text-4xl font-bold text-white">Register</p>
                            <p className="text-white text-sm">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, perferendis possimus? Cumque quo facere ipsam reprehenderit
                                obcaecati cupiditate sunt quas nulla, illo necessitatibus impedit maxime porro ducimus nobis, mollitia modi?
                            </p>
                            <div className="flex justify-between">
                                {countData.map((el) => {
                                    return (
                                        <>
                                            <div>
                                                <p className="text-2xl md:text-4xl text-primary font-bold pb-2">{el.number}</p>
                                                <p className="text-sm md:text-base text-white uppercase">{el.text}</p>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="bg-white sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] h-auto">
                            <form action="" className="flex flex-col gap-5 items-center p-14 lg:p-16">
                                <p className="font-bold text-2xl uppercase">Courses Now</p>
                                <input type="text" placeholder="Your Name" className="form-input w-full sm:w-[400px] md:w-[550px] lg:w-96" />
                                <input type="number" placeholder="Phone" className="form-input w-full sm:w-[400px] md:w-[550px] lg:w-96" />
                                <select className="form-input w-full sm:w-[400px] md:w-[550px] lg:w-96">
                                    <option value="">Choose Subject</option>
                                    <option value="">Subject</option>
                                    <option value="">Subject</option>
                                    <option value="">Subject</option>
                                </select>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                    placeholder="Message"
                                    className="form-input w-full sm:w-[400px] md:w-[550px] lg:w-96"
                                ></textarea>
                                <div className="btn-div">
                                    <button className="btn-text">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* logos */}
                <div className="bg-white py-1">
                    <div className="container my-10">
                        <Slider {...settings}>
                            {logo.map((el) => {
                                return (
                                    <div className="" key={el._id}>
                                        <img src={el.image} alt="hihih" className="" />
                                    </div>
                                );
                            })}
                            {/* </div> */}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
