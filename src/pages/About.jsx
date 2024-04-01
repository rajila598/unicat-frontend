import Tutors from "../components/Tutors";

const About = () => {
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
    return (
        <>
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
                        <div className="h-auto sm:w-96 lg:w-80 bg-white rounded-md group">
                            <img src="/assets/images/course_1.jpg" alt="" className="rounded-t-md" />
                            <div className="flex flex-col gap-4 p-4">
                                <p className="card-text">Our Stories</p>
                                <p className="text-sm text-third-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta dolorem ab possimus assumenda tempora voluptate
                                    laudantium ut expedita?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* best tutors in towsn */}
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
                        {tutorData.map((el) => {
                            return <Tutors key={el._id} image={el.image} name={el.name} department={el.department} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
