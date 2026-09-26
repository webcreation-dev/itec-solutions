import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

interface BlogItem {
    id: number;
    img: string;
    title: string;
    day: string;
    monthYear: string;
    fadeFrom: "left" | "right";
}

const BlogCard: React.FC<BlogItem> = ({ img, fadeFrom, day, monthYear, title }) => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const blogCardStyles = {
        titleColor: isDark ? "tp-text-common-white" : "",
        metaTextColor: isDark ? "tp-text-grey-2" : "tp-text-common-black-1",
        bodyTextColor: isDark ? "tp-text-grey-2" : "",
    };
    // -------------------------------
    return (
        <div
            className="col-lg-6 tp_fade_anim"
            data-delay=".4"
            data-fade-from={fadeFrom}
            data-ease="bounce">
            <div className="tp-blog-cst-item mb-30">
                <div className="tp-blog-cst-thumb">
                    <Image width={592} height={364} className="w-100 img-fluid" src={img} alt="Blog Image" />
                </div>
                <div className="tp-blog-cst-content d-flex">
                    <div className="tp-blog-cst-dates mr-80">
                        <h2 className={`tp-ff-dm fw-600 fs-72 fs-lg-60 lh-1 ${blogCardStyles.metaTextColor} mb-0`}>
                            {day}
                        </h2>
                        <span className={`tp-ff-dm fw-500 fs-18 fs-lg-16 text-uppercase ${blogCardStyles.metaTextColor} lh-140-per`}>
                            {monthYear.split(" ")[0]}
                            <br />
                            {monthYear.split(" ")[1]}
                        </span>
                    </div>
                    <div>
                        <h3 className={`tp-blog-cst-title tp-ff-dm fw-600 fs-34 fs-xl-30 fs-lg-25 lh-120-per mb-15 ${blogCardStyles.titleColor}`}>
                            <SmartLink
                                href="/blog-details-2"
                                className="underline-black"
                            >
                                {title.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </SmartLink>
                        </h3>
                        <div className="d-flex">
                            <span className={`fw-600 fs-16 text-uppercase ${blogCardStyles.metaTextColor} tp-ff-dm`}>
                                Knowledge /{" "}
                            </span>
                            <span className={`tp-ff-dm fw-500 fs-16 text-capitalize ${blogCardStyles.metaTextColor} d-inline-block ml-5`}>
                                By Admin
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;