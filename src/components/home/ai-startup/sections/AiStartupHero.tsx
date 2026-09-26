"use client";
import BrandLogoSlider from "@/components/shared/components/BrandLogoSlider";
import { tp_brand_slide_active } from "@/constant/swiper";
import { brand_logo_items } from "@/data/brand-data";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIcon } from "@/svg";
import Image from "next/image";

const AiStartupHero = () => {
    const isDarkRoute = useIsDarkRoute(); // clearly indicates it's about the route
    const heroBackground = isDarkRoute
        ? "/assets/img/hero/ai/bg-black.png"
        : "/assets/img/hero/ai/bg.png"; // hero section background

    const heroTextColor = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-5"; // text color based on dark/light mode

    const heroCardColor = isDarkRoute
        ? "tp-bg-grey-8"
        : "tp-bg-common-white"; // card background based on dark/light mode
    const buttonBg = isDarkRoute ? "tp-bg-common-white" : "tp-bg-common-black-5";

    const btnText = isDarkRoute ? "tp-text-common-black" : "tp-text-common-white";
    const btnHoverText = isDarkRoute ? "hover-text-black" : "hover-text-white";

    return (
        <div className="tp-hero-area pre-header tp-hero-ai-spacing bg-position p-relative z-index-1"
            style={{ backgroundImage: `url(${heroBackground})` }}>
            <Image width={705} height={665} className="tp-hero-ai-shape" src="/assets/img/hero/ai/shape.png" alt="shape" />
            <div className="container-fluid container-1824 containers">
                <div className="row align-items-end">
                    <div className="col-xl-6 order-2 order-xl-1">
                        <div className="row align-items-end">
                            <div className="col-lg-7 col-md-7">
                                <div className="tp-hero-ai-thumb tp-round-32 tp--hover-item fix p-relative mb-30 mr-60">
                                    <div className="tp--hover-img" data-displacement="/assets/img/hero/ai/thumb.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                        <Image width={448} height={556} className="tp-round-32 w-100 img-fluid" src="/assets/img/hero/ai/thumb.jpg" alt="thumb" />
                                    </div>
                                    <h4 className="tp-hero-ai-thumb-text tp-ff-jakarta ls-m-2 tp-text-common-white lh-1">Aleric</h4>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className={`tp-hero-ai-dec ${heroCardColor} tp-round-32 mb-30`}>
                                    <h3 className={`tp-hero-ai-dec-title ls-m-3 tp-ff-playfair fw-400 ls-m-4 ${heroTextColor} mb-25`}>ai</h3>
                                    <p className={`opacity-8 mb-50 tp-ff-dm fw-500 lh-140-per fs-22 ls-m-2 ${heroTextColor}`}>Startup agency providing
                                        ai services in world - wide
                                        since 2016</p>
                                    <SmartLink href="/contact-us" className={`tp-btn-cst tp-btn-switch-2-animation d-inline-block text-uppercase ${btnText} ${btnHoverText} tp-round-36 lh-1 fs-16 fw-700 tp-ff-dm ${buttonBg}`}>
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Get started</span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 order-1 order-xl-2">
                        <div className="tp-hero-ai-right-content mb-100 text-end">
                            <h3 className={`tp-hero-ai-title mb-75 tp-ff-jakarta fw-600 ls-m-4 text-capitalize ${heroTextColor}`}>Fuel Your<br />
                                <span className="title-slide-gradient"><Image width={120} height={114} className="mr-20 tp-live-anim-spin hero-shape img-fluid" src="/assets/img/hero/ai/shape-2.png" alt="shape" />Vision with</span><br />
                                AI Intelligence
                                <span className="d-flex align-items-center justify-content-end"><Image className="rounded-circle mr-15 authors img-fluid" width={110} height={110} src="/assets/img/hero/ai/author.png" alt="author image" />Empower</span>
                            </h3>
                            <p className={`opacity-8 tp-ff-dm fw-400 fs-24 fs-xs-17 ls-m-2 ${heroTextColor} lh-140-per`}>We follow a streamlined, intelligent workflow<br />
                                designed to eliminate friction</p>
                        </div>
                    </div>
                    <div className="col-12 order-3">
                        <div className="tp-brand-wrap tp-hero-ai-brand pt-125">
                            <div className="tp-brand-slide-active tp-slider-transition">
                                <BrandLogoSlider
                                    data={brand_logo_items[2]?.aiStartup ?? []}
                                    swiperOptions={tp_brand_slide_active}
                                    itemClass="tp-brand-item"
                                    useLink={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupHero;