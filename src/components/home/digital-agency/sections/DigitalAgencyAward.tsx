"use client";
import { digitalAgencyAwardsData } from "@/data/award-data";
import AwardItem from "../components/AwardItem";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const DigitalAgencyAward = () => {
    const isDark = useIsDarkRoute();

    // Background color for Awards section
    const awardsBgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-black";

    return (
        <div className={`tp-awards-area ${awardsBgClass} p-relative z-index-1 pt-110 pb-90`}>
            <Image
                width={1905}
                height={761}
                className="tp-awards-bg-shape"
                src="/assets/img/awards/grid-shape.png"
                alt="Grid Shape"
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-awards-left mb-30">
                            <span className="tp-section-subtitle tp-section-subtitle-white tp-ff-heading fw-500 tp-text-common-white fs-16 mb-180">
                                <span className="borders d-inline-block"></span>
                                Our Achievement
                            </span>

                            <h5 className="fs-25 fw-500 tp-text-common-white lh-36">
                                Our relentless pursuit of
                                <br /> innovation and excellence has
                                <br /> earned us recognition from top
                                <br /> industry leaders.
                            </h5>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="tp-awards-right mb-30">
                            <h3 className="fs-50 fw-500 fs-xl-40 fs-lg-35 tp-text-common-white lh-120-per mb-55 tp_text_invert tp_text_invert">
                                We believe in delivering exceptional digital experiences that
                                make an impact.
                            </h3>

                            <div className="tp-awards-wrap">
                                <div className="tp-awards-item-top mb-35">
                                    <span className="fw-400 fs-22 fs-xs-18 tp-text-grey-2 mr-30">
                                        Award
                                    </span>

                                    <span className="fw-400 fs-22 fs-xs-18 tp-text-grey-2 mr-30">
                                        Year
                                    </span>
                                </div>
                                {/* Award item */}
                                {digitalAgencyAwardsData.map((item, index) => (
                                    <AwardItem key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyAward;