import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { BlogItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PersonalPortfolioBlogItem: React.FC<BlogItemProps> = ({ image, categories, date, title, fadeFrom, type, slug }) => {
    const formattedTitle = title.split("\n").map((line: string, i: number) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const blogItemStyles = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black"
    };
    // -------------------------------
    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="tp-blog-item tp--hover-item tp-blog-pp-item mb-40 tp_fade_anim"
                data-delay=".4"
                data-fade-from={fadeFrom}
                data-ease="bounce"
            >
                <SmartLink
                    href={`/blog-details/${type}/${slug}`}
                    className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
                >
                    <div
                        className="tp--hover-img"
                        data-displacement="/assets/img/imghover/fluid.jpg"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <Image width={422} height={348} className="w-100 img-fluid" src={image} alt="blog image" />
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

                    <h3 className={`fs-25 fs-xl-22 lh-140-per ${blogItemStyles.text}`}>
                        <SmartLink
                            className="underline-black"
                            href={`/blog-details/${type}/${slug}`}
                        >
                            {formattedTitle}
                        </SmartLink>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioBlogItem;