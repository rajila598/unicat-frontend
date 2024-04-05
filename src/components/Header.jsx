import { MdEmail, MdLocalPhone, MdSearch } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="">
                {/* top-header */}
                <div className="bg-primary w-full h-full hidden lg:block">
                    <div className="container">
                        <div className="flex justify-between">
                            {/* top-content */}
                            <ul className=" flex items-center gap-4 h-12 text-white">
                                <li>Have any questions?</li>
                                <li className="flex gap-2 items-center">
                                    <MdLocalPhone />
                                    <p>001-1234-88888</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <MdEmail />
                                    <p>info.deercreative@gmail.com</p>
                                </li>
                            </ul>
                            {/* login-link */}
                            <Link to={"/login"} className="flex h-12 bg-third px-3 items-center w-28 justify-center">
                                <p>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* second header */}
                <div className="bg-white w-full h-full">
                    <div className={`${isMenuOpen ? "container" : "container"} lg:container`}>
                        <div className="flex justify-between">
                            <div className="logo h-24 flex items-center">
                                <Link to={"/"}>
                                    <p className="text-secondary text-4xl font-bold">
                                        Unic<span className="text-primary">at</span>
                                    </p>
                                </Link>
                            </div>
                            {/* header-content */}
                            <div className="flex gap-10 items-center relative h-auto">
                                <ul
                                    className={`${
                                        isMenuOpen ? "flex absolute top-0 -left-14" : "hidden"
                                    } flex-col gap-5 items-end bg-third pt-16 w-32 h-screen lg:pt-0 lg:bg-white lg:relative lg:w-auto lg:h-auto lg:flex lg:flex-row lg:gap-4 lg:items-center`}
                                >
                                    <FaTimes
                                        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}
                                        onClick={() => {
                                            setIsMenuOpen((prev) => !prev);
                                        }}
                                    />
                                    <form action="post" className={`${isMenuOpen ? "block" : "hidden"} w-24 lg:hidden`}>
                                        <input type="text" placeholder="search" className="w-24" />
                                    </form>
                                    <Link to={"/"} className="text-lg font-medium text-secondary active:text-primary active:underline">
                                        <li>Home</li>
                                    </Link>
                                    <Link to={"/about"} className="text-lg font-medium text-secondary">
                                        <li>About</li>
                                    </Link>
                                    <Link to={"/courses"} className="text-lg font-medium text-secondary">
                                        <li>Courses</li>
                                    </Link>
                                    <Link to={"/blog"} className="text-lg font-medium text-secondary">
                                        <li>Blog</li>
                                    </Link>

                                    <Link to={"/contact"} className="text-lg font-medium text-secondary">
                                        <li>Contact</li>
                                    </Link>
                                </ul>
                                <div className="flex gap-3 items-center text-2xl">
                                    <MdSearch className="hidden lg:block" />

                                    <GiHamburgerMenu
                                        className="lg:hidden text-2xl"
                                        onClick={() => {
                                            setIsMenuOpen((prev) => !prev);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
