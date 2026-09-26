import { SmartLink } from "@/components/common";
import Image from "next/image";

interface portfolioItemProps {
    item: {
        bg: string;
        img: string;
        year: string;
        flag?: string;
        title: string;
        description: string;
    }
}
const ConstructionPortfolioCard: React.FC<portfolioItemProps> = ({ item }) => {
    return (
        <div
            className="cnt-portfolio-video-card"
            style={{ backgroundColor: item.bg }}
        >
            <span className="cnt-portfolio-video-sub">
                {item.flag && <span role="img" aria-label={`Drapeau ${item.year}`} className="me-2" style={{ fontSize: "1.25em" }}>{item.flag}</span>}
                {item.year}
            </span>

            <h4 className="cnt-portfolio-video-title">
                <SmartLink
                    className="underline-black"
                    href="/portfolio-col-3"
                >
                    {item.title}
                </SmartLink>
            </h4>
            <div className="cnt-portfolio-video-thumb d-inline-block fix">
                <SmartLink href="/portfolio-col-3">
                    <Image className="img-fluid" width={530} height={377} src={item.img} alt="portfolio" />
                </SmartLink>
            </div>
            <div className="cnt-portfolio-video-text">
                <p>
                    {item.description}
                </p>
            </div>
        </div>
    );
};

export default ConstructionPortfolioCard;
