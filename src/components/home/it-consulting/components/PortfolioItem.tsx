
import { SmartLink } from "@/components/common";
import { PortfolioItemProps } from "@/types";
import Image from "next/image";

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, img, title, categories, slug, type }) => {
    return (
        <div className="cst-portfolio-item tp-panel-pin mb-50" data-end="bottom 107%">
            <span className="cst-portfolio-item-num">{id}</span>

            <div className="cst-portfolio-item-thumb">
                <SmartLink href={`/portfolio-details/${type}/${slug}`}>
                    {img && <Image
                        style={{ width: "100%", height: "auto" }}
                        width={658}
                        height={544}
                        src={img}
                        alt={title}
                    />}
                </SmartLink>
            </div>

            <h4 className="cst-portfolio-item-title">
                <SmartLink className="underline-black" href={`/portfolio-details/${type}/${slug}`}>
                    {title}
                </SmartLink>
            </h4>

            <div className="cst-portfolio-item-categories">
                {categories.map((cat: string, i: number) => (
                    <span key={i} style={{ marginRight: "5px" }}>{cat}</span>
                ))}
            </div>
        </div>
    );
};
export default PortfolioItem;