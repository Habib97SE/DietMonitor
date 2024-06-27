"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function FAQ() {

    const [openIndexes, setOpenIndexes] = useState(new Set());

    const faqData = [
        {
            question: "What is the universe?",
            answer: "The universe is the entirety of all objects and spaces that exist in time and space. It is the largest known system and is believed to be approximately 13.8 billion years old.",
        },
        {
            question: "What is dark matter?",
            answer: "Dark matter is a form of matter that cannot be seen directly but can be inferred by its influence on galaxy formation and the speed of star rotation. It is believed to make up 27% of the total mass of the universe.",
        },
        {
            question: "What is the Big Bang?",
            answer: "The Big Bang is the event that marked the beginning of the universe, approximately 13.8 billion years ago. It is believed to have been a moment when the entire universe rapidly expanded from an infinitely dense and hot point.",
        },
        {
            question: "What is dark energy?",
            answer: "Dark energy is a form of energy that cannot be seen directly but can be inferred by its influence on the universe's expansion. It is believed to make up 68% of the total energy of the universe.",
        },
        {
            question: "What is the cosmic horizon?",
            answer: "The cosmic horizon is the farthest limit that can be seen from Earth. It is the most distant point visible due to the universe's expansion and the speed of light. All stars and galaxies beyond this point are beyond human sight.",
        },
    ];

    const toggleOpen = (index) => {
        const newOpenIndexes = new Set(openIndexes);
        if (newOpenIndexes.has(index)) {
            newOpenIndexes.delete(index);
        } else {
            newOpenIndexes.add(index);
        }
        setOpenIndexes(newOpenIndexes);
    };

    return (
        <div className="accordion-container max-w-xl mx-auto w-full">
            <h2 className={"text-center text-xl font-bold my-3"}>
                Frequently Asked Questions
            </h2>
            <p
                className={"text-center text-gray-600 mb-4"}
            >
                Here are some common questions about the universe and its mysteries.
            </p>
            {faqData.map((item, index) => (
                <details
                    key={index}
                    open={openIndexes.has(index)}
                    onToggle={() => toggleOpen(index)}
                    className="border-b border-gray-300 mb-4"
                >
                    <summary className="cursor-pointer flex justify-between items-center p-4 bg-gray-100">
            <span className="accordion-title text-lg font-medium">
              {item.question}
            </span>
                        <span className="accordion-icon">
              <MdOutlineKeyboardArrowDown
                  className={`w-6 h-6 transform transition-transform ${
                      openIndexes.has(index) ? "rotate-180" : ""
                  }`}
              />
            </span>
                    </summary>
                    <div className="accordion-content p-4 text-gray-700">
                        {item.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}