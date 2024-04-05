import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="">
                <div className="container flex justify-center mb-10">
                    <div className="w-[600px] p-4">
                        <p className="title mb-5">Login</p>
                        <form action="" className="flex flex-col gap-5">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-input" />
                            <label htmlFor="">Password</label>
                            <input type="text" className="form-input" />
                            <div className="btn-div">
                                <button className="btn-text">Login</button>
                            </div>
                        </form>
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link to={"/register"} className="text-secondary underline hover:text-primary">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
