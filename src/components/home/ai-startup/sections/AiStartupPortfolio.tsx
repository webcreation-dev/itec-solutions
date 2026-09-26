"use client";
import AiCustomButton from "../components/AiCustomButton";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const portfolioData = [
    {
        id: 1,
        img: "/assets/img/portfolio/ai/thumb.jpg",
        thumb: "/assets/img/portfolio/ai/thumb-sm.jpg",
        title: "Architecture",
        categories: ["Branding", "Ai Agency", "Website"],
    },
    {
        id: 2,
        img: "/assets/img/portfolio/ai/thumb-2.jpg",
        thumb: "/assets/img/portfolio/ai/thumb-sm-2.jpg",
        title: "Data Intelligence",
        categories: ["Branding", "Ai Agency", "Website"],
    },
    {
        id: 3,
        img: "/assets/img/portfolio/ai/thumb-3.jpg",
        thumb: "/assets/img/portfolio/ai/thumb-sm-3.jpg",
        title: "Intelligent Stack",
        categories: ["Branding", "Ai Agency", "Website"],
    },
];

const AiStartupPortfolio = () => {
    const isDarkRoute = useIsDarkRoute();

    // meaningful names for colors based on usage
    const portfolioTextClass = isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-6";
    const haddingTitleClass = isDarkRoute ? "tp-text-common-white" : "";

    return (
        <div className="tp-portfolio-area pt-155">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-portfolio-ai-subtitle">
                            <span className={`text-anim tp-ff-inter fw-500 fs-18 ls-m-4 ${isDarkRoute ? 'tp-text-common-white' : 'tp-text-common-black-5'} mb-10 d-inline-block`}>/ Our Portfolio /</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-portfolio-ai-title ml-80">
                            <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-52 fs-sm-45 fs-xs-40 ls-m-4 fw-600 tp-ff-jakarta mb-30 ${haddingTitleClass}`}>Building the <span className="title-slide-gradient"></span> Future with Intelligent Services</h2>
                            <div className="tp_fade_anim" data-delay=".4">
                                <p className={`tp-about-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${portfolioTextClass}`}>From strategy to deployment, we fuse cutting-edge technology with creative thinking to craft digital products that learn adapt.</p>
                            </div>
                            <div className="tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                                <AiCustomButton buttonText="See All Protfolio" href="/portfolio-col-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-row p-relative mt-120">
                <div className="tp-snap-slider-holder">
                    {/* Images */}
                    <div className="tp-snap-slider-images">
                        <div className="tp-snap-slider-images-wrapper">
                            {portfolioData.map((item) => (
                                <div key={item.id}
                                    className="tp-snap-slide trigger-item change-header-color">
                                    <div className="img-mask p-relative">
                                        <div className="section-image trigger-item-link">
                                            <Image width={1905} height={943}
                                                src={item.img}
                                                className="item-image grid__item-img img-fluid"
                                                alt="thumb"
                                            />
                                        </div>
                                        <h3 className="tp-snap-slide-bigtext mb-0">
                                            {item.id.toString().padStart(3, "0")}
                                        </h3>
                                        <Image width={1905} height={943}
                                            src={item.img}
                                            className="grid__item-img grid__item-img--large img-fluid"
                                            alt="thumb"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Thumbs */}
                    <div className="tp-snap-slider-thumbs">
                        <div className="tp-snap-slider-thumbs-wrapper">
                            {portfolioData.map((item) => (
                                <div key={item.id} className="thumb-slide" data-cursor="OPEN">
                                    <SmartLink href="/portfolio-details-two"
                                        className="thumb-slide-img cursor-hide">
                                        <Image
                                            width={384} height={384}
                                            src={item.thumb}
                                            className="item-image grid__item-img img-fluid"
                                            alt="thumb"
                                        />
                                    </SmartLink>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Captions */}
                    <div className="tp-snap-slider-captions">
                        <div className="tp-snap-slider-captions-wrapper content-full-width">
                            {portfolioData.map((item) => (
                                <div key={item.id} className="tp-snap-slide-caption">
                                    <div className="slide-title">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="slide-subtitle d-flex align-items-center">
                                        {item.categories.map((cat, index) => (
                                            <span key={index}>{cat}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupPortfolio;