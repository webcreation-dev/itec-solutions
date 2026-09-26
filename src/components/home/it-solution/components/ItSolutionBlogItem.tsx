import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

interface ItSolutionBlogItemProps {
    item: {
        img: string;
        category: string;
        date: string;
        title: string;
        delay: string;
        extraClass: string;
    };
}

const ItSolutionBlogItem = ({ item }: ItSolutionBlogItemProps) => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const blogStyles = {
        titleText: isDark ? "tp-text-common-white" : "tp-text-common-black-1"
    };
    // -------------------------------
    return (
        <div className="col-lg-6 col-md-6">
            <div
                className={`tp-blog-item tp-blog-it-item tp--hover-item mb-40 ${item.extraClass} tp_fade_anim`}
                data-delay={item.delay}
            >
                <SmartLink
                    href="/blog-details-2"
                    className="tp-blog-thumb d-block p-relative fix d-inline-block"
                >
                    <div
                        className="tp--hover-img"
                        data-displacement="/assets/img/imghover/stripe-mul.png"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <Image width={400} height={377} className=" w-100" src={item.img} alt="blog image" />
                    </div>
                </SmartLink>

                <div className="tp-blog-content">
                    <div className="tp-blog-meta mb-25">
                        <span>{item.category}</span>
                        <span className="borders"></span>
                        <span>{item.date}</span>
                    </div>

                    <h3 className={`fs-28 tp-ff-inter ${blogStyles.titleText}`}>
                        <SmartLink className="underline-black" href="/blog-details-2">
                            {item.title}
                        </SmartLink>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ItSolutionBlogItem;