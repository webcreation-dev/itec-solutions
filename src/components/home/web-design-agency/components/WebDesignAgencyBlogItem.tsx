"use client";
import { useIsDarkRoute } from "@/hooks";
import { HeaderButtonArrow } from "@/svg";
import { BlogItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const WebDesignAgencyBlogItem: React.FC<BlogItemProps> = ({ image, title, categories, slug, type }) => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-common-black-5",
        btnBg:isDarkTheme?"tp-bg-common-white":"tp-bg-common-black",
        btnTextColor:isDarkTheme?"tp-text-common-black":"tp-text-common-white",
        btnHoverColor:isDarkTheme?"hover-text-black":"hover-text-white",
        shapeFill: isDarkTheme ? "#fff" : "#030303",
    };
    // -------------------------------
    return (
        <div className="tp-blog-wd-item mb-40">
            <div className="row align-items-center">
                {/* image */}
                <div className="col-lg-6 col-md-6">
                    <div className="tp-blog-wd-thumb fix">
                        <div className="box">
                            <Image width={311} height={398} className="w-100 myimg img-fluid" src={image} alt={title} />
                            <div className="uncover">
                                <div className="uncover_slice" />
                                <div className="uncover_slice" />
                                <div className="uncover_slice" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="col-lg-6 col-md-6">
                    <div className="tp-blog-wd-content">
                        <span className={`tp-blog-wd-tag fw-500 fs-16 ${themeClasses.textBody} mb-20 d-inline-block`}>
                            {categories.map((cat, i) => (
                                <Link key={i} href="#">
                                    {cat}
                                </Link>
                            ))}
                        </span>
                        <h2 className={`tp-blog-wd-title tp-ff-teko fw-600 fs-35 fs-lg-30 lh-110-per mb-100 ${themeClasses.textPrimary}`}>
                            <Link href={`/blog-details/${type}/${slug}`}>{title}</Link>
                        </h2>
                        <Link
                            href={`/blog-details/${type}/${slug}`}
                            className={`tp-btn-md d-inline-block lh-0 tp-round-26 fs-15 ${themeClasses.btnBg} text-uppercase ls-0 tp-btn-switch-animation ${themeClasses.btnTextColor} ${themeClasses.btnHoverColor} tp-ff-p fw-500`}
                        >
                            <span className="d-flex align-items-center justify-content-center">
                                <span className="btn-text">Read More</span>
                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>
                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyBlogItem;