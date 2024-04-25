import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_API_URL } from "../constants/domain";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../app/slice/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${VITE_API_URL}/auth/login`, {
            email: e.target.email.value,
            password: e.target.password.value
        }).then(res => {
            toast("Login Successfull")
            navigate('/')
            // console.log(res.data.user);
            dispatch(setUser(res.data.user))
            localStorage.setItem("token", res.data.token)
        }).catch(err => {
            console.log(err);
            toast.error("failed")
        }) 
       
       
    };
    return (
        <>
            <div className="bg-white pb-1">
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
