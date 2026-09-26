"use client";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import { categories, recentPosts, tags } from "./data";

const BlogStandardSidebar = () => {
    const isDark = useIsDarkRoute();

    return (
        <div className="tp-sidebar-wrap mb-50">
            <div className="tp-sidebar-search mb-25">
                <form action="#">
                    <div className="tp-sidebar-search-input">
                        <input type="text" placeholder="Search" />
                        <button type="submit" aria-label="Search">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.9984 17L15.3984 15.4" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <div className="tp-sidebar-widget mb-30">
                <h3 className="tp-sidebar-widget-title mb-25">Category</h3>
                <div className="tp-sidebar-widget-content">
                    <ul>
                        {categories.map((cat) => (
                            <li key={cat.name}>
                                <Link href="/blog-grid">
                                    {cat.name} <span>({String(cat.count).padStart(2, "0")})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="tp-sidebar-widget mb-30">
                <h3 className="tp-sidebar-widget-title mb-25">Recent Post</h3>
                {recentPosts.map((post, index) => (
                    <div className="tp-sidebar-rc-post mb-15" key={post.title}>
                        <Link href="#" className="tp-sidebar-rc-post-tag mb-15">{post.tag}</Link>
                        <h4 className="tp-sidebar-rc-post-title">
                            <Link className={isDark ? "underline-white" : "underline-black"} href="/blog-details">
                                {post.title}
                            </Link>
                        </h4>
                        <span className="tp-sidebar-rc-post-dates">{post.date}</span>
                        {index < recentPosts.length - 1 && (
                            <span className="tp-sidebar-rc-border d-block mt-5">
                                <svg viewBox="0 0 364 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM359 3.5L364 5.88675V0.113249L359 2.5V3.5ZM4.5 3.5H359.5V2.5H4.5V3.5Z" fill="#EEEEEE" />
                                </svg>
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="tp-sidebar-widget mb-30">
                <h3 className="tp-sidebar-widget-title mb-25">Tag</h3>
                <div className="tp-sidebar-rc-tag pb-30">
                    <ul>
                        {tags.map((tag) => (
                            <li key={tag}><Link href="#">{tag}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className="tp-sidebar-banner bg-position"
                style={{ backgroundImage: "url('/assets/img/blog/postbox/bg.jpg')" }}
            >
                <img className="mb-25" src="/assets/img/blog/postbox/user.png" alt="User" />
                <h4 className="tp-text-common-white fs-25 mb-65">
                    Ready to optimize your marketing funnel for growth?
                </h4>
                <Link
                    href="/contact"
                    className="tp-btn-sm d-inline-block tp-left-right fw-500 tp-ff-heading fs-15 text-uppercase tp-text-common-black tp-bg-theme-primary tp-round-36"
                >
                    <span className="mr10 td-text d-inline-block mr-5">Let&apos;s Talk</span>
                    <span className="tp-arrow-angle">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default BlogStandardSidebar;
