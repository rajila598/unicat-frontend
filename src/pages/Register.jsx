import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { VITE_API_URL } from "../constants/domain";

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${VITE_API_URL}/auth/signup`, {
            name: e.target.uname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            repassword: e.target.repassword.value,
            role: e.target.role.value,
        }).then(res => {
            console.log(res);
            toast("signed in successfully")
            navigate('/login');
        }).catch(err => {
            let errMsg = ""
            err.response.data.errors.forEach(el => {
                errMsg += `${el.params}: ${el.msg}`
            })
            toast.error(errMsg);
        });
        

        
    };

    return (
        <>
            <div className="bg-white pb-1">
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
                            <label htmlFor="">Role</label>
                            <input type="text" className="form-input" name="role" />
                            <div className="btn-div">
                                <button className="btn-text">
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
