"use client";
import MedicalFaqItem from "../components/MedicalFaqItem";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { MedicalButtonArrow } from "@/svg";
import Atropos from 'atropos/react';
import Image from "next/image";
import 'atropos/css'

const faqs = [
    {
        id: "order__collapse_one",
        headerId: "order_one",
        question: "What are your clinic hours?",
        isOpen: true,
    },
    {
        id: "order__collapse_two",
        headerId: "order_two",
        question: "Is there a mobile app available?",
        isOpen: false,
    },
    {
        id: "order__collapse_three",
        headerId: "order_three",
        question: "What insurance plans do you accept?",
        isOpen: false,
    },
];

const MedicalFaq = () => {
    const isDark = useIsDarkRoute();
    const subtitleColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const faqThumb = isDark ? "/assets/img/faq/md/thumb-dark.png" : "/assets/img/faq/md/thumb.png";

    const answer = (
        <p>
            Branding is the process of creating a unique identity for your
            business, <b>including visuals, messaging, and positioning.</b> It helps
            build trust, recognition.
        </p>
    );
    return (
        <div className="tp-faq-area pt-145 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-30">
                        <div className="tp-faq-md-title-wrap mb-30">
                            <span className={`tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 d-inline-block mb-10 ${subtitleColor}`}>Clarity in Every Question</span>
                            <h2 className={`tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 mb-20 ${titleColor}`}>Your health questions, clearly answered.</h2>
                        </div>
                        <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-md-tab-content mb-40">
                            <div className="accordion mb-60" id="general_faqaccordion">
                                {faqs.map((item) => (
                                    <MedicalFaqItem
                                        key={item.id}
                                        id={item.id}
                                        headerId={item.headerId}
                                        question={item.question}
                                        isOpen={item.isOpen}
                                        parentId="general_faqaccordion"
                                        answer={answer}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="tp-faq-md-btn tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                            <SmartLink href="/faq-2" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                <span className="mr10 td-text d-inline-block mr-5">Browse FAQs</span>
                                <span className="tp-arrow-angle">
                                    <MedicalButtonArrow />
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-faq-md-thumb text-lg-end p-relative mb-30">
                            <Atropos
                                className="my-atropos"
                                shadow={false}
                                highlight={false}
                                rotate={true}
                            >
                                <Image
                                    className="img-fluid"
                                    src={faqThumb}
                                    alt="thumb"
                                    width={581}
                                    height={680}
                                />
                            </Atropos>
                            <Image
                                className="tp-faq-md-shape upslide img-fluid"
                                src="/assets/img/faq/md/shape.png"
                                alt="shape"
                                width={158}
                                height={173}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalFaq;
