import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const PlumbingBlogHeader = () => {
    const isDarkMode = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const blogStyles = {
        primaryText: isDarkMode ? "tp-text-common-white" : "tp-text-common-black-5",
    };

    return (
        <div className="tp-service-title-wrap mb-40">
            <span className={`text-anim tp-section-pb-subtitle mb-15 d-inline-block tp-ff-inter fw-500 fs-18 ls-m-4 lh-160-per ${blogStyles.primaryText}`}>
                {"{ Our Latest Blog }"}
            </span>

            <h2 className={`text-anim tp-section-pb-title mb-50 ${blogStyles.primaryText} tp-ff-sora fs-48 fs-sm-40 fs-xs-35 ls-m-2 lh-120-per`}>
                Comprehensive<br /> Handyman Solutions
            </h2>

            <div
                className="tp_fade_anim"
                data-delay=".5"
                data-fade-from="bottom"
                data-ease="bounce"
            >
                <SmartLink
                    href="/blog-grid"
                    className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white"
                >
                    <span className="td-text d-inline-block mr-5">
                        See All Blog
                    </span>

                    <span className="tp-arrow-angle tp-arrow-angle-pb">
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                                d="M1 1L11 11M11 11H1M11 11V1"
                                stroke="#F3F1F2"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </SmartLink>
            </div>
        </div>
    );
};

export default PlumbingBlogHeader;