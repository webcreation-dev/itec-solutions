"use client";
import BrandLogoSlider from "@/components/shared/components/BrandLogoSlider";
import { tp_brand_slide_active } from "@/constant/swiper";
import { brand_logo_items } from "@/data/brand-data";
import { AwardBorderLine } from "@/svg/BorderLine";
import { Autoplay, FreeMode } from "swiper/modules";
import { SmartLink } from "@/components/common";
import { AwardBadgeShape } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

// awards data
const awardsLeft = [
    { title: "Awwwards", year: "2025" },
    { title: "CSS Design Awards", year: "2024" },
    { title: "Webby Awards", year: "2023" },
    { title: "Webby Awards", year: "2023" },
];

const awardsRight = [
    { title: "UX Design Awards", year: "2022" },
    { title: "Interaction Awards", year: "2021" },
    { title: "DesignRush Agency Awards", year: "2020" },
    { title: "DesignRush Agency Awards", year: "2020" },
];


const AwardItem = ({ title, year, themeClasses, delay, fadeFrom }: { title: string; year: string, themeClasses: string, delay: string, fadeFrom: string }) => (
    <div className="tp-reveal-item p-relative active tp_fade_anim" data-delay={delay} data-fade-from={fadeFrom}>
        <SmartLink
            href="/awards"
            className="tp-awards-wd-item borders d-flex justify-content-between"
        >
            <span className={themeClasses}>{title}</span>
            <span className="tp-text-grey-1">{year}</span>
        </SmartLink>

        <div
            className="tp-reveal-bg"
            style={{ backgroundImage: `url(/assets/img/awards/awards-2/item.png)` }} />
    </div>
);

const WebDesignAgencyAward = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-common-black-5",
        shapeFill: isDarkTheme ? "#525252" : "#333333",
        borderLineFill: isDarkTheme ? "#525252" : "#EEEEEE"
    };
    const awardShape = isDarkTheme ? "/assets/img/service/shape-2-black.png" : "/assets/img/service/shape-2.png";
    // -------------------------------

    return (
        <div className="tp-awareds-area pt-130 pb-140">
            <div className="container">
                <div className="row">
                    {/* title */}
                    <div className="col-lg-10">
                        <div className="tp-service-wd-title-wrap d-md-flex align-items-end">
                            <h2 className={`tp-awards-wd-title tp-text-perspective tp-ff-teko fw-500 fs-70 fs-lg-60 fs-sm-40 lh-1 mr-50 ${themeClasses.textPrimary}`}>
                                Award
                            </h2>
                            <span className={`fw-400 tp-text-perspective fs-25 mb-40 ${themeClasses.textPrimary}`}>
                                (05 Award We&apos;ve Won!)
                            </span>
                        </div>
                    </div>
                    {/* shape */}
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="tp-service-2-shape text-end pt-50 tp_fade_anim" data-delay=".4" data-fade-from="top" data-ease="bounce">
                            <Image width={60} height={60} src={awardShape} alt="shape" />
                        </div>
                    </div>
                    {/* border */}
                    <div className="col-lg-12">
                        <div className="tp-service-wd-border mb-60">
                            <AwardBorderLine fillColor={themeClasses.borderLineFill} />
                        </div>
                    </div>
                    {/* description */}
                    <div className="col-lg-5 ms-auto">
                        <div className="tp-awards-wd-para d-flex mb-55">
                            <span className="mr-20 mt-5">
                                <AwardBadgeShape fillColor={themeClasses.shapeFill} />
                            </span>
                            <p className={`fs-25 lh-28 mb-0 ls-m-2 tp-ff-p ${themeClasses.textBody} opacity-8`}>
                                Winning or being nominated for these awards can showcase an agency&apos;s excellence and creativity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* awards lists */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-awards-wd-wrap mb-40">
                            <div className="tp-awards-wd-top tp_fade_anim" data-delay=".2" data-fade-from="left">
                                <span>Award</span>
                                <span>Year</span>
                            </div>

                            <div className="tp-awards-wd-item-inner">
                                {awardsLeft.map((item, i) => {
                                    const delays = [".3", ".5", ".7", ".7"];
                                    return (
                                        <AwardItem
                                            key={i}
                                            {...item}
                                            themeClasses={themeClasses.textPrimary}
                                            delay={delays[i] || ".7"}
                                            fadeFrom="left"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tp-awards-wd-wrap mb-40">
                            <div className="tp-awards-wd-top tp_fade_anim" data-delay=".2" data-fade-from="right">
                                <span>Award</span>
                                <span>Year</span>
                            </div>

                            <div className="tp-awards-wd-item-inner">
                                {awardsRight.map((item, i) => {
                                    const delays = [".3", ".5", ".7", ".7"];
                                    return (
                                        <AwardItem
                                            key={i}
                                            {...item}
                                            themeClasses={themeClasses.textPrimary}
                                            delay={delays[i] || ".7"}
                                            fadeFrom="right"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* brands */}
                    <div className="col-lg-12 text-center mt-70">
                        <h5 className={`tp-ff-teko fw-600 fs-25 ${themeClasses.textPrimary}`}>
                            We&apos;ve almost 24k+ customers worldwide
                        </h5>
                        <div className="tp-brand-wrap pt-55">
                            <div className="tp-brand-slide-active tp-slider-transition">
                                <BrandLogoSlider
                                    data={brand_logo_items[1]?.digitalAgencyItems ?? []}
                                    swiperOptions={tp_brand_slide_active}
                                    itemClass="tp-brand-item"
                                    useLink={true}
                                    modules={[Autoplay, FreeMode]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyAward;