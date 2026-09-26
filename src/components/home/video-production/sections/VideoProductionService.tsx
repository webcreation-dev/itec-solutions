import ServiceItem from "../components/ServiceItem";

type ServiceItem = {
    title: string;
    bg: string;
};

const services: ServiceItem[] = [
    {
        title: "Corporate Video Production",
        bg: "/assets/img/service/vp/thumb.jpg",
    },
    {
        title: "Scriptwriting & Storyboarding",
        bg: "/assets/img/service/vp/thumb-2.jpg",
    },
    {
        title: "Motion Graphics & Animation",
        bg: "/assets/img/service/vp/thumb-3.jpg",
    },
    {
        title: "Social Media Video Content",
        bg: "/assets/img/service/vp/thumb-4.jpg",
    },
    {
        title: "Fashion & Lifestyle Videos",
        bg: "/assets/img/service/vp/thumb-5.jpg",
    },
];

const VideoProductionService = () => {
    return (
        <div className="tp-service-area pt-115 pb-160">
            {/* section title */}
            <div className="container-fluid container-1824">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-service-vp-title-wrap text-center mb-95">
                            <h2 className="tp-service-vp-bigtitle tp-ff-morganite-bold text-uppercase ls-0 tp_text_invert invert-black-6 mb-40">
                                Our Services
                            </h2>
                            <p className="tp-service-vp-para tp-ff-dm fw-500 fs-28 fs-md-22 lh-140-per ls-m-2 tp-text-grey-1">
                                From strategy to deployment, we fuse cutting technology with
                                <br />
                                creative thinking to craft digital products that learn adapt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* services list */}
            <div className="container-fluid container-1524">
                <div className="tp-service-vp-wrap">
                    <div className="row row-cols-1">
                        {services.map((service, index) => (
                            <ServiceItem key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoProductionService;