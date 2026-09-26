import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { BlogItemProps } from "@/types";
import Image from "next/image";

const CreativeAgencyBlogItem: React.FC<BlogItemProps> = ({ fadeFrom, slug, image, title, categories, date, type }) => {
    // Check if current route uses dark theme
    const isDark = useIsDarkRoute();

    // Theme-based class 
    const theme = {
        titleClass: isDark ? "tp-text-common-white" : ""
    };
    return (
        <div
            className="tp-blog-item tp-blog-2-item tp--hover-item mb-40 tp_fade_anim"
            data-delay=".5"
            data-fade-from={fadeFrom}
            data-ease="bounce"
        >
            <SmartLink
                href={`/blog-details/${type}/${slug}`}
                className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
            >
                <div className="tp--hover-img" data-displacement="/assets/img/imghover/ramen.jpg" data-intensity="0.2" data-speedin="1" data-speedout="1">
                    <Image
                        className="w-100"
                        src={image}
                        alt={title}
                        width={423}
                        height={449}
                    />
                </div>
            </SmartLink>
            <div className="tp-blog-content">
                <div className="tp-blog-meta mb-15">
                    {categories.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                    <span className="borders"></span>
                    <span>{date}</span>
                </div>
                <h3 className={`fs-25 fw-500 lh-34 ${theme.titleClass}`}>
                    <SmartLink className="underline-black" href={`/blog-details/${type}/${slug}`}>
                        {title}
                    </SmartLink>
                </h3>
            </div>
        </div>
    );
};

export default CreativeAgencyBlogItem;
