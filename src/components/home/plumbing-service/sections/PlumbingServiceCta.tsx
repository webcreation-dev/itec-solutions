import { SmartLink } from "@/components/common";
import { PlumbingButtonArrow } from "@/svg";

const PlumbingServiceCta = () => {
    return (
        <div className="tp-cta-area bg-position" style={{ backgroundImage: "url(/assets/img/cta/pb/bg.jpg)" }}>
            <div className="container-fluid container-1646">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-cta-pb-wrap d-flex align-items-center">
                            <h3 className="text-anim tp-ff-sora fw-500 fs-32 ls-m-2 tp-text-common-white mb-20 mr-20">Tailored Advice for the Right Gear</h3>
                            <div className="mb-20 tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                <SmartLink href="/contact-us" className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white">
                                    <span className="td-text d-inline-block mr-5">Contact Us</span>
                                    <span className="tp-arrow-angle tp-arrow-angle-pb">
                                        <PlumbingButtonArrow />
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceCta;