/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={`${className} -translate-x-[100px] bg-gray-300 w-8 h-8 rounded-full`} style={{ ...style, display: "block" }} onClick={onClick} />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={`${className} translate-x-[100px] bg-gray-300 rounded-full p-3 w-8 h-8`} style={{ ...style, display: "block" }} onClick={onClick} />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let bannerData = [
        {
            image: "/assets/images/banner.jpg",
            title: "The Premium System Education",
            subTitle: "Future of Education Technology",
        },
        {
            image: "/assets/images/banner.jpg",
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
                                    <div className="flex gap-3 flex-col md:flex-row items-center">
                                        <form className="flex flex-col sm:flex-row">
                                            <input type="type" placeholder="keyword search" className="p-1 md:p-2" />
                                            <select className="p-1 md:p-2 text-third-2">
                                                <option value="">Category Courses</option>
                                                <option value="">Category</option>
                                                <option value="">Category</option>
                                            </select>
                                            <select className="p-1 md:p-2 text-third-2">
                                                <option value="">Select Price Type</option>
                                                <option value="">Price Type</option>
                                                <option value="">Price Type</option>
                                            </select>
                                        </form>
                                        <div className="w-28 bg-primary text-center rounded-sm">
                                            <button type="button" className="text-white p-2 font-bold">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>

            {/* welcome to unicat */}
            <div className="bg-white">
                <div className="container flex flex-col gap-4 justify-center items-center py-8">
                    <p className="text-2xl md:text-3xl font-bold text-secondary text-center">Welcome to Unicat E-Learning</p>
                    <p className="text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio molestias dolores repellat iusto qui tempora id facere, nesciunt.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 py-4">
                        {data.map((el) => {
                            return (
                                <>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div>
                                            <img src={el.image} alt={el.title} />
                                        </div>
                                        <div className="text-xl text-secondary">{el.title}</div>
                                        <div className="text-third-2 text-center">{el.description}</div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
