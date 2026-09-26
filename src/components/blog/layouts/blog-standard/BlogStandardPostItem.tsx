"use client";

import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import { VideoPlayIconFive } from "@/svg";
import BlogPostSlider from "./BlogPostSlider";
import { BlogStandardPost } from "./data";

interface BlogStandardPostItemProps {
    post: BlogStandardPost;
}

const getYoutubeVideoId = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").filter(Boolean).pop() || url;
    } catch {
        return url;
    }
};

const BlogStandardPostItem = ({ post }: BlogStandardPostItemProps) => {
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    return (
        <article className="tp-postbox-item mb-65">
            {post.type === "slider" && <BlogPostSlider images={post.images} postId={post.id} />}

            {post.type === "image" && (
                <div className="tp-postbox-thumb mb-30">
                    <img className="w-100" src={post.image} alt={post.title} />
                </div>
            )}

            {post.type === "video" && (
                <div className="tp-postbox-thumb p-relative mb-30">
                    <img className="w-100" src={post.image} alt={post.title} />
                    <button
                        type="button"
                        className="tp-hero-video-btn tp-postbox-video-btn popup-video mr-20"
                        onClick={() => playVideo(getYoutubeVideoId(post.videoUrl))}
                        aria-label={`Play video: ${post.title}`}
                    >
                        <span><VideoPlayIconFive /></span>
                    </button>
                </div>
            )}

            <div className="tp-postbox-content">
                <div className="tp-blog-meta mb-15">
                    <span>{post.category}</span>
                    <span className="borders"></span>
                    <span>{post.date}</span>
                </div>
                <h2 className="tp-postbox-title mb-20">
                    <Link className={isDark ? "underline-white" : "underline-black"} href="/blog-details">
                        {post.title}
                    </Link>
                </h2>
                <p className="tp-postbox-text">{post.text}</p>
            </div>
        </article>
    );
};

export default BlogStandardPostItem;
