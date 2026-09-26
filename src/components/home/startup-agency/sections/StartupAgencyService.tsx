"use client";
import StartupAgencyServiceItem from "../components/StartupAgencyServiceItem";
import { tp_service_sa_slider } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AwardBorderLine } from "@/svg/BorderLine";
import { serviceData } from "@/data/service-data";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const StartupAgencyService = () => {
   // Retrieve startup agency service items for rendering
    const services = serviceData.startupAgency;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const serviceClasses = {
        subtitleColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        titleClass: isDark ? "tp-text-common-white" : "tp_text_invert invert-black-2",
        helperColor: isDark ? "tp-text-grey-2" : "",
        borderFill: isDark ? "#5c5c5c" : "#EEEEEE",
    }

    return (
        <div className="tp-service-area pt-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-service-sa-title-wrap mb-30 tp_fade_anim" data-delay=".3">
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 fs-16 ${serviceClasses.subtitleColor}`}>
                                <span className="borders d-inline-block"></span>
                                Our Smart Solutions
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-service-sa-title-wrap mb-30">
                            <h3 className={`fs-50 fs-lg-40 fs-xs-30 lh-120-per ${serviceClasses.titleClass}`}>From branding to funding, we provide the tools & strategies startups need to succeed in a competitive market.</h3>
                        </div>
                    </div>
                </div>
                <span className="tp-service-sa-border mt-10 d-inline-block">
                    <AwardBorderLine fillColor={serviceClasses.borderFill} />
                </span>
                <div className="tp-service-sa-bottom">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pt-20 pb-50 tp_fade_anim" data-delay=".3">
                                <h5 className={`fs-25 fw-500 ${serviceClasses.helperColor}`}>We helped Caleric raise $2M in funding &<br /> scale to 50K+ users.</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-service-sa-slider p-relative">
                                <Swiper modules={[Pagination]} {...tp_service_sa_slider}>
                                    {services.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <StartupAgencyServiceItem {...item} type="startupAgency"/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="tp-service-sa-pagination mt-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyService;
