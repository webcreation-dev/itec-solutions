import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { BannerArrowLineDivider } from "@/svg/BorderLine";

const bannerItems = [
    {
        title: "Project Completed",
        value: 23,
        suffix: "K",
        multiplier: ">1X",
        bgClass: "tp-bg-common-green",
    },
    {
        title: "Annual Success Rate",
        value: 98,
        suffix: "%",
        multiplier: ">2X",
        bgClass: "tp-bg-theme-primary",
    },
];

const BannerCard = ({
    title,
    value,
    suffix,
    multiplier,
    bgClass,
}: {
    title: string;
    value: number;
    suffix: string;
    multiplier: string;
    bgClass: string;
}) => (
    <div className={`tp-banner-wd-item ${bgClass} p-relative z-index-1`}>
        <span className="tp-banner-wd-border d-inline-block mb-5">
            <BannerArrowLineDivider />
        </span>

        <h5 className="fw-500 fs-22 fs-xl-20 fs-sm-18 tp-ff-p mb-60">
            {title}
        </h5>

        <h2 className="tp-ff-teko fw-600 fs-70 fs-sm-60">
            <AnimatedCounter min={0} max={value} />
            {suffix} <span className="fs-35">{multiplier}</span>
        </h2>
    </div>
);

const WebDesignAgencyBanner = () => {
    return (
        <div className="section-triger tp-banner-area tp-banner-wd-spacing p-relative fix">
            {/* Background */}
            <div className="box tp-banner-wd-bg">
                <img
                    data-speed=".8"
                    className="img-cover myimg"
                    src="/assets/img/banner/wd/bg.jpg"
                    alt="banner image"
                />
                <div className="uncover">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="uncover_slice" />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="container">
                <div className="row justify-content-end">
                    {bannerItems.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                        >
                            <BannerCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyBanner;