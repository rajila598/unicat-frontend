/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CoursesBlog from "../components/CoursesBlog";
import Events from "../components/Events";
import Tutors from "../components/Tutors";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { VITE_API_URL } from "../constants/domain";
import axios from "axios";

const Home = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [tutor, setTutor] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchError, setSearchError] = useState(false);
    const [priceRange, setPriceRange] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [userQuery, setUserQuery] = useState("");
    const navigate = useNavigate();
    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div className={`${className} -translate-x-[100px] bg-gray-300 w-8 h-8 rounded-full`} style={{ ...style, display: "block" }} onClick={onClick} />
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div className={`${className} translate-x-[100px] bg-gray-300 rounded-full p-3 w-8 h-8`} style={{ ...style, display: "block" }} onClick={onClick} />
    //     );
    // }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
    };
    let bannerData = [
        {
            image: "/assets/images/banner.jpg",
            title: "The Premium System Education",
            subTitle: "Future of Education Technology",
        },
        {
            image: "/assets/images/banner_1.jpg",
            title: "The Premium System Education",
            subTitle: "Future of Education Technology",
        },
        {
            image: "/assets/images/banner.jpg",
            title: "The Premium System Education",
            subTitle: "Future of Education Technology",
        },
    ];

    let data = [
        {
            image: "/assets/images/setting.png",
            title: "The Experts",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
        },
        {
            image: "/assets/images/book.png",
            title: "Book & Library",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
        },
        {
            image: "/assets/images/code.png",
            title: "Best Courses",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
        },
        {
            image: "/assets/images/award.png",
            title: "Award & Reward",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
        },
    ];
    let coursesData = [
        {
            image: "assets/images/course_1.jpg",
            title: "Software Training",
            name: "Mr. John Taylor",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$130",
        },
        {
            image: "assets/images/course_2.jpg",
            title: "Deploying Mobile Apps",
            name: "Mr. John Taylor",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Free",
        },
        {
            image: "assets/images/course_4.jpg",
            title: "Starting a Starup",
            name: "Mr. John Taylor",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$220",
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
    let eventData = [
        {
            image: "/assets/images/event_1.jpg",
            title: "Which Country handles student dept?",
            time: "15.00-19.00",
            day: "21",
            month: "Aug",
            city: "25 New York City",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quia praesentium.....",
        },
        {
            image: "/assets/images/event_2.jpg",
            title: "Repaying your Students loan(Winter 2017-2018)",
            time: "09.00-17.30",
            day: "27",
            month: "Aug",
            city: "25 Brooklyn city",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quia praesentium.....",
        },
        {
            image: "/assets/images/event_3.jpg",
            title: "Alternative Data and Financial Inclusion",
            time: "13.00-18.30",
            day: "01",
            month: "Sep",
            city: "25 New York City",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quia praesentium.....",
        },
    ];
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
    if (priceRange) {
        let price = priceRange.split("-").map(Number);
        console.log("----from---", price[0], "----to----", price[1]);
        setPriceFrom(price[0]);
        setPriceTo(price[1]);
    }

    useEffect(() => {
        let search = searchParams.get("search") || "";
        axios
            .get(`${VITE_API_URL}/courses?perPage=3&search=${search}&priceFrom=${priceFrom}&priceTo=${priceTo}`)
            .then((res) => {
                setPopularCourses(res.data.data);

                if (res.data == {}) {
                    setSearchError(res);
                    console.log(res);
                }
            })
            .catch((err) => {
                setPopularCourses(coursesData);
                console.log(err);
            });
        axios
            .get(`${VITE_API_URL}/auth/tutor`)
            .then((res) => {
                setTutor(res.data.data);
                console.log(res.data);
            })
            .catch((err) => {
                // setTutor(tutorData);
                console.log(err);
            });
    }, [searchParams, priceRange]);
    const handleSearch = (e) => {
        e.preventDefault;
        search = e.target.name.value;
        navigate("/courses");
    };
    const handlePriceSearch = (e) => {
        e.preventDefault;
        setPriceRange(e.target.value);

        navigate("/courses");
    };
    return (
        <>
            {/* banner */}
            <div className="">
                <Slider {...settings}>
                    {bannerData.map((el) => {
                        return (
                            <>
                                <div
                                    className="bg-cover h-[350px] relative bg-center bg-no-repeat md:h-[600px] flex flex-col gap-4 items-center justify-center"
                                    style={{
                                        backgroundImage: `url('${el.image}')`,
                                    }}
                                >
                                    <p className="text-4xl md:text-6xl text-secondary font-bold text-center">{el.title}</p>
                                    <p className="text-xl md:text-2xl text-third-2 text-center">{el.subTitle}</p>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>

            {/* welcome to unicat */}
            <div className="bg-white">
                <div className="content">
                    <p className="title">Welcome to Unicat E-Learning</p>
                    <p className="sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio molestias dolores repellat iusto qui tempora id facere, nesciunt.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 py-4">
                        {data.map((el) => {
                            return (
                                <>
                                    <div className="flex flex-col gap-2 items-center justify-center bg-white p-5 hover:drop-shadow-2xl hover:transition hover:duration-300">
                                        <div>
                                            <img src={el.image} alt={el.title} />
                                        </div>
                                        <div className="text-xl text-secondary font-bold">{el.title}</div>
                                        <div className="text-third-2 text-center">{el.description}</div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* popular courses */}
            <div
                className="bg-fixed"
                style={{
                    backgroundImage: `url('/assets/images/courses_background.jpg')`,
                }}
            >
                <div className="content">
                    <p className="title">Popular Online Courses</p>
                    <p className="subtitle">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio molestias dolores repellat iusto qui tempora id facere, nesciunt.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4">
                        {popularCourses.map((el) => {
                            return (
                                <Link key={el._id} to={`/courses/${el._id}`}>
                                    <CoursesBlog
                                        key={el._id}
                                        image={el.image}
                                        title={el.title}
                                        name={el.createdBy?.name || el.name}
                                        description={el.description}
                                        price={el.price}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="btn-div">
                        <button className="btn-text" type="button">
                            <Link to={"/courses"}>View All Courses</Link>
                        </button>
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

            {/* upcoming events */}
            <div className="bg-white">
                <div className="content">
                    <p className="title">Upcoming Events</p>
                    <p className="sub-title">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto unde tempore error et officiis minima maxime accusamus quaerat
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
                        {eventData.map((el) => {
                            return (
                                <>
                                    <Events
                                        image={el.image}
                                        title={el.title}
                                        time={el.time}
                                        day={el.day}
                                        month={el.month}
                                        city={el.city}
                                        description={el.description}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Best tutors in town */}
            <div
                className="bg-fixed"
                style={{
                    backgroundImage: `url('/assets/images/courses_background.jpg')`,
                }}
            >
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

            {/* latest news */}
            <div className="bg-white px-12 lg:px-1">
                <div className="content">
                    <p className="title">Latest News</p>
                    <p className="sub-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptatibus enim? Modi, libero beatae atque neque.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
                        <div className="bg-white flex gap-5 flex-col ">
                            <img src="/assets/images/news_1.jpg" alt="" className="rounded-t-md" />
                            <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                            <div className="flex p-1">
                                <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                                <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                            </div>
                            <p className="text-third-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus necessitatibus dolorem beatae voluptas dolorum. Ad
                                temporibus esse rem autem magni quasi!
                            </p>
                            <Link to={"/"} className="underline">
                                Read More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex flex-col gap-5 border-b-2">
                                <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                                <div className="flex p-1">
                                    <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                                    <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 border-b-2">
                                <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                                <div className="flex p-1">
                                    <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                                    <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 border-b-2">
                                <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                                <div className="flex p-1">
                                    <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                                    <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 border-b-2">
                                <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                                <div className="flex p-1">
                                    <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                                    <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* subscribe */}
            <div className="bg-primary">
                <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="text-white">
                        <p className="text-xl text-bold uppercase p-1">sign up for news and offers</p>
                        <p className="text-sm p-1">Subscribe to latest smartphones news & great deals we offer</p>
                    </div>
                    <form action="" className="flex p-6 justify-end">
                        <input type="text" placeholder="Your Email" className="form-input bg-white/50 border-none lg:w-72 rounded-l-md" />
                        <div className="btn-div bg-white rounded-r-md">
                            <button className="btn-text text-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;
