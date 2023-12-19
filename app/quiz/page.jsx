"use client";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import data from "../database/data";

import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";

const Quiz = () => {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];

  useEffect(() => {
    console.log(data);
  });

  const onSelect = () => {
    console.log("Radio button changed");
  };

  const renderQuestion = () => {
    return question.options.map((value, index) => {
      return (
        <div className="py-3 pl-8 rounded-full border border-zinc-400 shadow-lg h-max flex items-center hover:border-blue-500 hover:text-blue-500 transition-all">
          <input
            key={index}
            type="radio"
            defaultValue={false}
            name="options"
            id={`question_${index}`}
            className={`peer/question_${index} border-4 border-blue-500 rounded-full w-5 h-5 mr-3`}
            onChange={onSelect()}
          />
          <label
            htmlFor={`question_${index}`}
            className={`peer-checked/question_${index}:text-blue-500`}>
            {value}
          </label>
        </div>
      );
    });
  };

  return (
    <div className="">
      {/* Header */}
      <Header />

      <div className="container mx-auto">
        {/* Progress bar */}
        {/* <div className="progress_bar bg-cyan-500 h-20 text-white text-lg text-center">
                    Progress bar
                </div> */}

        {/* Timer */}
        <div className="my-8 flex justify-center">
          <CountdownTimer />
        </div>

        {/* Display questions */}
        <div className="question_section container mx-auto">
          <div className="header__question mb-5">
            <h1 className="text-2xl font-bold">{`Câu hỏi - ${question.id}`}</h1>
            <p className="text-lg">{question.question}</p>
          </div>
          <div
            key={question.id}
            className="multiple__question grid grid-cols-2 gap-2 mb-4 h-full w-full">
            {renderQuestion()}
          </div>
        </div>

        {/* Next/Prev buttons */}
        <div className="navigate_button flex justify-between">
          <button className="bg-gray-600 text-lg text-white rounded-lg py-2 px-3">
            Câu trước
          </button>
          <button className="bg-gray-600 text-lg text-white rounded-md py-2 px-3">
            Câu sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
