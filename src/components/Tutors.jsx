import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";

const Tutors = ({image, name, department}) => {
    return (
        <>
            <div className="relative w-full sm:w-96 lg:w-72">
                <div className="flex justify-center relative -mb-[70px]">
                    <img src={image} alt="" className="rounded-md" />
                </div>
                <div className="flex flex-col gap-3 justify-center bg-white shadow-2xl text-center p-8 pt-20">
                    <p className="card-text">{name}</p>
                    <p className="text-third-2 text-sm">{department}</p>
                    <div className="flex gap-4 items-center text-third-2 justify-center">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaGooglePlusG className="text-2xl" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tutors;
