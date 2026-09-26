import { SmartLink } from "@/components/common";
import { BlogItemProps } from "@/types";
import { BlogTagIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

//categories
const categories = ["Fashion", "Lift Style", "News"];

const ShopModernBlogItem: React.FC<BlogItemProps> = ({ image, title, date, slug, type }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="al-blog-shop-item mb-40">
                <div className="al-blog-shop-thumb p-relative fix">
                    <SmartLink href={`/blog-details/${type}/${slug}`}>
                        <Image className="img-fluid" width={424} height={331} src={image} alt={title} />
                    </SmartLink>
                    <div className="al-blog-shop-meta-date">
                        <span>{date}</span>
                    </div>
                </div>

                <div className="al-blog-shop-content has-thumbnail">
                    <div className="al-blog-shop-meta">
                        <span>
                            <BlogTagIcon />
                        </span>{" "}
                        {categories.map((cat, i) => (
                            <Link key={i} href="#">
                                {cat}
                                {i !== categories.length - 1 && ", "}
                            </Link>
                        ))}
                    </div>
                    <h3 className="al-blog-shop-title">
                        <SmartLink href={`/blog-details/${type}/${slug}`}>
                            {title}
                        </SmartLink>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ShopModernBlogItem;