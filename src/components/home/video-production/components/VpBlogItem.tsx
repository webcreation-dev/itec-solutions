"use client";
import { SmartLink } from "@/components/common";
import { VPBlogItem } from "@/types/blog-d";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const VpBlogItem: React.FC<VPBlogItem> = ({ link, img, titleTop, titleBottom }) => {
    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // blog style (dark+light)
    // -------------------------------
    const blogTextClass = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5";
    // -------------------------------
    return (
        <div className="tp-blog-vp-item tp--hover-item">
            <div className="row align-items-center">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                    <SmartLink
                        href={link}
                        className="tp-blog-vp-thumb d-block mb-30 p-relative fix d-inline-block mr-30 tp-round-20"
                    >
                        <div
                            className="tp--hover-img"
                            data-displacement="/assets/img/imghover/stripe-mul.png"
                            data-intensity="0.2"
                            data-speedin="1"
                            data-speedout="1">
                            <img
                                className="w-100"
                                src={img}
                                alt="image"
                            />
                        </div>
                    </SmartLink>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-6">
                    <div className="tp-blog-vp-content mb-30">
                        <div className="tp-blog-vp-dates mb-10">
                            <span className={`tp-ff-inter fw-600 fs-15 ${blogTextClass}`}>
                                Mar 15, 2022
                            </span>
                        </div>
                        <h3 className={`tp-ff-inter fw-600 fs-43 fs-lg-35 fs-xs-30 lh-130-per ls-m-5 ${blogTextClass} mb-30`}>
                            <SmartLink className="underline-black" href={link}>
                                {titleTop}
                                <br />
                                {titleBottom}
                            </SmartLink>
                        </h3>
                        <div className="tp-blog-vp-cetagory">
                            <Link href="#">Website</Link>
                            <Link href="#">Business</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VpBlogItem;