"use client";
import CreativeAgencyServiceItem from "../components/CreativeAgencyServiceItem";
import { serviceData } from "@/data/service-data";
import { ArrowIconFourteen } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const CreativeAgencyServices = () => {
    // Retrieve creative agency service items for rendering
    const services = serviceData.creativeAgency;

    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // Theme-based style tokens for service section
    const serviceTheme = {
        headingClass: isDarkTheme ? "tp-text-common-white" : "",
        bodyTextClass: isDarkTheme ? "tp-text-grey-2" : "",
        paragraphClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
    };

    // Determine shape image based on theme
    const shapeSrc = isDarkTheme ? "/assets/img/service/shape-2-black.png" : "/assets/img/service/shape-2.png";

    return (
        <div id="service" className="tp-service-area pb-140">
            <div className="container">
                <div className="row">

                    {/* TITLE SECTION */}
                    <div className="col-lg-10">
                        <div className="tp-service-2-title-wrap">
                            <h2
                                className={`tp-service-2-title tp-ff-funnel fw-500 fs-70 fs-lg-60 fs-sm-40 lh-110-per mb-110 tp_fade_anim ${serviceTheme.headingClass}`}
                                data-delay=".3"
                            >
                                <span className="d-none d-sm-inline-block"></span>
                                We craft memorable
                                <br /> brand identities that leave a lasting impact.
                            </h2>

                            <div className="tp-service-2-para tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${serviceTheme.bodyTextClass}`}>
                                    We blend strategy, creativity, and technology to build brands
                                    that stand out. Helping brands positioning, and digital transformation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SHAPE */}
                    <div className="col-lg-2 d-none d-lg-block">
                        <div
                            className="tp-service-2-shape text-end pt-120 tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="top"
                            data-ease="bounce"
                        >
                            <Image width={60} height={60} src={shapeSrc} alt="Service Shape" />
                        </div>
                    </div>

                    {/* SERVICES */}
                    {services.map((item, i) => (
                        <CreativeAgencyServiceItem key={i} {...item} type="creativeAgency" />
                    ))}

                    {/* CTA */}
                    <div
                        className="col-12 text-center pt-30 tp_fade_anim"
                        data-delay=".5"
                        data-fade-from="top"
                        data-ease="bounce"
                    >
                        <div className="text-center d-inline-block">
                            <div className="tp-service-2-btn d-md-flex align-items-center">
                                <p className={`fs-18 mr-45 mb-20 mb-md-0 ${serviceTheme.paragraphClass}`}>
                                    We&apos;re Create Crafting Product
                                    <br /> in Digital Marketplace
                                </p>

                                <div className="tp-btn-group">
                                    <Link className="tp-btn-circle" href="/service-1">
                                        <ArrowIconFourteen />
                                    </Link>
                                    <Link className="tp-btn-2" href="/service-1">
                                        View All Service
                                    </Link>
                                    <Link className="tp-btn-circle" href="/service-1">
                                        <ArrowIconFourteen />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyServices;