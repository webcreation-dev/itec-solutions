import Link from "next/link";

const links = [
    { href: "/about-creative", label: "About page _" },
    { href: "/portfolio-col-3", label: "Portfolio page _" },
    { href: "/blog-grid-2", label: "Blog page _" },
    { href: "/portfolio-masonary", label: "Portfolio page _" },
    { href: "/contact-light", label: "Contact page _" },
];

const MovingLinks = () => {
    return (
        <>
            {links.map((item, i) => (
                <span
                    key={i}
                    className="not-hide-cursor"
                    data-cursor="Next Page"
                >
                    <Link className="cursor-hide" href={item.href}>
                        {item.label}
                    </Link>
                </span>
            ))}
        </>
    );
};

const PlumbingServiceTextMoving = () => {
    return (
        <div className="tp-process-area">
            <div className="tp-text-moving-area pt-130 pb-150">
                {/* TOP */}
                <div className="tp-text-pb-moving-top moving-text mb-40">
                    <div className="tp-text-it-item tp-text-pb-item wrapper-text d-flex align-items-center">
                        <MovingLinks />
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="tp-text-pb-moving-bottom moving-text">
                    <div className="tp-text-it-item tp-text-pb-item wrapper-text d-flex align-items-center">
                        <MovingLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceTextMoving;