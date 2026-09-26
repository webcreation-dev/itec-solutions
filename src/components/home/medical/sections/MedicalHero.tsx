"use client";
import MedicalHeroTeamItem from "../components/MedicalHeroTeamItem";
import { MedicalButtonArrow, VideoPlayIconSix } from "@/svg";
import { useVideoModal } from "@/providers/VideoProvider";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { useState } from "react";
import Image from "next/image";

const panels = [
  {
    img: "/assets/img/hero/md/thumb-2.jpg",
    team: {
      title: "Orthopaedic Surgeon",
      role: "Doctor",
    },
  },
  {
    img: "/assets/img/hero/md/thumb-3.jpg",
    team: {
      title: "Cardiologist",
      role: "Specialist",
    },
  },
  {
    img: "/assets/img/hero/md/thumb.jpg",
    team: {
      title: "Neurologist",
      role: "Consultant",
    },
  },
];

const MedicalHero = () => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();
    // default active
    const [activeIndex, setActiveIndex] = useState(0);

    const headingColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const paragraphColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const heroBg = isDark ? "/assets/img/hero/md/bg-black.jpg" : "/assets/img/hero/md/bg.jpg";
    const playIconFill = isDark ? "currentColor" : "#F3F1F2";

    return (
        <div className="tp-hero-area pre-header tp-hero-md-spacing bg-position" style={{ backgroundImage: `url('${heroBg}')` }}>
            <div className="container-fluid container-1824 containers">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="tp-hero-md-content p-relative mb-40">
                            <span className={`tp-ff-dm fw-500 fs-20 fs-xs-17 ls-m-3 mb-20 d-inline-block ${headingColor}`}>Your Health, Our Priority</span>
                            <h2 className={`tp-hero-md-title tp-ff-familjen fs-92 fs-lg-100 fs-md-80 fs-sm-70 fs-xs-50 lh-1 ls-m-3 mb-25 ${headingColor}`}>
                                Healing <Image className="img-fluid" src="/assets/img/hero/md/shape.png" alt="Healing shape" width={97} height={87} /> hands caring hearts.
                            </h2>
                            <p className={`tp-hero-md-para tp-ff-dm fs-24 fs-xl-22 lh-140-per ls-m-3 opacity-8 mb-45 ${paragraphColor}`}>
                                We combine advanced medical expertise with genuine<br /> compassion to ensure you receive.
                            </p>
                            <div className="tp-hero-md-btn d-flex align-items-center">
                                <SmartLink href="/contact" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                    <span className="mr10 td-text d-inline-block mr-5">Contact Us</span>
                                    <span className="tp-arrow-angle">
                                        <MedicalButtonArrow />
                                    </span>
                                </SmartLink>
                                <div className="tp-hero-video d-flex align-items-center">
                                    <button onClick={() => { playVideo("go7QYaQR494") }} className="tp-hero-video-btn tp-hero-md-video-btn popup-video mr-15">
                                        <span>
                                            <VideoPlayIconSix fillColor={playIconFill} />
                                        </span>
                                    </button>
                                    <p className={`tp-hero-md-video-text tp-ff-dm lh-110-per mb-0 fw-600 fs-16 opacity-8 ${headingColor}`}>Watch Our Video</p>
                                </div>
                            </div>
                            <Image className="tp-hero-md-shape tp-live-anim-spin" src="/assets/img/hero/md/virus.png" alt="Virus shape" width={104} height={104} />
                        </div>
                    </div>
                    <div className="col-xl-6 mb-40">
                        <div className="tp-hero-md-row-custom">
                            {panels.map((panel, i) => (
                                <MedicalHeroTeamItem
                                    key={i}
                                    img={panel.img}
                                    index={i}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    title={panel.team.title}
                                    role={panel.team.role}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalHero;
