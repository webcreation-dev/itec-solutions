"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconFourteen } from "@/svg";

const awardsData = [
    {
        title: "Webby Awards",
        year: "2025",
        result: "Site of the Month",
        href: "awards",
        type: "smart",
        bgType: "data",
    },
    {
        title: "Awards",
        year: "2025",
        result: "Creative Pro",
        href: "/awards",
        type: "smart",
        bgType: "data",
    },
    {
        title: "DesignRush Awards",
        year: "2024",
        result: "Site of the Day",
        href: "/awards",
        type: "link",
        bgType: "style",
    },
];

const CreativeAgencyAwards = () => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();
    const bgClass = isDarkTheme ? "tp-bg-grey-8" : "";
    const bgImage = !isDarkTheme ? "/assets/img/awards/awards-2/bg.jpg":"";

    return (
        <div
            className={`tp-awards-area bg-position pt-85 pb-65 ${bgClass}`}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="tp-awards-2-title-wrap tp-text-perspective">
                            <h2 className="tp-awards-2-title tp-ff-funnel tp-text-common-white">
                                AWARD
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="tp-awards-2-para mt-160 mb-80">
                            <p className="fs-25 tp-text-grey-2 lh-30 tp_text_invert tp_text_invert">
                                Winning or being nominated for these <br />
                                awards can showcase an agency&apos;s excellence and creativity.
                            </p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="tp-awards-2-item-wrap">
                            <div className="tp-awards-2-item">
                                <span className="tp-awards-2-link tp-text-grey-2 fs-22">
                                    Platform
                                </span>
                                <span className="tp-awards-2-result tp-text-grey-2 fs-22">
                                    Real Results
                                </span>
                            </div>

                            {awardsData.map((item, index) => {
                                const Content = (
                                    <>
                                        <span className="tp-awards-2-link tp-text-common-white fs-25 fw-400 mb-20">
                                            {item.title}{" "}
                                            <span className="text-italic">({item.year})</span>
                                        </span>
                                        <span className="tp-awards-2-result tp-text-common-white fs-25 fw-400 mb-20">
                                            {" "}
                                            {item.result}
                                        </span>
                                        <span className="tp-awards-2-btn mb-20">
                                            <ArrowIconFourteen />
                                        </span>
                                    </>
                                );

                                return (
                                    <div
                                        key={index}
                                        className="tp-reveal-item p-relative active"
                                    >
                                        {item.type === "smart" ? (
                                            <SmartLink
                                                href={item.href}
                                                className="tp-awards-2-item borders"
                                            >
                                                {Content}
                                            </SmartLink>
                                        ) : (
                                            <SmartLink
                                                href={item.href}
                                                className="tp-awards-2-item"
                                            >
                                                {Content}
                                            </SmartLink>
                                        )}

                                        {item.bgType === "data" ? (
                                            <div
                                                className="tp-reveal-bg"
                                                style={{
                                                    backgroundImage:
                                                        "url(/assets/img/awards/awards-2/item.png)",
                                                }}
                                            ></div>
                                        ) : (
                                            <div
                                                className="tp-reveal-bg"
                                                style={{
                                                    backgroundImage:
                                                        "url(/assets/img/awards/awards-2/item.png)",
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyAwards;