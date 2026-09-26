"use client";
import { ITConsultingIcon, ITDataAnalyticsIcon, ITDataAnalyticsIconTwo, ItServiceShapeIcon, ServiceArrowIconTwo } from "@/svg";
import ITSolutionServiceItem from "../components/ITSolutionServiceItem";
import { tp_service_it_slider } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { itSolutionServiceDt } from "@/types";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const services: itSolutionServiceDt[] = [
    {
        title: (
            <>
                IT Consulting <br /> & Strategy.
            </>
        ),
        desc: `help businesses align their technology
long-term goals through expert consulting
smart strategy.`,
        icon: ITConsultingIcon,
    },
    {
        title: (
            <>
                Data Analytics &<br /> BI Solutions.
            </>
        ),
        desc: `help businesses align their technology
long-term goals through expert consulting
smart strategy.`,
        icon: ITDataAnalyticsIcon,
    },
    {
        title: (
            <>
                Data Analytics &<br /> BI Solutions.
            </>
        ),
        desc: `help businesses align their technology
long-term goals through expert consulting
smart strategy.`,
        icon: ITDataAnalyticsIconTwo,
    },
    {
        title: (
            <>
                Data Analytics &<br /> BI Solutions.
            </>
        ),
        desc: `help businesses align their technology
long-term goals through expert consulting
smart strategy.`,
        icon: ITDataAnalyticsIcon,
    },
];

const ITSolutionService = () => {
      const isDark = useIsDarkRoute();
        // -------------------------------
        // styles 
        // -------------------------------
        const serviceStyles = {
            sectionBgColor: isDark ? "tp-bg-grey-8" : "tp-bg-common-black",
        };
    // -------------------------------
    
    return (
        <div className={`tp-service-area ${serviceStyles.sectionBgColor} pt-160 pb-120`}>
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-service-it-subtitle p-relative mb-80">
                            <span className="tp-section-it-subtitle tp-about-it-subtitle tp-section-it-subtitle-white d-inline-block tp-ff-inter fw-600 tp-text-common-white fs-18 mb-90">
                                Our Services
                            </span>
                            <span className="tp-service-it-shape">
                                <ItServiceShapeIcon />
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tp-service-it-title-wrap mb-80">
                            <h2 className="tp-text-revel-anim fix fs-60 fs-lg-50 tp-ff-inter lh-120-per ls-m-4 tp-text-grey-5 mb-45">
                                Solutions That
                                <br />
                                Drive Digital Success
                            </h2>

                            <div
                                className="tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <SmartLink
                                    href="/service-4"
                                    className="tp-btn-it-lg tp-btn-border-white d-inline-block lh-0 tp-round-26 fs-16 tp-bg-common-black text-uppercase ls-m-3 tp-btn-switch-animation tp-text-common-white hover-text-black tp-ff-inter fw-700"
                                >
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">See All Services</span>
                                        <span className="btn-icon">
                                            <ServiceArrowIconTwo />
                                        </span>
                                        <span className="btn-icon">
                                            <ServiceArrowIconTwo />
                                        </span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="tp-service-it-slider">
                            <Swiper
                                modules={[Pagination]}
                                {...tp_service_it_slider}
                            >
                                {services.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <ITSolutionServiceItem item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="tp-service-it-pagenation mt-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionService;