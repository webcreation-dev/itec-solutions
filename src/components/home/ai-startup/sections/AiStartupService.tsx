"use client";
import { aiServiceBoxesData, aiServicesData } from "@/data/service-data";
import AiServiceBoxItem from "../components/AiServiceBoxItem";
import AiServiceItem from "../components/AiServiceItem";
import AiCustomButton from "../components/AiCustomButton";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const AiStartupService = () => {
    const isDarkRoute = useIsDarkRoute();

    // meaningful names for colors based on usage
    const serviceTextColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-6";

    return (
        <div className="tp-service-area pt-150 pb-170 p-relative z-index-1">
            <Image width={610} height={610}
                className="tp-service-ai-ring p-absolute img-fluid"
                src="/assets/img/about/ai/ring.png"
                alt="ring" />
            <div className="container-fluid container-1524">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="tp-service-ai-title-wrap mb-30">
                            <span className={`text-anim tp-ff-inter fw-500 fs-18 ls-m-4 ${serviceTextColor} mb-10 d-inline-block`}>
                                / Our Service /
                            </span>
                            <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 tp-ff-jakarta ${serviceTextColor}`}>
                                Building the Future with Intelligent Services
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tp-service-ai-btn mb-80 text-lg-end tp_fade_anim">
                            <AiCustomButton buttonText="All Service" href="/service-4" />
                        </div>
                    </div>
                </div>

                {/* Service List */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-ai-content pt-50">
                            {aiServicesData.map((service, index) => (
                                <AiServiceItem key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Box */}
            <div className="tp-service-ai-box-wrp pt-70">
                <div className="container-fluid container-1824">
                    <div className="row gx-60">
                        {aiServiceBoxesData.map((box, index) => (
                            <AiServiceBoxItem key={index} {...box} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupService;