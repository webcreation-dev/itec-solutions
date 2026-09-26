"use client";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import { HeroShapeIcon, VideoPlayIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const SeoAgencyHero = () => {
    // Access the playVideo function from the VideoContext
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();
    const backgroundImage = isDark
        ? "/assets/img/update/hero/seo/hero-bg-2.png"
        : "/assets/img/update/hero/seo/hero-bg.png";
    return (
        <div className="al-hero-seo-area al-hero-seo-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="al-hero-seo-title-box mb-35 text-center">
                            <h2 className="al-hero-seo-title mb-20">
                                Secure your websites with cloud-based{" "}
                                <span className="p-relative">
                                    platform
                                    <span className="al-hero-seo-title-line d-none d-md-block tp_fade_anim" data-delay=".7">
                                        <HeroShapeIcon />
                                    </span>
                                </span>.
                            </h2>
                            <p className="tp_fade_anim">
                                These tools can help you reach your target audience, improve your {`website's`} <br />
                                visibility, and track your results.
                            </p>
                        </div>
                        <div className="al-hero-seo-btn-box mb-40 text-center tp_fade_anim" data-delay=".5">
                            <Link className="al-btn-blue mb-20 mr-10" href="/contact">Get Free Analysis</Link>
                            <button className="al-hero-seo-playbtn popup-video mb-20"
                                onClick={(e) => {
                                    e.preventDefault();
                                    playVideo("VCPGMjCW0is");
                                }}>
                                <span>
                                    <VideoPlayIcon />
                                </span>
                                <i>Watch the Video</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="al-hero-seo-dashboard p-relative">
                            <Image style={{ width: "100%", height: "auto" }} width={1200} height={600} className="w-100" src="/assets/img/update/hero/seo/hero-dashboard.png" alt="Hero Dashboard" />
                            <Image width={350} height={250} className="al-hero-seo-shape-1 d-none d-xl-block" data-speed="0.8" src="/assets/img/update/hero/seo/hero-shape.png" alt="Hero Shape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyHero;