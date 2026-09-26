import { SmartLink } from "@/components/common";
import { BlogItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AiAgencyBlogItem: React.FC<BlogItemProps> = ({ title, image, categories, date, slug, type }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="creative-blog-item mb-40">
                {/* IMAGE */}
                <div className="creative-blog-thumb">
                    <SmartLink href={`/blog-details/${type}/${slug}`}>
                        <Image className="img-fluid" width={423} height={300}
                            src={image}
                            alt={title}
                        />
                    </SmartLink>
                </div>
                {/* META */}
                <div className="creative-blog-meta">
                    <span>{categories?.map((cat, i) => (
                        <Link key={i} href="#">
                            {cat}
                        </Link>
                    ))}</span>
                    <span>{date}</span>
                </div>

                {/* TITLE */}
                <h4 className="creative-blog-title-sm">
                    <SmartLink
                        className="tp-line-white underline-white"
                        href={`/blog-details/${type}/${slug}`}
                    >
                        {title}
                    </SmartLink>
                </h4>
            </div>
        </div>
    );
};

export default AiAgencyBlogItem;