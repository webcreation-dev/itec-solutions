"use client";

import { useIsDarkRoute } from "@/hooks";

type AwardItem = {
    img: string;
    start: string;
    stop: string;
    alt: string;
};

// shared animation config
const awardsBaseData = [
    { start: "top 120%", stop: "600%" },
    { start: "top 90%", stop: "1100%" },
    { start: "top 90%", stop: "400%" },
    { start: "top 120%", stop: "600%" },
    { start: "top 100%", stop: "750%" },
    { start: "top 40%", stop: "300%" },
];

const VideoProductionAward = () => {
    const isDarkRoute = useIsDarkRoute();

    const awardsData: AwardItem[] = awardsBaseData.map((item, index) => {
        const imageIndex = index + 1;

        return {
            ...item,
            img: `/assets/img/awards/vp/aw0${imageIndex}${isDarkRoute ? "-black" : ""}.jpg`,
            alt: `award image ${imageIndex}`,
        };
    });

    return (
        <div id="awards" className="tp-awards-vp-content-row text-align-center dark-section">
            <div className="tp-awards-vp-move-thumbs-wrapper">

                {/* start thumbs */}
                <div className="tp-awards-vp-start-thumbs-wrapper">
                    {awardsData.map(({ img, start, stop, alt }, index) => (
                        <div
                            key={index}
                            className="tp-awards-vp-start-move-thumb"
                            data-start={start}
                            data-stop={stop}
                        >
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img
                                        src={img}
                                        className="item-image"
                                        alt={alt}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* end thumbs */}
                <div className="tp-awards-vp-end-thumbs-wrapper">
                    {awardsData.map((_, index) => (
                        <div
                            key={index}
                            className="tp-awards-vp-end-move-thumb"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VideoProductionAward;