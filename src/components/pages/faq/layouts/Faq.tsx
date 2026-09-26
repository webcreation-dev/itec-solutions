"use client";

import React from "react";
import FaqSection from "./components/FaqSection";
import FaqBanner from "./components/FaqBanner";
import FaqTextSlider from "./components/FaqTextSlider";

const Faq = () => {
    return (
        <main>
            <FaqSection />
            <FaqBanner />
            <FaqTextSlider />
        </main>
    );
};

export default Faq;