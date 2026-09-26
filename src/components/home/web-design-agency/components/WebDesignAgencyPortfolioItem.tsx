import { SmartLink } from "@/components/common";
import { PortfolioItemProps } from "@/types";
import Image from "next/image";

const WebDesignAgencyPortfolioItem: React.FC<PortfolioItemProps> = ({ title, img, categories, year, slug, type }) => {
    return (
        <div
            className="tp-portfolio-wd-item des-portfolio-panel p-relative not-hide-cursor mb-30"
            data-cursor="View<br>Demo"
        >
            <SmartLink className="cursor-hide" href={`/portfolio-details/${type}/${slug}`}>
                <div className="tp-portfolio-wd-thumb p-relative">
                    {img && <Image className="img-fluid" width={1776} height={740} src={img} alt={title} />}
                </div>

                <div className="tp-portfolio-wd-category">
                    {categories?.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                </div>

                <div className="tp-portfolio-wd-category portfolio-meta">
                    <span>{year}</span>
                </div>
            </SmartLink>

            <div className="tp-portfolio-wd-content">
                <h2 className="tp-ff-teko tp-text-common-white fs-100 fs-lg-70 fs-md-50 fs-xs-40 lh-1 fw-500">
                    <SmartLink href={`/portfolio-details/${type}/${slug}`}>{title}</SmartLink>
                </h2>
            </div>
        </div>
    );
};

export default WebDesignAgencyPortfolioItem;