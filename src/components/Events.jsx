
import { GoClock, GoLocation } from "react-icons/go";
const Events = ({image, title, time, day, month, city, description}) => {
    return (
        <>
            <div className="h-auto sm:w-96 lg:w-80 bg-white rounded-md group">
                <img src={image} alt="" className="rounded-t-md" />
                <div className="flex gap-3 py-4">
                    <div className="w-20 h-12 bg-white shadow-md flex flex-col justify-center items-center text-primary text-sm">
                        <p>{day}</p>
                        <p>{month}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="card-text">{title}</p>
                        <div className="flex justify-between text-gray-300 text-sm">
                            <div className="course-blog-flex">
                                <GoClock />
                                <p>{time}</p>
                            </div>

                            <div className="course-blog-flex">
                                <GoLocation />
                                <p>{city}</p>
                            </div>
                        </div>
                        <p className="text-third-2 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
