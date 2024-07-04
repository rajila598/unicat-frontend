import { useEffect, useState } from "react";
import { VITE_API_URL } from "../constants/domain";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpsertCourses = () => {
    const { _id } = useParams();
    let initialValue = {
        title: "",
        price: "",
        category: [""],
        description: "",
        image: null,
    };
    const [data, setData] = useState(initialValue);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [text, setText] = useState("Add");
    console.log(_id);
    useEffect(() => {
        if (_id) {
            setText("Edit");
            axios
                .get(`${VITE_API_URL}/courses/${_id}`)
                .then((res) => {
                    const courseData = res.data;
                    // Ensure category is an array
                    if (!Array.isArray(courseData.category)) {
                        courseData.category = [""]; // or [] or any default array
                    }
                    setData(courseData);
                    console.log(courseData);
                })
                .catch((err) => {
                    toast.error("something is wrong");
                });
        }
    }, [_id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("image", data.image);
        data.category.forEach((cat) => {
            formData.append("category", cat);
        });

        setIsSubmitting(true);
        let url = `${VITE_API_URL}/courses`;
        let method = "post";
        if (_id) {
            method = "put";
            url = `${VITE_API_URL}/courses/` + _id;
        }
        axios[method](url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setIsSubmitting(false);
                toast("Course Created");
                setData(initialValue);
            })
            .catch((err) => {
                setIsSubmitting(false);
                if (err.response?.status == 400) {
                    let errObj = {};
                    err.response.data.errors.forEach((el) => {
                        errObj[el.field] = el.msg;
                    });
                    setValidationErrors(errObj);
                }
                console.log(err.response.data.errors);
                toast.error("something wrong");
            });
    };
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.type == "file" ? e.target.files[0] : e.target.value,
        });
    };
    const handleCategoryChange = (e, index) => {
        let temp = data.category.map((el, idx) => {
            if (index == idx) {
                return e.target.value;
            }
            return el;
        });
        setData({
            ...data,
            category: temp,
        });
    };
    const addCategory = (el) => {
        let temp = [...data.category];
        temp.push("");
        setData({ ...data, category: temp });
    };
    const deleteCategory = (index) => {
        let temp = [...data.category];
        temp.splice(index, 1);
        setData({
            ...data,
            category: temp,
        });

        toast("deleted");
    };
    let categories = data.category;
    return (
        <>
            <div className="bg-white">
                <div className="container  flex justify-center pb-10">
                    <div className="w-[600px]">
                        <p className="title p-8">{text} Courses</p>
                        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <label htmlFor="">Course Title</label>
                            <input type="text" className="form-input" name="title" value={data.title} onChange={handleChange} />
                            {validationErrors && <span className="text-sm text-red-500">{validationErrors.title}</span>}

                            <label htmlFor="">Description</label>
                            <input type="text" className="form-input" name="description" value={data.description} onChange={handleChange} />
                            {validationErrors && <span className="text-sm text-red-500">{validationErrors.description}</span>}

                            <label htmlFor="">Category</label>
                            <div className="btn-div w-32">
                                <button type="button" className="btn-text" onClick={addCategory}>
                                    Add
                                </button>
                            </div>
                            {data.category.map((el, index) => {
                                return (
                                    <div className="flex" key="el._id">
                                        <input
                                            type="text"
                                            value={el}
                                            className="form-input"
                                            name="category"
                                            onChange={(e) => {
                                                handleCategoryChange(e, index);
                                            }}
                                        />
                                        <div className="btn-div">
                                            <button
                                                type="button"
                                                className="btn-text"
                                                onClick={() => {
                                                    deleteCategory(index);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                            <label htmlFor="">Price</label>
                            <input type="text" className="form-input" name="price" value={data.price} onChange={handleChange} />
                            {validationErrors && <span className="text-sm text-red-500">{validationErrors.price}</span>}

                            <label htmlFor="">Image</label>
                            <input type="file" className="form-input" name="image" onChange={handleChange} />
                            {validationErrors && <span className="text-sm text-red-500">{validationErrors.image}</span>}
                            <div className="btn-div">
                                <button className="btn-text" type="submit">
                                    Add Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpsertCourses;
