import { ArrowIconEight, ArrowIconThirteen, ShapeIconThree } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const HeroBottomContent = () => {
    const isDark = useIsDarkRoute();
    
     // SVG colors
    const arrowIconColor = isDark ? "#999" : "#FFFFFF"; // ArrowIconSeven fill color

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-9">
                    <div className="tp-hero-bottom-thumb p-relative h-100 mr-40">
                        <div className="tp-hero-bottom-height fix scale-up-img">
                            <img data-speed="0.8" className="img-cover w-100 h-100 scale-up" src="/assets/img/hero/thumb.jpg" alt="hero bottom image"/>
                        </div>
                        <Image className="tp-hero-bottom-shape" src="/assets/img/hero/shape.png" alt="hero bottom shape" width={222} height={222} />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="tp-hero-bottom-right h-100 tp-bg-common-black tp-left-right p-relative z-index-1 pb-50">
                        <Image className="tp-hero-customer-shape" src="/assets/img/hero/grid-shape.png" alt="hero customer shape" width={360} height={548} />
                        <div className="tp-hero-bottom-box">
                            <span className="tp-hero-bottom-icon d-inline-block mb-55">
                                <ShapeIconThree />
                            </span>
                            <span className="tp-hero-bottom-border mb-15">
                                <ArrowIconThirteen fillColor={arrowIconColor}/>
                            </span>
                            <div className="d-flex align-items-end justify-content-between">
                                <div>
                                    <span className="tp-text-common-white fw-400 fs-18 mb-10 d-inline-block">We Recently Launched</span>
                                    <h5 className="fw-700 fs-25 tp-text-common-white"><SmartLink href="/service-details-2" className="hover-text-white">Branding Design Particle</SmartLink></h5>
                                </div>
                                <span className="tp-arrow-angle mb-10">
                                    <ArrowIconEight />
                                </span>
                            </div>
                        </div>
                        <div className="tp-hero-bottom-line mt-100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBottomContent;