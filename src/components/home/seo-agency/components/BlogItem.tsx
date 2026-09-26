import { BlogItemProps } from "@/types/blog-d";
import { SmartLink } from "@/components/common";
import { TimeIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const BlogItem: React.FC<BlogItemProps> = ({ categories, title, slug, date, image, avatar, author, delay, type }) => {
    return (
        <div
            className="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
            data-delay={delay}
        >
            <div className="al-blog-seo-item">
                <div className="al-blog-seo-content mb-20">
                    {/* Categories */}
                    <div className="al-blog-seo-category">
                        {categories.map((cat, i) => (
                            <Link key={i} href="#">
                                {cat}
                            </Link>
                        ))}
                    </div>

                    {/* Title */}
                    <h4 className="al-blog-seo-title">
                        <SmartLink href={`/blog-details/${type}/${slug}`}>
                            {title}
                        </SmartLink>
                    </h4>

                    {/* Meta */}
                    <div className="al-blog-seo-meta">
                        <span>
                            <TimeIcon />
                        </span>
                        <span>{date}</span>
                    </div>
                </div>

                {/* Thumbnail */}
                <div className="al-blog-seo-thumb fix">
                    <SmartLink href={`/blog-details/${type}/${slug}`}>
                        <Image width={404} height={155} className="w-100" src={image} alt={title} />
                    </SmartLink>
                </div>

                {/* Author */}
                <div className="al-blog-seo-content">
                    <div className="al-blog-seo-avater-info d-flex align-items-center">
                       {avatar &&  <Image width={30} height={30} src={avatar} alt={author || "author"} />}
                        <span>{author}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;