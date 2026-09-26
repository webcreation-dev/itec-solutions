"use client";
import { ScrollLink } from "@/components/common/ScrollLink";
import ImageTrail from "@/utils/ImageTrail";
import { useIsDarkRoute } from "@/hooks";
import { ScrollArrow } from "@/svg";

const heroImages = [
    { id: 1, src: "/assets/img/hero/vp/1.png" },
    { id: 2, src: "/assets/img/hero/vp/2.png" },
    { id: 3, src: "/assets/img/hero/vp/3.png" },
    { id: 4, src: "/assets/img/hero/vp/4.png" },
    { id: 5, src: "/assets/img/hero/vp/5.png" },
    { id: 6, src: "/assets/img/hero/vp/6.png" },
    { id: 7, src: "/assets/img/hero/vp/7.png" },
    { id: 8, src: "/assets/img/hero/vp/8.png" },
    { id: 9, src: "/assets/img/hero/vp/9.png" },
    { id: 10, src: "/assets/img/hero/vp/10.png" },
    { id: 11, src: "/assets/img/hero/vp/11.png" },
    { id: 12, src: "/assets/img/hero/vp/12.png" },
    { id: 13, src: "/assets/img/hero/vp/13.png" },
    { id: 14, src: "/assets/img/hero/vp/14.png" },
    { id: 15, src: "/assets/img/hero/vp/15.png" },
    { id: 16, src: "/assets/img/hero/vp/16.png" },
    { id: 17, src: "/assets/img/hero/vp/17.png" }
];

const VideoProductionHero = () => {
    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // Class 
    // -------------------------------
    const heroTitleColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5";
    const heroParagraphColor = isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-6";
    const heroLinkColor = isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-5";
    const heroLinkHoverColor = isDarkRoute ? "hover-text-white" : "";
    // -------------------------------

    return (
        <section className="tp-hero-area p-relative fix pre-header">
            <ImageTrail images={heroImages} />
            {/* hero content */}
            <div className="tp-hero-vp-spacing">
                <div className="container-fluid container-1824 containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-hero-vp-content mb-105 text-center">
                                <h2 className={`tp-hero-vp-title tp-ff-morganite-bold text-uppercase ${heroTitleColor} ls-0 text-scale-anim`}>
                                    Video Production
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="tp-hero-vp-btn smooth mb-30">
                                <ScrollLink
                                    target="#awards"
                                    className={`tp-ff-dm lh-1 align-items-center fw-600 fs-18 ls-m-5 ${heroLinkColor} ${heroLinkHoverColor} d-flex`}
                                >
                                    Scroll to Explore
                                    <ScrollArrow />
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="text-lg-end mb-30">
                                <p className={`tp-ff-dm fw-500 fs-24 lh-140-per ls-m-2 ${heroParagraphColor}`}>
                                    From strategy to deployment, we fuse cutting
                                    <br />
                                    technology with creative thinking to craft digital
                                    <br />
                                    products that learn adapt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoProductionHero;