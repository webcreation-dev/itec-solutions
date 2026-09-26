"use client";
import Link from "next/link";
import Image from "next/image";
import { useIsDarkRoute } from "@/hooks";
import BlogGridTextSlider from "./BlogGridTextSlider";
import BlogStandardSidebar from "./blog-standard/BlogStandardSidebar";

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

const BlogDetails = () => {
    const isDark = useIsDarkRoute();

    return (
        <main>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
                <span className="tp-service-hero-shape-2 p-absolute">
                    <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="413.5"
                            cy="413.5"
                            r="353.5"
                            transform="matrix(-1 0 0 1 820 0)"
                            stroke={isDark ? "#D9D9D9" : "#F0F0F0"}
                            strokeOpacity={isDark ? "0.05" : "1"}
                            strokeWidth="120"
                        />
                    </svg>
                </span>
                <div className="container">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative z-index-1 mb-40">
                                <h2 className={`fs-70 fs-lg-60 fs-xs-40 ${isDark ? "tp-text-common-white" : ""}`}>
                                    News &amp; Insights <br />Details.
                                </h2>
                                <div className="tp-service-details-icon">
                                    <Image
                                        className="tp-live-anim-spin"
                                        src="/assets/img/breadcrumb/icon.png"
                                        alt="Decorative icon"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                            stroke={isDark ? "#fff" : "#030303"}
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-135">
                                <p className={`fs-20 lh-140-per ${isDark ? "tp-text-grey-2" : ""}`}>
                                    A brief introduction explaining what type of<br />
                                    content users can expect, such as industry<br />
                                    trends, agency updates, success stories, and<br />
                                    expert insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-breadcrumb-list">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><span></span></li>
                                        <li>News &amp; Insight Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-hero-area-end */}

            {/* tp-blog-banner-area-start */}
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
            {/* tp-blog-banner-area-end */}

            {/* tp-blog-details-area-start */}
            <div className="tp-blog-details-area pt-140 pb-90">
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <div className="col-lg-8">
                            <div className="tp-postbox-wrapper mr-110 mb-50">
                                <h2 className={`fs-50 fs-sm-40 fs-xs-30 lh-120-per mb-55 ${isDark ? "tp-text-common-white" : ""}`}>
                                    Mastering customer<br /> journeys with marketing funnel analytics.
                                </h2>

                                <div className="tp-blog-details-link-wrap mb-25">
                                    <div className="tp-blog-details-dates mr-20 mb-10">
                                        <span>Web Design</span>
                                        <span className="borders"></span>
                                        <span>02 Feb, 2025</span>
                                    </div>
                                    <div className="tp-blog-details-link mb-10">
                                        <Link href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6875 10.375C11.7612 10.375 10.945 10.8307 10.4323 11.5236L5.99969 9.25387C6.07328 9.00303 6.125 8.74306 6.125 8.46875C6.125 8.09669 6.04872 7.74297 5.91694 7.41762L10.5558 4.62612C11.0721 5.232 11.8309 5.625 12.6875 5.625C14.2384 5.625 15.5 4.36341 15.5 2.8125C15.5 1.26159 14.2384 0 12.6875 0C11.1366 0 9.875 1.26159 9.875 2.8125C9.875 3.16991 9.94859 3.50894 10.0707 3.82369L5.41797 6.62337C4.90216 6.0355 4.15428 5.65625 3.3125 5.65625C1.76159 5.65625 0.5 6.91784 0.5 8.46875C0.5 10.0197 1.76159 11.2812 3.3125 11.2812C4.25406 11.2812 5.08409 10.8122 5.59484 10.0998L10.0128 12.3622C9.93147 12.6248 9.875 12.8984 9.875 13.1875C9.875 14.7384 11.1366 16 12.6875 16C14.2384 16 15.5 14.7384 15.5 13.1875C15.5 11.6366 14.2384 10.375 12.6875 10.375Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                        <Link href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.61198 11.0601L6.1639 13.5082C5.15143 14.5208 3.50411 14.5208 2.49164 13.5084C2.00116 13.0179 1.73111 12.3658 1.73111 11.6722C1.73111 10.9788 2.00116 10.3268 2.49147 9.83628L4.93972 7.38797C5.27769 7.04994 5.27769 6.50188 4.93966 6.16391C4.60169 5.82594 4.05362 5.82594 3.71559 6.16391L1.26752 8.61204C0.449973 9.42993 0 10.5165 0 11.6722C0 12.8282 0.450146 13.915 1.26758 14.7324C2.11132 15.5761 3.21952 15.998 4.32777 15.998C5.43603 15.998 6.54428 15.5761 7.38791 14.7324L9.83604 12.2842C10.174 11.9462 10.174 11.3981 9.83599 11.0601C9.49807 10.7221 8.95006 10.7221 8.61198 11.0601ZM16 4.32778C16 3.1718 15.5498 2.08501 14.7324 1.26758C13.0449 -0.419789 10.2993 -0.419731 8.61203 1.26758L6.16378 3.71583C5.82576 4.0538 5.82576 4.60193 6.16378 4.9399C6.49807 5.27394 7.0461 5.27394 7.38785 4.9399L9.83616 2.49165C10.8485 1.4793 12.4958 1.47924 13.5083 2.49165C13.9987 2.98213 14.2689 3.63424 14.2689 4.32778C14.2689 5.02126 13.9988 5.67325 13.5085 6.16373L11.0602 8.61204C10.7223 8.95001 10.7223 9.49808 11.0603 9.83611C11.3983 10.174 11.9463 10.174 12.2843 9.83611L14.7324 7.38797C15.55 6.57008 16 5.48346 16 4.32778Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className="tp-blog-details-content mb-70">
                                    <p className={`fs-18 lh-150-per ${isDark ? "tp-text-grey-2" : ""}`}>
                                        XYZ Tech, a fast-growing SaaS company, approached us to refresh their brand identity and digital presence to attract enterprise clients. Our goal was to create a modern, scalable, and visually striking brand that resonated with their target audience.
                                    </p>
                                    <p className={`fs-18 lh-150-per ${isDark ? "tp-text-grey-2" : ""}`}>
                                        Branding design is the visual and strategic identity of a business, shaping how it is perceived by customers. It includes elements like the logo, color palette, typography, imagery, and messaging, all working together to create a strong and memorable brand presence.
                                    </p>
                                    <div className="tp-service-details-content mt-55">
                                        <h5 className={`fs-25 mb-25 ${isDark ? "tp-text-common-white" : ""}`}>Why Marketing Funnel Analytics Matters</h5>
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p className={isDark ? "tp-text-grey-2" : ""}><b>Identify Weak Points – </b> Detect where prospects drop off and optimize those areas.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p className={isDark ? "tp-text-grey-2" : ""}><b>Improve ROI – </b> Allocate budget efficiently based on high-performing channels.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p className={isDark ? "tp-text-grey-2" : ""}><b>Enhance User Experience – </b> Personalize content and messaging to increase engagement.</p>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p className={isDark ? "tp-text-grey-2" : ""}><b>Boost Conversions – </b> Optimize CTAs, landing pages, and sales processes for better results.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="tp-blog-details-adds mb-30">
                                    <h3 className={`fw-500 fs-35 lh-130-per mb-50 ${isDark ? "tp-text-common-white" : ""}`}>Awareness &amp; Traffic Generation Tools</h3>
                                    <div className="tp-blog-details-adds-item mb-50">
                                        <h3 className={`fw-500 fs-35 lh-130-per mb-25 ${isDark ? "tp-text-common-white" : ""}`}>
                                            <span className="d-inline-block mr-10">1.</span>Google Ads
                                        </h3>
                                        <img className="w-100 mb-35" src="/assets/img/blog/details/thumb.jpg" alt="Google Ads" />
                                        <p className={`fs-18 lh-150-per mb-20 ${isDark ? "tp-text-grey-2" : ""}`}>
                                            <span className="fw-500 tp-text-common-nights">Google Ads</span> is a pay-per-click advertising platform that allows businesses to display ads on Google Search, YouTube, Gmail, and partner websites. It helps brands attract customers through targeted ads based on keywords, audience behavior, and demographics.
                                        </p>
                                        <p className={`fs-18 lh-150-per ${isDark ? "tp-text-grey-2" : ""}`}>
                                            Google Ads is a powerful tool to drive high-quality traffic, increase sales, and maximize ROI. Whether you&apos;re a small business or a global brand, a well-optimized Google Ads strategy can deliver measurable results.
                                        </p>
                                    </div>
                                    <div className="tp-blog-details-adds-item">
                                        <h3 className={`fw-500 fs-35 lh-130-per mb-25 ${isDark ? "tp-text-common-white" : ""}`}>
                                            <span className="d-inline-block mr-10">2.</span>SEMrush / Ahrefs
                                        </h3>
                                        <img className="w-100 mb-35" src="/assets/img/blog/details/thumb-2.jpg" alt="SEMrush Ahrefs" />
                                        <p className={`fs-18 lh-150-per mb-20 ${isDark ? "tp-text-grey-2" : ""}`}>
                                            Both <span className="fw-500 tp-text-common-nights">SEMrush &amp; Ahrefs</span> are powerful SEO and digital marketing tools that help businesses improve their search engine rankings, competitor analysis, and content strategy.
                                        </p>
                                        <p className={`fs-18 lh-150-per mb-50 ${isDark ? "tp-text-grey-2" : ""}`}>
                                            SEMrush and Ahrefs are industry leaders, but your choice depends on your specific needs. If you want a complete marketing toolkit, SEMrush is better. If your main focus is SEO and backlinks, Ahrefs is the top choice.
                                        </p>
                                        <h3 className={`fw-500 fs-35 lh-130-per mb-15 ${isDark ? "tp-text-common-white" : ""}`}>
                                            <span className="d-inline-block mr-10">Conclusion</span>
                                        </h3>
                                        <p className={`fs-18 lh-150-per ${isDark ? "tp-text-grey-2" : ""}`}>
                                            Mastering marketing funnel analytics is essential for businesses aiming to attract, engage, convert, and retain customers effectively. By tracking each stage of the funnel—from awareness to loyalty—brands can identify weak points, refine their strategies, and maximize conversions.
                                        </p>
                                    </div>
                                </div>

                                {/* Tags & Social */}
                                <div className="tp-blog-details-tag-wrap">
                                    <div className="tp-blog-details-tag mr-20 mb-10">
                                        <ul>
                                            <li><Link href="#">Marketing</Link></li>
                                            <li><Link href="#">Paid SEO</Link></li>
                                            <li><Link href="#">Page Optimize</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tp-blog-details-social mb-10">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Comments */}
                                <div className="tp-blog-comment-form pt-90">
                                    <div className="postbox__comment mb-100">
                                        <h3 className={`fs-50 ${isDark ? "tp-text-common-white" : ""}`}>3 Comments</h3>
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
                                                                <h5 className={isDark ? "tp-text-common-white" : ""}>{comment.name}</h5>
                                                                <span className="post-meta">{comment.date}</span>
                                                            </div>
                                                            <p className={isDark ? "tp-text-grey-2" : ""}>{comment.text}</p>
                                                            <div className="postbox__comment-reply">
                                                                <Link href="#">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Comment Form */}
                                    <div className="tp-postbox-details-form">
                                        <h3 className={`fs-35 fw-500 ${isDark ? "tp-text-common-white" : ""}`}>Leave a Reply</h3>
                                        <p className={`fs-18 fw-300 mb-45 ${isDark ? "tp-text-grey-2" : ""}`}>
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
                                                    <button type="submit" className="tp-btn-sm tp-left-right fw-500 tp-ff-heading fs-15 text-uppercase tp-text-common-black tp-bg-theme-primary tp-round-36">
                                                        <span className="mr10 td-text d-inline-block mr-5">Post Comment</span>
                                                        <span className="tp-arrow-angle">
                                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <BlogStandardSidebar />
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-blog-details-area-end */}

            <BlogGridTextSlider />
        </main>
    );
};

export default BlogDetails;