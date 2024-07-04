import axios from "axios";
import { useEffect } from "react";
import { VITE_API_URL } from "../constants/domain";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post(`${VITE_API_URL}/contact`, {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    message: e.target.message.value,
                })
                .then((res) => {
                    setIsSubmitting(false);
                    toast("Form Submitted");
                });
        } catch (err) {
            console.log(err);
        }
    };
    // useEffect(() => {
    //     axios.get(`${VITE_API_URL}/api/contact`).then((res) => {
    //         console.log(res.data); //??? res.data.?k auncha
    //         // setContactInfo()
    //     });
    // });
    return (
        <>
            <div className="bg-white">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.006694747377!2d85.32330429999999!3d27.7172346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19042204f6a1%3A0xa7af95e7f7d75e66!2sHotel%20Yak%20%26%20Yeti!5e0!3m2!1sen!2snp!4v1712209332457!5m2!1sen!2snp"
                    // width="600"
                    // height="450"
                    // style="border:0;"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-96 lg:h-[450px]"
                ></iframe>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
                        <div>
                            <p className="title mb-6 text-left">Contact Form</p>
                            <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-input" name="name" />
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-input" name="email" />
                                <label htmlFor="">Message</label>
                                <textarea name="message" id="" cols="30" rows="5" className="form-input"></textarea>
                                <div className="btn-div w-48">
                                    <button className="btn-text" type="submit">
                                        Submit Now
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="px-16">
                            <p className="title mb-10 text-left">Contact Info</p>
                            <p className="text-third-2 text-sm leading-6">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a distribution of letters.
                            </p>
                            <p className="text-lg text-secondary my-5 font-bold">New York Office</p>
                            <ul className="text-sm text-third-2 leading-8">
                                <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                                <li>1-234-567-89011</li>
                                <li>info.deercreative@gmail.com</li>
                            </ul>
                            <p className="text-lg text-secondary my-5 font-bold">Australia Office</p>
                            <ul className="text-sm text-third-2 leading-8">
                                <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                                <li>1-234-567-89011</li>
                                <li>info.deercreative@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
