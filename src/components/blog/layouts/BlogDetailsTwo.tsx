"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const comments = [
    {
        id: 1,
        name: "MD Harun",
        date: "April 8, 2025 at 7:38 am",
        avatar: "/assets/img/blog/postbox/avatar-3.jpg",
        text: "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu.",
        children: false,
    },
    {
        id: 2,
        name: "Anne Marie",
        date: "April 8, 2025 at 7:38 am",
        avatar: "/assets/img/blog/postbox/avatar-2.jpg",
        text: "By tracking each stage of the funnel—from awareness to loyalty—brands can identify weak points, refine their strategies, and maximize conversions.",
        children: true,
    },
    {
        id: 3,
        name: "Justin Case",
        date: "April 8, 2025 at 7:38 am",
        avatar: "/assets/img/blog/postbox/avatar.jpg",
        text: "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu.",
        children: false,
    },
];

const detailTags = ["Marketing", "Paid SEO", "Page Optimize"];

const BlogDetailsTwo = () => {
    const isDark = useIsDarkRoute();
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const bodyColor = isDark ? "tp-text-grey-2" : "tp-text-common-black-5 opacity-8";
    const strongColor = isDark ? "tp-text-common-white" : "tp-text-common-black";

    return (
        <main>
            <div className="tp-breadcrumb-area pre-header tp-pricing-2-spacing bg-position pb-90">
                <div className="container-fluid container-1524 containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-breadcrumb-ai-title-wrap">
                                <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 ${titleColor}`}>
                                    Blog Details
                                </h2>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-border pt-25">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><span></span></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-blog-banner-area tp-about-me-banner scale-up-img">
                <Image
                    data-speed="0.4"
                    className="img-cover scale-up"
                    src="/assets/img/breadcrumb/thumb-8.jpg"
                    alt="Blog details banner"
                    width={1920}
                    height={600}
                    priority
                />
            </div>

            <div className="tp-blog-details-2-area pt-115 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="tp-blog-details-2-social ml-50">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6875 10.375C11.7612 10.375 10.945 10.8307 10.4323 11.5236L5.99969 9.25387C6.07328 9.00303 6.125 8.74306 6.125 8.46875C6.125 8.09669 6.04872 7.74297 5.91694 7.41762L10.5558 4.62612C11.0721 5.232 11.8309 5.625 12.6875 5.625C14.2384 5.625 15.5 4.36341 15.5 2.8125C15.5 1.26159 14.2384 0 12.6875 0C11.1366 0 9.875 1.26159 9.875 2.8125C9.875 3.16991 9.94859 3.50894 10.0707 3.82369L5.41797 6.62337C4.90216 6.0355 4.15428 5.65625 3.3125 5.65625C1.76159 5.65625 0.5 6.91784 0.5 8.46875C0.5 10.0197 1.76159 11.2812 3.3125 11.2812C4.25406 11.2812 5.08409 10.8122 5.59484 10.0998L10.0128 12.3622C9.93147 12.6248 9.875 12.8984 9.875 13.1875C9.875 14.7384 11.1366 16 12.6875 16C14.2384 16 15.5 14.7384 15.5 13.1875C15.5 11.6366 14.2384 10.375 12.6875 10.375Z" fill="currentColor" />
                                            </svg>
                                            <span>22<br />Share</span>
                                        </Link>
                                    </li>
                                    <li><Link href="#"><i className="fa-brands fa-dribbble"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-behance"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-pinterest"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10">
                            <div className="tp-postbox-wrapper tp-postbox-2-wrapper">
                                <div className="tp-blog-details-content ml-55 mb-70">
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor}`}>
                                        XYZ Tech, a fast-growing SaaS company, approached us to refresh their brand identity and digital presence to attract enterprise clients. Our goal was to create a modern, scalable, and visually striking brand that resonated with their target audience.
                                    </p>
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor}`}>
                                        Branding design is the visual and strategic identity of a business, shaping how it is perceived by customers. It includes elements like the logo, color palette, typography, imagery, and messaging, all working together to create a strong and memorable brand presence.
                                    </p>
                                    <div className="tp-service-details-content mt-50">
                                        <h5 className={`fs-32 fw-600 mb-40 tp-ff-dm ${titleColor}`}>
                                            Why Marketing Funnel Analytics Matterss
                                        </h5>
                                        <ul className="mb-70">
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p><b>Identify Weak Points – </b> Detect where prospects drop off and optimize those areas.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p><b> Improve ROI – </b> Allocate budget efficiently based on high-performing channels.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p><b>Enhance User Experience –</b> Personalize content and messaging to increase engagement.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p><b> Boost Conversions – </b> Optimize CTAs, landing pages, and sales processes for better results.</p>
                                            </li>
                                        </ul>
                                        <h3 className={`fs-32 fw-600 mb-30 tp-ff-dm ${titleColor}`}>
                                            Awareness &amp; Traffic Generation Tools
                                        </h3>
                                        <h3 className={`fs-28 fw-500 tp-ff-dm ${titleColor}`}>
                                            <span className="d-inline-block mr-10">1.</span>Google Ads
                                        </h3>
                                    </div>
                                </div>

                                <div className="tp-blog-details-thumb mb-55">
                                    <img className="w-100" src="/assets/img/blog/details/thumb-3.jpg" alt="Google Ads" />
                                </div>

                                <div className="tp-blog-details-content ml-55 mb-20">
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor} mb-20`}>
                                        <span className={`fw-500 ${strongColor}`}>Google Ads</span> is a pay-per-click advertising platform that allows businesses to display ads on Google Search, YouTube, Gmail, and partner websites. It helps brands attract customers through targeted ads based on keywords, audience behavior, and demographics.
                                    </p>
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor} mb-45`}>
                                        Google Ads is a powerful tool to drive high-quality traffic, increase sales, and maximize ROI. Whether you&apos;re a small business or a global brand, a well-optimized Google Ads strategy can deliver measurable results.
                                    </p>
                                    <h3 className={`fs-35 fw-500 tp-ff-dm mb-45 ${titleColor}`}>
                                        <span className="d-inline-block mr-10">2.</span>SEMrush / Ahrefs
                                    </h3>
                                </div>

                                <div className="tp-blog-details-thumb mb-40">
                                    <img className="w-100" src="/assets/img/blog/details/thumb-4.jpg" alt="SEMrush Ahrefs" />
                                </div>

                                <div className="tp-blog-details-content ml-55 mb-20">
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor} mb-45`}>
                                        Both <span className={`fw-500 ${strongColor}`}>SEMrush &amp; Ahrefs</span> are powerful SEO and digital marketing tools that help businesses improve their search engine rankings, competitor analysis, and content strategy. While they share many features, each platform has its strengths.
                                    </p>
                                    <h3 className={`fs-35 fw-500 tp-ff-dm mb-15 ${titleColor}`}>
                                        <span className="d-inline-block mr-10">Conclusion</span>
                                    </h3>
                                    <p className={`fs-18 tp-ff-dm lh-150-per ${bodyColor} mb-50`}>
                                        Mastering marketing funnel analytics is essential for businesses aiming to attract, engage, convert, and retain customers effectively. By tracking each stage of the funnel—from awareness to loyalty—brands can identify weak points, refine their strategies, and maximize conversions.
                                    </p>
                                    <div className="tp-blog-details-tag mr-20 mb-10">
                                        <ul>
                                            {detailTags.map((tag) => (
                                                <li key={tag}><Link href="#">{tag}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="tp-blog-comment-form ml-55 mr-55 pt-90">
                                    <div className="postbox__comment mb-100">
                                        <h3 className={`fs-50 tp-ff-dm ${titleColor}`}>3 Comments</h3>
                                        <ul>
                                            {comments.map((comment) => (
                                                <li key={comment.id} className={comment.children ? "children" : ""}>
                                                    <div className="postbox__comment-box d-flex">
                                                        <div className="postbox__comment-info">
                                                            <div className="postbox__comment-avater mr-20">
                                                                <img src={comment.avatar} alt={comment.name} />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                                                <h5>{comment.name}</h5>
                                                                <span className="post-meta">{comment.date}</span>
                                                            </div>
                                                            <p>{comment.text}</p>
                                                            <div className="postbox__comment-reply">
                                                                <Link href="#">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="tp-postbox-details-form">
                                        <h3 className={`fs-35 fw-500 tp-ff-dm ${titleColor}`}>Leave a Reply</h3>
                                        <p className={`fs-18 fw-300 mb-45 tp-ff-dm ${isDark ? "tp-text-grey-2" : ""}`}>
                                            Your email address will not be published. Required fields are marked *
                                        </p>
                                        <div className="tp-postbox-details-form-wrapper">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="tp-postbox-details-input mb-25">
                                                            <input className="tp-input" type="text" placeholder="Md Harun" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="tp-postbox-details-input mb-25">
                                                            <input className="tp-input" type="email" placeholder="aleric@mail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="tp-postbox-details-input mb-10">
                                                            <textarea className="tp-input tp-textarea" id="msg" placeholder="Write valuable comment"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-postbox-details-remember mb-30">
                                                    <input className="tp-checkbox" id="remeber" type="checkbox" />
                                                    <label htmlFor="remeber">Save my email address &amp; other info further when I comment</label>
                                                </div>
                                                <div className="tp-postbox-details-input-box">
                                                    <button type="submit" className="tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                            <span className="btn-text">Post Comment</span>
                                                            <span className="btn-icon">
                                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            <span className="btn-icon">
                                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogDetailsTwo;
