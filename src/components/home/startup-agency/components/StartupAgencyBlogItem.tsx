import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { BlogItemProps } from "@/types";
import Image from "next/image";

const StartupAgencyBlogItem: React.FC<BlogItemProps> = ({ image, title, categories = [], date, slug, type }) => {
    const isDark = useIsDarkRoute();
    const itemTitleColor = isDark ? "tp-text-common-white" : "";

    return (
        <div className="tp-blog-item tp--hover-item mb-60">
            <div className="tp-blog-thumb tp--hover-img mb-35 p-relative" data-displacement={image} data-intensity="0.6" data-speedin="1" data-speedout="1">
                <Image className="w-100 img-fluid" src={image} alt={title} width={536} height={315} />
            </div>
            <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-20">
                    <span>{categories.join(", ")}</span>
                    <span className="borders"></span>
                    <span>{date}</span>
                </div>
                <h3 className={`fs-25 fw-500 ${itemTitleColor}`}>
                    <SmartLink className="underline-black" href={`/blog-details/${type}/${slug}`}>{title}</SmartLink>
                </h3>
            </div>
        </div>
    );
};

export default StartupAgencyBlogItem;