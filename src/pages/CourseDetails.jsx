import React from "react";

const CourseDetails = () => {
    return (
        <>
            <div className="bg-white">
                <div className="container flex gap-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="xl:min-w-[850px]">
                            <div className="title text-left pb-10">Software Training</div>
                            <div className="bg-third flex flex-col gap-3 p-4">
                                <div className="">
                                    <p className="font-bold text-secondary">Teacher:</p>
                                    <p className="text-sm text-secondary">Jacke Masito</p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-secondary"></p>
                                    <p></p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-secondary"></p>
                                    <p className="text-sm text-secondary">Language</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;
