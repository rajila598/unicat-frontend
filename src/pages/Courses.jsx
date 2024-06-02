import { Link, useSearchParams } from "react-router-dom";
import CoursesBlog from "../components/CoursesBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_URL } from "../constants/domain";
import { Button, Pagination } from "react-daisyui";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [perPage, setPerPage] = useState(6);
    const [page, setPage] = useState(1);
    const [totalCourseCount, setTotalCourseCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchError, setSearchError] = useState(false);
    const [priceRange, setPriceRange] = useState('');
    let priceFrom;
    let priceTo;
    const args = {
        dataTheme: "light",
    };
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
            name: "Ms. Lucius",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Free",
        },
        {
            image: "assets/images/course_4.jpg",
            title: "Starting a Starup",
            name: "Mr. Charles",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$220",
        },
        {
            image: "assets/images/course_4.jpg",
            title: "Learning basic german fast",
            name: "Mr. John Taylor",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$220",
        },
        {
            image: "assets/images/course_4.jpg",
            title: "Business Groud Up",
            name: "Ms. Lucius",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$220",
        },
        {
            image: "assets/images/course_4.jpg",
            title: "Java Technology",
            name: "Mr. Charles",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$220",
        },
    ];
    const handlePerPageChange = (e) => {
        setPerPage(e.target.value);
    };
    if(priceRange){
        let price = priceRange.split('-').map(Number);
        console.log("----from---",price[0],"----to----", price[1])
        priceFrom = price[0];
        priceTo = price[1];
    }
    useEffect(() => {
        let search = searchParams.get("search") || "";
        axios
            .get(`${VITE_API_URL}/courses?perPage=${perPage}&page=${page}&search=${search}&priceFrom=${priceFrom}&priceTo=${priceTo}`)
            .then((res) => {
                console.log(res.data.data);
                setCourses(res.data.data);
                setTotalCourseCount(res.data.total);
                if(res.data == {}){
                    setSearchError(res)
                    console.log(res);
                }
            })
            .catch((err) => {
                setCourses(coursesData);
                setPerPage(6);
                setPage(1)
                console.log(err);
            });
    }, [perPage, page, searchParams, priceRange]);
    const totalPages = Math.ceil(totalCourseCount / perPage);
    let pageNum = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNum.push(i);
    }
    const handleSearch = (e) => {
        e.preventDefault;
        search = e.target.name.value;
        
    }
    const handlePriceSearch = (e) => {
        e.preventDefault;
        
        setPriceRange(e.target.value);
        // navigate('/courses');
    }
    return (
        <>
            <div className="bg-white">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="xl:min-w-[850px]">
                            {/* search form */}
                            <div className="bg-third p-4 mb-10">
                                <form action="" className="flex flex-col items-center  gap-5 lg:flex-row justify-center" onSubmit={handleSearch}>
                                    <input type="text" placeholder="Search Courses" className="form-input w-60" name="search"/>
                                    <select name="" id="" className="form-input w-60">
                                        <option value="">All Categories</option>
                                        <option value="it">IT & Software</option>
                                        <option value="programming">Programming</option>
                                        <option value="science">Science</option>
                                    </select>
                                    <select className="form-input text-third-2" onChange={handlePriceSearch}>
                                                <option value="">Select Price Type</option>
                                                <option value="0-1000">0-1000</option>
                                                <option value="1000-5000">1000-5000</option>
                                                <option value="5000-10000">5000-10000</option>
                                                <option value="10000-15000">10000-15000</option>
                                            </select>
                                    <div className="btn-div">
                                        <button className="btn-text w-32">Search Now</button>
                                    </div>
                                </form>
                            </div>

                            {/* coursees */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                                {courses.map((el) => {
                                    return (
                                        <CoursesBlog
                                            key={el._id}
                                            image={el.image}
                                            title={el.title}
                                            name={el.createdBy?.name || el.name}
                                            description={el.description}
                                            price={el.price}
                                        />
                                    );
                                })}
                            </div>

                            {/* pagination */}
                            <div className="flex justify-between flex-col lg:flex-row p-4">
                                <Pagination {...args}>
                                    {pageNum.map((el) => (
                                        <Button key={el} className={`join-item ${el === page ? "bg-primary" : ""}`} onClick={() => setPage(el)}>
                                            {el}
                                        </Button>
                                    ))}
                                    
                                    {/* <Button className="join-item ">2</Button>
                                    <Button className="join-item ">3</Button>
                                    <Button className="join-item">4</Button> */}
                                </Pagination>
                                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                                    <p>{`Showing ${(page - 1) * perPage + 1}-${Math.min(
                                        page * perPage,
                                        totalCourseCount
                                    )} of ${totalCourseCount} results: `}</p>
                                    <select name="" id="" className="form-input" onChange={handlePerPageChange}>
                                        <option value="6">6</option>
                                        <option value="12">12</option>
                                        <option value="18">18</option>
                                        <option value="24">24</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar">
                            {/* categories */}
                            <div className="p-3">
                                <p className="title mb-5 text-left">Categories</p>
                                <ul className="sub-title text-left leading-7">
                                    <li>Art & Design</li>
                                    <li>Business</li>
                                    <li>IT & Software</li>
                                    <li>Languages</li>
                                    <li>Programming</li>
                                </ul>
                            </div>
                            {/* latest course */}
                            <div className="p-3">
                                <p className="title text-left mb-5">Latest Courses</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-3">
                                        <img src="/assets/images/course_1.jpg" alt="" className="w-24 h-16" />
                                        <div className="flex flex-col gap-2 justify-center">
                                            <p className="font-bold text-secondary">How to design a Logo</p>
                                            <p className="font-bold text-primary">Free</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <img src="/assets/images/course_1.jpg" alt="" className="w-24 h-16" />
                                        <div className="flex flex-col gap-2 justify-center">
                                            <p className="font-bold text-secondary">How to design a Logo</p>
                                            <p className="font-bold text-primary">Free</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <img src="/assets/images/course_1.jpg" alt="" className="w-24 h-16" />
                                        <div className="flex flex-col gap-2 justify-center">
                                            <p className="font-bold text-secondary">How to design a Logo</p>
                                            <p className="font-bold text-primary">Free</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* instagram */}
                            <div className="p-3">
                                <p className="title text-left mb-5">Instagram</p>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 relative group">
                                        <img src="/assets/images/event_1.jpg" alt="" className="w-full h-full" />
                                        <div className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-60">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tags */}
                            <div className="p-3">
                                <p className="title text-left mb-3">Tags</p>
                                <ul className="text-third-2">
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Creative</Link>
                                    </li>
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Unique</Link>
                                    </li>
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Photography</Link>
                                    </li>
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Ideas</Link>
                                    </li>
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Wordpress</Link>
                                    </li>
                                    <li className="inline-block bg-third px-5 py-2 m-2">
                                        <Link to={"/"}>Startup</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* banner */}
                            <div className="p-3">
                                <div className="relative">
                                    <img src="/assets/images/banner_1.jpg" alt="" className="" />
                                    <div className="flex items-center justify-center flex-col gap-2 absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60">
                                        <p className="text-xl font-bold text-white">Free Book</p>
                                        <div className="btn-div bg-white hover:bg-primary group">
                                            <button type="button" className="btn-text text-primary group-hover:text-white font-normal text-sm">
                                                Download Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
