"use client";
import { brand_logo_items } from "@/data/brand-data";
import { SmartLink } from "@/components/common";
import { ArrowIconFourteen } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const logos = brand_logo_items.find((item) => "creativeAgency" in item)
    ?.creativeAgency ?? [];

const CreativeAgencyBrands = () => {
    // Check if current route uses dark theme
    const isDark = useIsDarkRoute();

    // Theme-based style tokens
    const theme = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black",
        hover: isDark ? "hover-text-white" : "hover-text-grey",
        paragraph: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
    };

    return (
        <div className="tp-brands-logo pt-135 pb-105">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-brands-2-wrap">
                            <h3 className={`tp-ff-funnel fw-500 fs-25 ls-0 text-center mb-60 tp_fade_anim ${theme.text}`} data-delay=".3">
                                We&apos;ve Almost <b>24k+</b> Customer in World-wide.
                            </h3>
                            <div className="tp-brand-2-item-wrap">
                                {logos.map((logo, index) => (
                                    <div key={index} className="tp_fade_anim" data-delay={`.${index + 2}`}>
                                        <a className="tp-brand-2-item" href="#">
                                            <Image
                                                src={logo.src}
                                                alt="brand logo"
                                                width={logo.width}
                                                height={logo.height}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="tp_fade_anim" data-delay=".9">
                                <p className={`fs-18 fs-xs-16 text-center pt-30 ${theme.paragraph}`}>
                                    Collaborate with Us for Better Performance, Don&apos;t Hesitate
                                    <SmartLink
                                        href="/contact"
                                        className={`tp-left-right ml-30 tp-ff-p fw-500 fs-15 ${theme.text} text-uppercase ${theme.hover}`}
                                    >
                                        <span className="td-text d-inline-block mr-5">Contact Us</span>
                                        <span className="tp-arrow-angle">
                                            <ArrowIconFourteen />
                                        </span>
                                    </SmartLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyBrands;
