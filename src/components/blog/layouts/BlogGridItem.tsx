"use client";
import React from "react";
import Link from "next/link";
import { BlogItemDT } from "@/types/blog-d";
import { useIsDarkRoute } from "@/hooks";

const BlogGridItem = ({ image, categories, date, title, fadeFrom, delay }: BlogItemDT) => {
    const isDark = useIsDarkRoute();

    return (
        <div
            className="tp-blog-item tp--hover-item mb-60 tp_fade_anim"
            data-delay={delay || ".4"}
            data-fade-from={fadeFrom || "bottom"}
            data-ease="bounce"
        >
            <Link
                href={`/blog-details`}
                className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
            >
                <div
                    className="tp--hover-img"
                    data-displacement="/assets/img/imghover/strip.png"
                    data-intensity="0.2"
                    data-speedin="1"
                    data-speedout="1"
                >
                    <img
                        className="w-100"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-15">
                    <span>{categories?.[0]}</span>
                    <span className="borders"></span>
                    <span>{date}</span>
                </div>
                <h3 className={`fs-25 lh-120-per ${isDark ? "tp-text-common-white" : ""}`}>
                    <Link className="underline-black" href={`/blog-details`}>
                        {title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default BlogGridItem;
