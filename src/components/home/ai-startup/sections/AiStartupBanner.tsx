import Image from "next/image";

const AiStartupBanner = () => {
    return (
        <div className="tp-banner-ai-thumb section-triger">
            <div className="box h-100">
                <Image width={1905} height={820} data-speed=".8" className="img-cover myimg" src="/assets/img/banner/ai/thumb.jpg" alt="thumb" />
                <div className="uncover">
                    <div className="uncover_slice"></div>
                    <div className="uncover_slice"></div>
                    <div className="uncover_slice"></div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupBanner;