import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { BlogRightArrowIcon } from "@/svg";
import { BlogItemDT } from "@/types";
import Image from "next/image";

const PlumbingBlogItem: React.FC<BlogItemDT> = ({ categories, title, image, date, delay = ".3" }) => {
    const isDarkMode = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const blogItemStyles = {
        primaryText: isDarkMode ? "tp-text-common-white" : "tp-text-common-black-5",
    };

    return (
        <div
            className="tp-blog-pb-item mb-30 tp_fade_anim"
            data-delay={delay}
            data-fade-from="right"
        >
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="tp-blog-pb-thumb mr-30 fix">
                        <Image width={395} height={355} className="w-100 img-fluid" src={image} alt="thumb" />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="tp-blog-pb-content">
                        <div className="tp-blog-meta mb-10">
                            <span>{categories.join(", ")}</span>
                            <span className="borders"></span>
                            <span>{date}</span>
                        </div>

                        <h3 className={`tp-ff-sora fw-600 fs-28 lh-130-per ${blogItemStyles.primaryText} mb-40`}>
                            <SmartLink className="underline-black whitespace-pre-line" href="/blog-details-2">
                                {title}
                            </SmartLink>
                        </h3>

                        <div className="d-inline-block">
                            <SmartLink
                                href="/blog-details-2"
                                className={`tp-blog-pb-btn d-flex align-items-center tp-ff-inter fw-700 fs-16 ls-m-2 ${blogItemStyles.primaryText}`}
                            >
                                Explore Now
                                <span className="d-flex justify-content-center align-items-center rounded-circle ml-10">
                                    <BlogRightArrowIcon />
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingBlogItem;