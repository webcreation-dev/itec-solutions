import { SmartLink } from "@/components/common";
import { PortfolioItemProps } from "@/types";
import { HeaderButtonArrow } from "@/svg";

const PortfolioItem: React.FC<PortfolioItemProps> = ({ col, itemClass, thumbClass, displacement, img, title, categories, year, showButton, type, slug }) => {
    return (
        <div className={col}>
            <div className={itemClass}>
                <div
                    className="not-hide-cursor"
                    data-cursor="View<br>Demo"
                >
                    <SmartLink
                        href={`/portfolio-details/${type}/${slug}`}
                        className={thumbClass}
                        {...(displacement && {
                            "data-displacement": "/assets/img/imghover/fluid.jpg",
                            "data-intensity": "0.6",
                            "data-speedin": "1",
                            "data-speedout": "1",
                        })}
                    >
                        <img
                            data-speed=".8"
                            className="img-cover"
                            src={img}
                            alt={title}
                        />
                    </SmartLink>
                </div>

                <div className="tp-portfolio-content">
                    <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                        <SmartLink
                            href={`/portfolio-details/${type}/${slug}`}
                            className="underline-black"
                        >
                            {title}
                        </SmartLink>
                    </h3>

                    <div className="tp-portfolio-tag">
                        {categories.map((cat: string, i: number) => (
                            <span key={i} style={{ marginRight: "5px" }}>{cat}</span>
                        ))}
                        <span>{year}</span>
                    </div>
                </div>

                {showButton && (
                    <div
                        className="tp-portfolio-btn pt-70 text-center d-none d-lg-block tp_fade_anim"
                        data-delay=".5"
                        data-fade-from="top"
                        data-ease="bounce"
                    >
                        <SmartLink
                            href="/portfolio-masonary"
                            className="tp-btn-xl d-inline-block lh-0 tp-round-36 fs-15 tp-bg-theme-primary text-uppercase ls-0 tp-btn-switch-animation tp-text-common-black hover-text-black tp-ff-heading fw-600"
                        >
                            <span className="d-flex align-items-center justify-content-center">
                                <span className="btn-text">
                                    View All Work
                                </span>

                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>

                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>
                            </span>
                        </SmartLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;