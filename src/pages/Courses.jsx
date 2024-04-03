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
                        <div className="">
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
                        <div className="sidebar"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
