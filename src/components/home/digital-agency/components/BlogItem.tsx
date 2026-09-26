import { SmartLink } from "@/components/common";
import { BlogItemProps } from "@/types/blog-d";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const BlogItem: React.FC<BlogItemProps> = ({ image, categories, date, title, fadeFrom, type, slug }) => {
    const isDark = useIsDarkRoute();

    // Blog title
    const blogTitleClass = isDark
        ? "tp-text-common-white"
        : "";

    return (
        <div
            className="col-lg-4 col-md-6"
            data-fade-from={fadeFrom}
        >
            <div className="tp-blog-item tp--hover-item mb-40 tp_fade_anim" data-delay=".5" data-ease="bounce">
                <SmartLink href={`/blog-details/${type}/${slug}`} className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block">
                    <div
                        className="tp--hover-img"
                        data-displacement="/assets/img/imghover/strip.png"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <img className="w-100" src={image} alt={title} />
                    </div>
                </SmartLink>
                <div className="tp-blog-content text-center">
                    <div className="tp-blog-meta mb-15">
                        <span>{categories.map((cat, i) => (
                            <Link key={i} href="#">
                                {cat}
                            </Link>
                        ))}</span>
                        <span className="borders"></span>
                        <span>{date}</span>
                    </div>
                    <h3 className={`fs-25 ${blogTitleClass}`}>
                        <SmartLink className="underline-black" href={`/blog-details/${type}/${slug}`}>
                            {title}
                        </SmartLink>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;