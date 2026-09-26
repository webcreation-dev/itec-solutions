"use client";

interface BannerProps {
    imgSrc: string;
    altText?: string;
}

const TeamDetailsBanner = ({ imgSrc, altText = "Banner Image" }: BannerProps) => {
    return (
        <div className="tp-about-me-banner scale-up-img">
            {/* Using standard img for compatibility with template's GSAP scroll triggers and data-speed */}
            <img
                className="img-cover scale-up"
                data-speed="0.4"
                src={imgSrc}
                alt={altText}
            />
        </div>
    );
};

export default TeamDetailsBanner;
