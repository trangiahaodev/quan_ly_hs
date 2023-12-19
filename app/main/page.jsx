import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faCalendarCheck,
    faQuestionCircle,
    faRedo,
    faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const Main = () => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main section */}
            <div className="container mx-auto my-4 px-4 py-4">
                <div className="w-1/3 p-6 rounded-lg bg-white border border-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-blue-500">
                        Bài thi trắc nghiệm
                    </h5>
                    <p className="text-black text-center text-lg font-semibold">
                        Lớp: 9A
                    </p>
                    <ul className="mb-6 mt-4 pb-6 font-normal text-xl text-black">
                        <li className="flex items-center justify-between py-2">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                Thời gian làm bài:
                            </span>
                            <span className="font-semibold">60 phút</span>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCalendarCheck}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                Thời gian vào thi:
                            </span>
                            <span className="font-semibold">
                                20/11/2023 - 15:00
                            </span>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faQuestionCircle}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                Số lượng câu hỏi:
                            </span>
                            <span className="font-semibold">20 câu</span>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faRedoAlt}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                Số lượt làm bài:
                            </span>
                            <span className="font-semibold">
                                Không giới hạn
                            </span>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center w-full">
                        <Link
                            className="bg-blue-500 hover:bg-blue-700 text-white
                        font-bold py-2 px-4 rounded-lg duration-150 w-full text-center"
                            href="/quiz">
                            Bắt đầu bài thi
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
