import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="">
                <div className="container flex justify-center mb-10">
                    <div className="w-[600px] p-4">
                        <p className="title mb-5">Register</p>
                        <form action="" className="flex flex-col gap-5">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-input" />
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-input" />
                            <label htmlFor="">Password</label>
                            <input type="text" className="form-input" />
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" className="form-input" />
                            <div className="btn-div">
                                <button className="btn-text">Register</button>
                            </div>
                        </form>
                        <p>
                            Already have an account?{" "}
                            <Link to={"/login"} className="text-secondary underline hover:text-primary">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
