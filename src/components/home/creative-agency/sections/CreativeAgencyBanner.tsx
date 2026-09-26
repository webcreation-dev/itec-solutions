import UncoverSlice from "@/components/ui/UncoverSlice";
import { DualColumnIcon } from "@/svg";
import Image from "next/image";

const CreativeAgencyBanner = () => {
    return (
        <div className="tp-banner-area section-triger tp-banner-2-spacing p-relative z-index-1 fix">
            <div className="box tp-banner-2-bg tp-hero-wd-bottom-bg">
                <img data-speed=".8" className="img-cover myimg" src="/assets/img/banner/banner-2/bg.jpg" alt="banner image" />
                <div className="uncover">
                    <UncoverSlice />
                    <UncoverSlice />
                    <UncoverSlice />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-banner-2-content p-relative z-index-1">
                            <Image width={423} height={499} className="tp-banner-2-thumb img-fluid" src="/assets/img/banner/banner-2/subtract.png" alt="Banner Thumb" />
                            <span className="d-block mb-90">
                                <DualColumnIcon />
                            </span>
                            <h5 className="tp-ff-funnel fs-25 fw-500 lh-34 tp-text-common-white mb-50">Measurable Impact
                                with User-centric web experiences.</h5>
                            <h3 className="tp-ff-funnel fs-70 fw-600 tp-text-common-white mb-0">98% <span className="fs-35 tp-text-theme-primary">{`>2X`}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyBanner;