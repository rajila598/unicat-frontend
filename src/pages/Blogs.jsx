import Blog from "../components/Blog";

const Blogs = () => {
    let blogData = [
        {
            image: "/assets/images/news_1.jpg",
        },
        {
            image: "",
        },
        {
            image: "/assets/images/news_1.jpg",
        },
        {
            image: "/assets/images/news_1.jpg",
        },
        {
            image: "",
        },
    ];
    return (
        <>
            <div className="bg-white h-auto">
                <div className="container py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {blogData.map((el) => {
                            return <Blog key={el._id} image={el.image} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
