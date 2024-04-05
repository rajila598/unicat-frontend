import { Link } from "react-router-dom";

const Blog = ({ image }) => {
    return (
        <>
            <div
                className={`${
                    !image ? "row-span-1" : "row-span-2"
                } drop-shadow-xl rounded-md group sm:w-full lg:w-80 xl:w-96 h-auto m-2 hover:drop-shadow-2xl hover:transition-all hover:duration-300`}
            >
                <div className="bg-white">
                    <img src={image} alt="" className="rounded-t-md" />
                    <div className="p-6 flex gap-5 flex-col">
                        <p className="card-text">Here&apos;s what you need to know about online testing for the ACT and SAT</p>
                        <div className="flex p-1">
                            <p className="text-sm uppercase text-gray-400 border-r px-1 border-third-2">Admin</p>
                            <p className="text-sm uppercase text-gray-400 px-1">November 11, 2017</p>
                        </div>
                        <p className="text-third-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus necessitatibus dolorem beatae voluptas dolorum.
                        </p>
                        <Link to={"/"} className="underline text-secondary hover:text-primary">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
