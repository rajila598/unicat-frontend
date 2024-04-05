import { Link } from "react-router-dom";
import CoursesBlog from "../components/CoursesBlog";

const Courses = () => {
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
    return (
        <>
            <div>
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="xl:min-w-[850px]">
                            {/* search form */}
                            <div className="bg-third p-4 mb-10">
                                <form action="" className="flex flex-col items-center  gap-5 lg:flex-row justify-center">
                                    <input type="text" placeholder="Search Courses" className="form-input w-60" />
                                    <select name="" id="" className="form-input w-60">
                                        <option value="">All Categories</option>
                                        <option value="">Categories</option>
                                        <option value="">Categories</option>
                                        <option value="">Categories</option>
                                    </select>
                                    <div className="btn-div">
                                        <button className="btn-text w-32">Search Now</button>
                                    </div>
                                </form>
                            </div>

                            {/* coursees */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                                {coursesData.map((el) => {
                                    return (
                                        <CoursesBlog
                                            key={el._id}
                                            image={el.image}
                                            title={el.title}
                                            name={el.name}
                                            description={el.description}
                                            price={el.price}
                                        />
                                    );
                                })}
                            </div>

                            {/* pagination */}
                            <div className="flex justify-between flex-col lg:flex-row p-4">
                                <div className="flex gap-2">
                                    <div className="border w-10 h-8 p-1 text-center bg-primary">1</div>
                                    <div className="border w-10 h-8 p-1 text-center">2</div>
                                    <div className="border w-10 h-8 p-1 text-center">3</div>
                                    <div className="border w-10 h-8 p-1 text-center">n</div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                                    <p>Showing 1-6 of 6 results: </p>
                                    <select name="" id="" className="form-input">
                                        <option value="">6</option>
                                        <option value="">12</option>
                                        <option value="">18</option>
                                        <option value="">24</option>
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
