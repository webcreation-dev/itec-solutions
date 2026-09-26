import { SmartLink } from "@/components/common";
import { PortfolioItemProps } from "@/types";
import Image from "next/image";

const CreativeAgencyPortfolioItem: React.FC<PortfolioItemProps> = ({ img, specialLayout, title, categories, year, slug, type }) => {
    return (
        <div className="tp-portfolio-2-item tp-item-anime marque">
            <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <SmartLink
                    href={`/portfolio-details/${type}/${slug}`}
                    className="d-block tp-portfolio-2-thumb mb-20 cursor-hide"
                >
                    {img && (
                        <Image width={647} height={480} className="w-100 img-fluid" src={img} alt={title} />
                    )}
                </SmartLink>
            </div>

            <div className="tp-portfolio-2-content d-flex justify-content-between align-items-start">
                {specialLayout ? (
                    <div className="d-flex justify-content-between mb-5">
                        <h3 className="tp-portfolio-title tp-ff-funnel fw-600 fs-25 lh-36 mb-10 mr-20">
                            <SmartLink className="underline-black" href={`/portfolio-details/${type}/${slug}`}>
                                {title}
                            </SmartLink>
                        </h3>
                        <div className="tp-portfolio-tag">
                            {categories.map((cat: string, i: number) => (
                                <span key={i}>{cat}</span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mb-5">
                        <h3 className="tp-portfolio-title tp-ff-funnel fw-600 fs-25 lh-36 mb-10 mr-20">
                            <SmartLink className="underline-black" href={`/portfolio-details/${type}/${slug}`}>
                                {title}
                            </SmartLink>
                        </h3>
                        <div className="tp-portfolio-tag">
                            {categories.map((cat: string, i: number) => (
                                <span key={i}>{cat}</span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="tp-portfolio-tag mt-5">
                    <span>{year}</span>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyPortfolioItem;