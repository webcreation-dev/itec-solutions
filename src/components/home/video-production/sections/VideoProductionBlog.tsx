import VpBlogItem from "../components/VpBlogItem";
import { VPBlogItem } from "@/types/blog-d";

const blogItems: VPBlogItem[] = [
    {
        img: "/assets/img/blog/vp/thumb.jpg",
        titleTop: "Behind the Scenes of",
        titleBottom: "Great Storytelling.",
        link: "/blog-details-2",
    },
    {
        img: "/assets/img/blog/vp/thumb-2.jpg",
        titleTop: "The Future of Video in",
        titleBottom: "Digital Marketing.",
        link: "/blog-details-2",
    },
    {
        img: "/assets/img/blog/vp/thumb-3.jpg",
        titleTop: "Trends Shaping Modern",
        titleBottom: "Video Production.",
        link: "/blog-details-2",
    },
];

const VideoProductionBlog = () => {
    return (
        <div className="tp-blog-area pt-160 pb-130">
            <div className="container-fluid container-1524">
                <div className="row align-items-center">
                    {/* Title */}
                    <div className="col-lg-4">
                        <div className="tp-blog-vp-title-wrap mb-30">
                            <h2 className="tp-blog-vp-title tp-ff-morganite-bold text-uppercase ls-0 mb-0 tp-text-common-black-5">
                                <span className="tp_text_invert invert-black-6 d-inline-block">
                                    thoughts
                                </span>
                                <br />
                                <span className="tp_text_invert invert-black-6 d-inline-block">
                                    andinsights
                                </span>
                            </h2>
                        </div>
                    </div>
                    {/* Blog Items */}
                    <div className="col-lg-8">
                        <div className="tp-blog-vp-item-wrap ml-30">
                            {blogItems.map((blog, index) => (
                                <VpBlogItem key={index} {...blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoProductionBlog;