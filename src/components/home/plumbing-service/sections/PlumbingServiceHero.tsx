"use client";
import { HeroAbstractShape, HeroAbstractShapeTwo, PlumbingButtonArrow } from "@/svg";
import { NiceSelect } from "@/components/ui";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

export type NiceSelectOption = {
    value: string | number;
    text: string;
};

const PlumbingServiceHero = () => {
    const selectHandler = () => { };
    const isDarkTheme = useIsDarkRoute();

    const heroClasses = {
        headingColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-5",
        heroShape: isDarkTheme ? "/assets/img/hero/pb/shape-black.png" : "/assets/img/hero/pb/shape.png",
        heroShapeTwo: isDarkTheme ? "/assets/img/hero/pb/shape-2-black.png" : "/assets/img/hero/pb/shape-2.png",
        svgIcon: isDarkTheme ? HeroAbstractShapeTwo : HeroAbstractShape,
    }

    return (
        <div className="tp-hero-area pre-header tp-hero-pb-spacing p-relative">
            <Image width={250} height={177} className="tp-hero-pb-shape img-fluid" src={heroClasses.heroShape} alt="shape" />
            <Image width={178} height={155} className="tp-hero-pb-shape-2" src={heroClasses.heroShapeTwo} alt="shape 2" />
            <div className="container containers">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-hero-pb-content text-center p-relative">
                            <span className="tp-hero-pb-shape-3">
                                <heroClasses.svgIcon />
                            </span>
                            <span className="tp-hero-pb-subtitile tp-ff-inter fw-600 fs-14 ls-m-4 tp-text-theme-secondary d-inline-block mb-15">{`{Find The Perfect Plumbing Services }`}</span>
                            <h2 className={`tp-hero-pb-title pb-40 tp-ff-sora fw-700 fs-82 fs-sm-50 fs-xs-38 ls-m-6 text-capitalize ${heroClasses.headingColor}`}>we&apos;re Top Experts In Plumbing</h2>
                            <div className="tp-hero-pb-form">
                                <form action="#">
                                    <div className="row align-items-end">
                                        <div className="col-lg-3 col-md-6 mb-10">
                                            <div className="tp-hero-pb-input">
                                                <input className="tp-input" type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-10">
                                            <div className="tp-hero-pb-input">
                                                <input className="tp-input" type="text" placeholder="Your Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-10">
                                            <div className="tp-postbox-details-input tp-hero-pb-input text-start">
                                                <NiceSelect
                                                    className="tp-input"
                                                    options={[
                                                        { value: "gutter-cleaning", text: "Gutter Cleaning" },
                                                        { value: "lock-repair", text: "Lock Repair" },
                                                        { value: "plumbing", text: "Plumbing" },
                                                    ]}
                                                    placeholder="Select Services"
                                                    onChange={selectHandler}
                                                    name="sort"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-10">
                                            <div className="tp-hero-pb-input tp-hero-pb-input-btn">
                                                <button type="submit" className="tp-left-right tp-left-right-pb tp-bg-theme-secondary tp-round-36 w-100 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 fs-lg-14 tp-text-grey-5">
                                                    <span className="td-text d-inline-block mr-5">Make Appointment</span>{" "}
                                                    <span className="tp-arrow-angle tp-arrow-angle-pb">
                                                        <PlumbingButtonArrow />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tp-hero-pb-thumb">
                                <img className="has_fade_anim" data-fade-from="top" data-duration="2" data-delay="0.3"
                                    data-fade-offset="80" data-ease="bounce" src="/assets/img/hero/pb/thumb.png" alt="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="tp-hero-pb-bigtitle">Handyman</h3>
        </div>
    );
};

export default PlumbingServiceHero;