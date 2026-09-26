"use client";
import WebDesignAgencyServiceItem from "../components/WebDesignAgencyServiceItem";
import { serviceData } from "@/data/service-data";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconEleven } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const images = [
    "/assets/img/service/wd/bg.jpg",
    "/assets/img/service/wd/bg-2.jpg",
    "/assets/img/service/wd/bg-3.jpg",
    "/assets/img/service/wd/bg-4.jpg",
    "/assets/img/service/wd/bg-5.jpg",
];

const WebDesignAgencyService = () => {
    // Retrieve web design agency service items for rendering
    const services = serviceData.webDesignAgency;

    const isDarkTheme = useIsDarkRoute();
      // -------------------------------
      // Theme-based styles 
      // -------------------------------
      const themeClasses = {
          textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
          textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
      };
      // -------------------------------

    return (
        <div className="tp-service-area pt-130 pb-115">
            <div className="container">
                {/* Header */}
                <div className="row align-items-end mb-30">
                    <div className="col-lg-8 col-md-9">
                        <div className="tp-service-wd-title-wrap mb-30">
                            <h2 className={`tp-about-wd-title tp-text-perspective tp-ff-teko fw-600 lh-1 fs-70 fs-xs-50 text-uppercase mb-15 ${themeClasses.textPrimary}`}>
                                We Provide Smart<br /> Solution.
                            </h2>
                            <p className={`fs-18 ml-110 tp-text-perspective ${themeClasses.textBody}`}>
                                Strategists dedicated to creating stunning,<br />
                                functional websites that align with your unique<br />
                                business goals.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3">
                        <div
                            className="tp-rounded-btn-wrap tp-rounded-btn-wd text-md-end mb-30 tp_fade_anim"
                            data-delay=".4"
                            data-fade-from="top"
                            data-ease="bounce"
                        >
                            <div className="btn_wrapper d-inline-block">
                                <Link href="/services" className="tp-btn-rounded tp-ff-teko btn-item">
                                    View All<br /> Solutions
                                    <span className="d-block mt-10">
                                        <ArrowIconEleven />
                                    </span>
                                    <i className="tp-btn-circle-dot"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="p-relative tp-service-wd">
                            <div className="tp-service-wd-item-wrap projects">
                                {services.map((service, index) => (
                                    <WebDesignAgencyServiceItem key={index} {...service} type="webDesignAgency" index={index} />
                                ))}
                            </div>
                            {/* Images */}
                            <div className="image-wrapper">
                                <div className="image-slider">
                                    {images.map((img, i) => (
                                        <Image className="img-fluid" width={330} height={330} key={i} src={img} alt="image" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyService;