const StartupAgencyBanner = () => {
    return (
        <div className="tp-banner-it-thumb section-triger p-relative z-index-1 fix">
            <div className="box tp-banner-2-bg tp-hero-wd-bottom-bg">
                <img data-speed=".8" className="img-cover myimg" src="/assets/img/banner/sa/thumb.jpg" alt="banner" />
                <div className="uncover">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="uncover_slice" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyBanner;
