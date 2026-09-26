import { InformationIcon } from "@/svg/CtaIcons";
import Image from "next/image";
import Link from "next/link";

const ITSolutionCta = () => {
    return (
        <div className="tp-cta-area tp-bg-common-green-3 pt-180 pb-170 p-relative z-index-1 fix section-m-spacing">
            <div className="mil-scale-img tp-cta-it-scale h-100" data-value-1="1.45" data-value-2="1">
                <Image width={667} height={566} className="tp-cta-it-shape img-fluid" src="/assets/img/cta/shape.png" alt="shape" />
                <Image width={667} height={566} className="tp-cta-it-shape-2 img-fluid" src="/assets/img/cta/shape-2.png" alt="shape" />
            </div>
            <div className="container-fluid container-1524">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tp-cta-it-content text-center">
                            <h2 className="tp-ff-inter fw-600 fs-36 ls-m-4 tp-text-common-black-1 mb-30">Stay informed with our newsletter.</h2>
                            <div className="tp-cta-it-form">
                                <form action="#">
                                    <input className="cta-it-input mb-30 mr-20" type="text" placeholder="Enter your email" />
                                    <button type="submit" className="tp-btn-it-xl mb-30 fw-700 fs-16 ls-m-3 text-uppercase tp-text-grey-5 tp-ff-inter tp-bg-common-black-1 tp-round-10">Subscribe Now</button>
                                </form>
                            </div>
                            <p className="tp-cta-it-trams tp-ff-inter fw-400 fs-18 ls-m-4 tp-text-common-black-1">
                                <span className="d-inline-block mr-5">
                                    <InformationIcon />
                                </span>
                                By sending the from you agree to the <Link href="#"> Terms & Conditions </Link> and <Link href="#"> Privacy Policy. </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionCta;