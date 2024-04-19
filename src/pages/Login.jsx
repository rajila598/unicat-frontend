import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email === "" || password === "") {
            toast.error("All fields are required");
        } else {
            toast.success("Logged in successfully");
            navigate("/");
        }
       
    };
    return (
        <>
            <div className="">
                <div className="container flex justify-center mb-10">
                    <div className="w-[600px] p-4">
                        <p className="title mb-5">Login</p>
                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-input" name="email"/>
                            <label htmlFor="">Password</label>
                            <input type="text" className="form-input" name="password"/>
                            <div className="btn-div">
                                <button className="btn-text" type="submit">Login</button>
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
