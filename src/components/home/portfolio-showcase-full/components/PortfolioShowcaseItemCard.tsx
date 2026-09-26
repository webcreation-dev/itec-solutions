import { SmartLink } from "@/components/common";

type PortfolioItem = {
    id: number;
    title: string;
    image: string;
    categories: string[];
    year: string;
    link: string;
};

const PortfolioShowcaseItemCard = ({ item }: { item: PortfolioItem }) => {
    return (
          <div
            className="tp-portfolio-wd-item des-portfolio-panel p-relative not-hide-cursor mb-30"
            data-cursor="View<br>Demo"
        >
            <SmartLink className="cursor-hide" href={item.link}>
                <div className="tp-portfolio-wd-thumb p-relative">
                    <img src={item.image} alt={item.title} />
                </div>

                <div className="tp-portfolio-wd-category">
                    {item.categories.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                </div>

                <div className="tp-portfolio-wd-category portfolio-meta">
                    <span>{item.year}</span>
                </div>
            </SmartLink>

            <div className="tp-portfolio-wd-content">
                <h2 className="tp-ff-teko tp-text-common-white fs-100 fs-lg-70 fs-md-50 fs-xs-40 lh-1 fw-500">
                    <SmartLink href={item.link}>{item.title}</SmartLink>
                </h2>
            </div>
        </div>
    );
};

export default PortfolioShowcaseItemCard;