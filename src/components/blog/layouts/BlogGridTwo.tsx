"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { blogData } from "@/data/blog-data";
import { useIsDarkRoute } from "@/hooks";

const brandLogos = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];

const BlogGridTwo = () => {
    const isDark = useIsDarkRoute();
    const blogs = blogData.blogGridTwo ?? [];

    // Split: first 4 normal + quote + last 2
    const firstFour = blogs.slice(0, 4);
    const lastTwo = blogs.slice(4, 6);

    return (
        <main>
            {/* tp-breadcrumb-area-start */}
            <div className="tp-breadcrumb-area pre-header tp-pricing-2-spacing bg-position pb-90">
                <div className="container-fluid container-1524 containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-breadcrumb-ai-title-wrap">
                                <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 ${isDark ? "tp-text-common-white" : "tp-text-common-black-5"}`}>
                                    Our Blog
                                </h2>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-border pt-25">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><span></span></li>
                                        <li>Our Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-breadcrumb-area-end */}

            {/* tp-breadcrumb-banner-area-start */}
            <div
                className="tp-breadcrumb-banner-2-spacing pre-header bg-position"
                style={{ backgroundImage: "url('/assets/img/breadcrumb/thumb-13.jpg')" }}
            >
                <div className="tp-brand-wrap">
                    <div className="tp-brand-slide-active">
                        <Marquee speed={60} gradient={false} autoFill={true}>
                            {brandLogos.map((n, idx) => (
                                <div className="tp-brand-item" key={idx}>
                                    <Link
                                        href="#"
                                        style={{
                                            // opacity: 0.5,
                                            transition: "opacity 0.3s ease",
                                            display: "inline-block",
                                            margin: "0 80px",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.opacity = "1";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.opacity = "0.5";
                                        }}
                                    >
                                        <img
                                            src={`/assets/img/brands/white-2/logo${n === 1 ? "" : `-${n}`}.png`}
                                            alt={`Brand ${idx}`}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
            {/* tp-breadcrumb-banner-area-end */}


            {/* tp-blog-grid-area-start */}
            <div className="tp-blog-grid-area pt-160 pb-110">
                <div className="container-fluid container-1524">
                    <div className="row">
                        {/* Left title column */}
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="tp-team-it-title-wrap mb-40">
                                <span className={`tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 fs-18 mb-30 ${isDark ? "tp-text-common-white" : "tp-text-common-black-1"}`}>
                                    Our blog
                                </span>
                                <h2 className={`tp-text-revel-anim fix fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter mb-30 ${isDark ? "tp-text-common-white" : "tp-text-common-black-1"}`}>
                                    Read powerful<br />
                                    stories and insights<br />
                                    to fuel smarter.
                                </h2>
                                <p className={`tp-section-it-para tp-ff-inter lh-150-per fs-18 ${isDark ? "tp-text-grey-2" : "tp-text-common-black-4"}`}>
                                    &ldquo;Aleric delivered exactly what we needed — efficient, reliable,<br />
                                    and results-driven solutions. We&apos;ve seen measurable.
                                </p>
                            </div>
                        </div>

                        {/* Right blog grid */}
                        <div className="col-xl-7">
                            <div className="tp-blog-it-item-right">
                                <div className="row gx-50">

                                    {/* First 4 blog items */}
                                    {firstFour.map((blog) => (
                                        <div className="col-lg-6 col-md-6" key={blog.id}>
                                            <div
                                                className="tp-blog-item tp-blog-it-item tp--hover-item mb-50 tp_fade_anim"
                                                data-delay={blog.delay || ".3"}
                                            >
                                                <Link
                                                    href="/blog-details-2"
                                                    className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
                                                >
                                                    <div
                                                        className="tp--hover-img"
                                                        data-displacement="/assets/img/imghover/stripe-mul.png"
                                                        data-intensity="0.2"
                                                        data-speedin="1"
                                                        data-speedout="1"
                                                    >
                                                        <img className="w-100" src={blog.image} alt={blog.title} />
                                                    </div>
                                                </Link>
                                                <div className="tp-blog-content">
                                                    <div className="tp-blog-meta mb-25">
                                                        <span>{blog.categories?.[0]}</span>
                                                        <span className="borders"></span>
                                                        <span>{blog.date}</span>
                                                    </div>
                                                    <h3 className={`fs-28 tp-ff-inter ${isDark ? "tp-text-common-white" : "tp-text-common-black-1"}`}>
                                                        <Link className={isDark ? "underline-white" : "underline-black"} href="/blog-details-2">
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Quote card */}
                                    <div className="col-12">
                                        <div
                                            className="tp-blog-it-qoute tp-bg-common-black-1 tp-round-20 mb-50 tp_fade_anim"
                                            data-delay=".3"
                                        >
                                            <div className="tp-blog-it-qoute-wrap d-flex flex-wrap mb-25 pb-25">
                                                <span className="tp-blog-it-qoute-icon mr-20 mb-10 tp-text-common-white d-flex justify-content-center align-items-center rounded-circle">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.18129 14.8221C6.97045 14.6113 6.77245 14.3803 6.5937 14.1364C6.29579 13.7276 6.38562 13.1538 6.79537 12.8559C7.2042 12.5579 7.77712 12.6478 8.07595 13.0566C8.1942 13.2198 8.32712 13.3765 8.47654 13.525C9.21262 14.2611 10.1907 14.6663 11.2311 14.6663C12.2715 14.6663 13.2505 14.2611 13.9857 13.525L19.0274 8.48335C20.5463 6.96443 20.5463 4.49218 19.0274 2.97327C17.5085 1.45435 15.0362 1.45435 13.5173 2.97327L12.5475 3.9431C12.189 4.30152 11.6097 4.30152 11.2513 3.9431C10.8929 3.58468 10.8929 3.00535 11.2513 2.64693L12.2211 1.6771C14.455 -0.557732 18.0896 -0.557732 20.3235 1.6771C22.5575 3.91102 22.5575 7.5456 20.3235 9.77952L15.2819 14.8212C14.2002 15.9038 12.761 16.4996 11.2311 16.4996C9.7012 16.4996 8.26204 15.9038 7.18129 14.8221ZM5.73112 21.9996C7.26195 21.9996 8.7002 21.4038 9.78187 20.3212L10.7517 19.3514C11.1101 18.9939 11.1101 18.4136 10.7517 18.0552C10.3942 17.6968 9.81395 17.6977 9.45554 18.0552L8.48479 19.025C7.7487 19.7611 6.77062 20.1663 5.7302 20.1663C4.68979 20.1663 3.7117 19.7611 2.97562 19.025C2.23954 18.2889 1.83437 17.3109 1.83437 16.2704C1.83437 15.23 2.23954 14.251 2.97562 13.5159L8.01729 8.47418C8.75337 7.7381 9.73145 7.33293 10.7719 7.33293C11.8123 7.33293 12.7913 7.7381 13.5265 8.47418C13.6731 8.62177 13.807 8.77852 13.9261 8.94168C14.2231 9.35143 14.796 9.4431 15.2067 9.14427C15.6165 8.84635 15.7072 8.27343 15.4093 7.86368C15.2351 7.62352 15.038 7.39343 14.8235 7.17893C13.741 6.09543 12.3018 5.4996 10.7719 5.4996C9.24195 5.4996 7.80279 6.09543 6.72112 7.17802L1.68037 12.2197C0.597786 13.3014 0.00195312 14.7405 0.00195312 16.2704C0.00195312 17.8004 0.597786 19.2395 1.68037 20.3212C2.76204 21.4038 4.20029 21.9996 5.73112 21.9996Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <div className="tp-blog-it-qoute-info mb-20 d-flex align-items-center">
                                                        <span className="tp-ff-dm fs-18 ls-m-2 tp-text-grey-5">15 Apr</span>
                                                        <span className="dvdr ml-20 mr-20"></span>
                                                        <span className="tp-ff-dm fs-18 ls-m-2 tp-text-grey-5">Branding Agency</span>
                                                    </div>
                                                    <h5 className="tp-text-grey-5 fw-600 fs-32 lh-130-per ls-m-4 tp-ff-dm">
                                                        Where Big Ideas Smart Together.
                                                    </h5>
                                                </div>
                                            </div>
                                            <Link href="#" className="tp-ff-dm fw-600 fs-18 ls-m-4 tp-text-grey-5 hover-text-white underline-white">
                                                https://illuminationconsulting.com/blog
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Last 2 blog items */}
                                    {lastTwo.map((blog) => (
                                        <div className="col-lg-6 col-md-6" key={blog.id}>
                                            <div
                                                className="tp-blog-item tp-blog-it-item tp--hover-item mb-50 tp_fade_anim"
                                                data-delay={blog.delay || ".3"}
                                            >
                                                <Link
                                                    href="/blog-details-2"
                                                    className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
                                                >
                                                    <div
                                                        className="tp--hover-img"
                                                        data-displacement="/assets/img/imghover/stripe-mul.png"
                                                        data-intensity="0.2"
                                                        data-speedin="1"
                                                        data-speedout="1"
                                                    >
                                                        <img className="w-100" src={blog.image} alt={blog.title} />
                                                    </div>
                                                </Link>
                                                <div className="tp-blog-content">
                                                    <div className="tp-blog-meta mb-25">
                                                        <span>{blog.categories?.[0]}</span>
                                                        <span className="borders"></span>
                                                        <span>{blog.date}</span>
                                                    </div>
                                                    <h3 className={`fs-28 tp-ff-inter ${isDark ? "tp-text-common-white" : "tp-text-common-black-1"}`}>
                                                        <Link className={isDark ? "underline-white" : "underline-black"} href="/blog-details-2">
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Pagination */}
                                    <div className="col-12">
                                        <div className="tp-blog-pagenation-wrap pt-20">
                                            <Link href="#" className="tp-blog-pagenation-nav">
                                                <svg className="mr-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.32503 9.91054L0.279989 5.63362C0.194002 5.56483 0.123373 5.47086 0.0744866 5.36023C0.0256005 5.2496 0 5.12579 0 5C0 4.87421 0.0256005 4.7504 0.0744866 4.63977C0.123373 4.52914 0.194002 4.43518 0.279989 4.36638L6.32503 0.0894619C6.44282 0.0111909 6.57854 -0.0168364 6.71077 0.00979851C6.84301 0.0364334 6.96425 0.116215 7.05538 0.236567C7.1465 0.356918 7.20233 0.510993 7.21407 0.674501C7.2258 0.838009 7.19277 1.00165 7.12018 1.13963L5.36702 4.26665L24.4012 4.26665C24.56 4.26665 24.7123 4.34391 24.8246 4.48144C24.9369 4.61897 25 4.8055 25 5C25 5.1945 24.9369 5.38103 24.8246 5.51856C24.7123 5.65609 24.56 5.73335 24.4012 5.73335L5.36702 5.73335L7.12018 8.86038C7.19277 8.99835 7.2258 9.16199 7.21407 9.3255C7.20233 9.48901 7.1465 9.64308 7.05538 9.76343C6.96425 9.88378 6.84301 9.96357 6.71077 9.9902C6.57854 10.0168 6.44282 9.98881 6.32503 9.91054Z" fill="currentColor" />
                                                </svg>
                                                Previous
                                            </Link>
                                            <div className="tp-blog-pagenation">
                                                <ul>
                                                    <li><Link className="active" href="#">01</Link></li>
                                                    <li><Link href="#">02</Link></li>
                                                    <li><Link href="#">03</Link></li>
                                                    <li><Link href="#">04</Link></li>
                                                </ul>
                                            </div>
                                            <Link href="#" className="tp-blog-pagenation-nav">
                                                NEXT
                                                <svg className="ml-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-blog-grid-area-end */}
        </main>
    );
};

export default BlogGridTwo;