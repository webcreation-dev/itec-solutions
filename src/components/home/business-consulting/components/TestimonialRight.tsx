import { ArrowIcon, TestimonialBarIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const TestimonialRight = () => (
    <div className="col-lg-6 mb-25">
        <div className="tp-testimonial-cst-result fix tp-bg-common-black-1 h-100 p-relative">
            <Image
                width={436}
                height={436}
                className="tp-testimonial-cst-shape tp-live-anim-spin img-fluid w-auto"
                src="/assets/img/testimonial/cst/shape.png"
                alt="shape"
            />

            <div className="tp-testimonial-cst-result-top d-flex justify-content-between">
                <div>
                    <h3 className="tp-ff-dm tp-text-common-white fs-42 lh-120-per mb-15">
                        Our <span className="tp-text-common-green-2">Clients’ Results</span>
                        <br /> Speak for Themselves
                    </h3>

                    <p className="tp-ff-dm fs-18 lh-140-per tp-text-grey-5">
                        We are a creative agency passionate about
                        <br />
                        crafting bold, innovative, and strategic.
                    </p>
                </div>

                <span className="tp-testimonial-cst-network">
                    <TestimonialBarIcon />
                </span>
            </div>

            <SmartLink
                href="/contact-us"
                className="tp-btn-cst tp-testimonial-cst-btn d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm"
            >
                <span className="d-flex align-items-center justify-content-center">
                    <span className="btn-text">View All Testimonial</span>
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
);
export default TestimonialRight;