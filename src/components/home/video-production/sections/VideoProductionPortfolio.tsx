import { SmartLink } from "@/components/common";
import PortfolioItem from "./PortfolioItem";
import { VPPortfolioItem } from "@/types";
import { ArrowIconFifteen } from "@/svg";

const portfolioItems: VPPortfolioItem[] = [
    {
        video:
            "https://player.vimeo.com/video/1099238062?background=1&loop=1&muted=1&controls=0&autoplay=0",
        titleTop: "Diverse Industries",
        titleMiddle: "One Visual Language",
        link: "/portfolio-details-two",
    },
    {
        video:
            "https://player.vimeo.com/video/1099238103?background=1&loop=1&muted=1&controls=0&autoplay=0",
        titleTop: "Cinematic Quality",
        titleMiddle: "Meets Strategic Goals",
        link: "/portfolio-details-two",
    },
    {
        video:
            "https://player.vimeo.com/video/1099238085?background=1&loop=1&muted=1&controls=0&autoplay=0",
        titleTop: "Behind Every",
        titleMiddle: "Frame A Purpose",
        link: "/portfolio-details-two",
    },
    {
        video:
            "https://player.vimeo.com/video/1099238062?background=1&loop=1&muted=1&controls=0&autoplay=0",
        titleTop: "Cinematic Quality",
        titleMiddle: "One Visual Language",
        link: "/portfolio-details-two",
    },
];

const VideoProductionPortfolio = () => {
    return (
        <div className="tp-portfolio-area tp-bg-common-black-5 pt-155 pb-160">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-12">
                        {/* Title */}
                        <div className="tp-portfolio-vp-title-wrap text-center mb-70">
                            <h2 className="tp-portfolio-vp-bigtitle tp-ff-morganite-bold text-uppercase ls-0 tp_text_invert invert-white mb-30 tp-text-common-white">
                                Our Latest Project
                            </h2>
                            <p className="tp-portfolio-vp-para tp-ff-dm fw-500 fs-28 fs-md-22 lh-140-per ls-m-2 tp-text-grey-5">
                                From strategy to deployment, we fuse cutting technology with
                                <br />
                                creative thinking to craft digital products that learn adapt
                            </p>
                        </div>

                        <div className="tp-portfolio-vp-wrapper">
                            <div className="d-grid">
                                {portfolioItems.map((item, index) => (
                                    <PortfolioItem key={index} {...item} />
                                ))}
                            </div>
                            {/* Button */}
                            <div className="d-flex justify-content-center mt-80">
                                <div className="tp-btn-group tp-btn-vp-group tp-btn-vp-group-primary">
                                    <SmartLink className="tp-btn-circle" href="/portfolio-col-3">
                                        <ArrowIconFifteen />
                                    </SmartLink>
                                    <SmartLink className="tp-btn-2 tp-btn-primary" href="/portfolio-col-3">
                                        view All Works
                                    </SmartLink>

                                    <SmartLink className="tp-btn-circle" href="/portfolio-col-3">
                                        <ArrowIconFifteen />
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoProductionPortfolio;