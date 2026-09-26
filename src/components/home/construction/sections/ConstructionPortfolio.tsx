"use client";
import ConstructionPortfolioCard from "../components/ConstructionPortfolioCard";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconThree } from "@/svg";

// Data
const portfolioCards = [
    {
        id: 1,
        year: "2025",
        bg: "#FFCF68",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-1.jpg",
    },
    {
        id: 2,
        year: "2025",
        bg: "#FF6E4D",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-2.jpg",
    },
    {
        id: 3,
        year: "2025",
        bg: "#FFBAE3",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-3.jpg",
    },
];

const ConstructionPortfolio = () => {
    const isDarkTheme = useIsDarkRoute();
    const sectionBackground = isDarkTheme ? "#1b1b1d" : "#EBEAE7";

    return (
        <div
            className="cnt-portfolio-ptb cnt-bg-clip pt-120"
            style={{ backgroundColor: sectionBackground }}
        >
            {/* Header */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cnt-portfolio-heading text-center pb-80">
                            <span
                                className="cnt-section-subtitle mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                Aleric Portfolio
                            </span>

                            <h3
                                className="tp-section-title-clash-600 fs-60 fw-500 mb-0 pb-15 tp_fade_anim"
                                data-delay=".4"
                            >
                                Through a unique <br /> combination of engineering
                            </h3>

                            <div
                                className="cnt-portfolio-text tp_fade_anim"
                                data-delay=".5"
                            >
                                <p>
                                    At Marquee, we believe great construction begins with great
                                    design. Our construction design process <br />
                                    merges creativity with precision to deliver structures that
                                    are both visually.
                                </p>
                            </div>
                            <div
                                className="cnt-portfolio-btn tp_fade_anim"
                                data-delay=".6"
                            >
                                <SmartLink
                                    className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                    href="/portfolio-col-2"
                                >
                                    <i>
                                        <ArrowIconThree />
                                        <ArrowIconThree />
                                    </i>

                                    <span>
                                        <span className="text-1">View all Portfolio</span>
                                        <span className="text-2">View all Portfolio</span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video */}
            <div className="cnt-portfolio-video-wrapper">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    ref={(el) => {
                        if (el) {
                            el.muted = true;
                        }
                    }}
                >
                    <source
                        src="https://html.aqlova.com/videos/agntix/cnt.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Cards */}
            <div className="cnt-portfolio-video-card-wrapper d-flex flex-column justify-content-center">
                {portfolioCards.map((item) => (
                    <ConstructionPortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ConstructionPortfolio;