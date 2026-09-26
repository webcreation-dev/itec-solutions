"use client";
import BusinessConsultingServiceItem from '../components/BusinessConsultingServiceItem';
import ServiceInformation from '../components/ServiceInformation';
import { businessConsultingServices } from '@/data/service-data';
import { tp_service_slider_active } from '@/constant/swiper';
import CounterItem from '../components/CounterItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { counterData } from '@/data/counter-data';
import { SmartLink } from '@/components/common';
import { Autoplay } from 'swiper/modules';
import { ArrowIcon} from '@/svg';

const BusinessConsultingService = () => {

    return (
        <div className="p-relative z-index-1 pt-155 section-m-spacing bg-position"
            style={{ backgroundImage: `url(/assets/img/service/cst/bg.png)` }}>
            <div className="tp-service-area">
                <div className="container-fluid container-1524 pb-35">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="tp-service-cst-top-content mb-45 tp_fade_anim" data-delay=".4">
                                <h4 className="tp-ff-dm fs-28 lh-130-per tp-text-grey-5 mb-15">From branding to funding.</h4>
                                <p className="tp-text-grey-6 tp-ff-dm fs-18 lh-150-per mb-25">Building lasting partnerships through strategic insight,<br />
                                    innovation, and trust.</p>
                                <SmartLink href="/service-4" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">See All Services</span>
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
                        <div className="col-lg-7">
                            <div className="tp-service-cst-title-wrap ml-25 mr-155 mb-45">
                                <h2 className="tp-service-cst-title tp_text_invert invert-white tp-ff-dm tp-text-grey-5 fw-600 fs-50 fs-lg-40 fs-xs-30 lh-120-per">From branding to funding, we
                                    provide the tools & strategies
                                    start-ups need to succeed in
                                    a competitive market.</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-service-cst-slider-wrap mb-80">
                                <div className="tp-service-cst-slider">
                                    <Swiper
                                        modules={[Autoplay]}
                                        {...tp_service_slider_active}
                                    >
                                        {businessConsultingServices.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <BusinessConsultingServiceItem {...service} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <ServiceInformation />
                </div>
            </div>
            {/* -- tp-service-area-end -- */}

            {/* -- tp-counter-area-start -- */}
            <div className="tp-counter-area pt-110 pb-160">
                <div className="container-fluid container-1524">
                    <div className="row">
                        {counterData.map((item, index) => (
                            <CounterItem key={index} {...item} />
                        ))}
                        <div className="col-12">
                            <div className="tp-service-graph-wrap pt-70 tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <img className="w-100" src="/assets/img/service/cst/graph.svg" alt="graph image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingService;