"use client";
import { useState } from "react";
import Tab from "./Tab";

export default function Tabs ({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="flex justify-center space-x-4">
                {children.map((tab, index) => (
                    <Tab
                        key={index}
                        title={tab.props.title}
                        isActive={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    />
                ))}
            </div>
            <div className="mt-8">
                {children.map((tab, index) => (
                    <div key={index} className={activeTab === index ? "block" : "hidden"}>
                        {tab.props.children}
                    </div>
                ))}
            </div>
        </div>
    );
};

