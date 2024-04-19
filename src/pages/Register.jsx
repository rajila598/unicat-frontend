import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target.uname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let repassword = e.target.repassword.value;

        if (name === "" || email === "" || password === "" || repassword === "") {
            toast.error("All fields are required");
        } else {
            toast.success("Signed in successfully");
            navigate("/login");
        }
       
    };

    return (
        <>
            <div className="">
                <div className="container flex justify-center mb-10">
                    <div className="w-[600px] p-4">
                        <p className="title mb-5">Register</p>
                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-input" name="uname" />
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-input" name="email" />
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-input" name="password" />
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" className="form-input" name="repassword" />
                            <div className="btn-div">
                                <button className="btn-text" type="submit">
                                    Register
                                </button>
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
