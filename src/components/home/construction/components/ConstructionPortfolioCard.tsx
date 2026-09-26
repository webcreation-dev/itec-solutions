import { SmartLink } from "@/components/common";
import Image from "next/image";

interface portfolioItemProps {
    item: {
        bg: string;
        img: string;
        year: string;
    }
}
const ConstructionPortfolioCard: React.FC<portfolioItemProps> = ({ item }) => {
    return (
        <div
            className="cnt-portfolio-video-card"
            style={{ backgroundColor: item.bg }}
        >
            <span className="cnt-portfolio-video-sub">{item.year}</span>

            <h4 className="cnt-portfolio-video-title">
                <SmartLink
                    className="underline-black"
                    href="/portfolio-details-gallery"
                >
                    Interiors that elevate modern <br /> construction designs
                </SmartLink>
            </h4>
            <div className="cnt-portfolio-video-thumb d-inline-block fix">
                <SmartLink href="/portfolio-details-classic-stack">
                    <Image className="img-fluid" width={530} height={377} src={item.img} alt="portfolio" />
                </SmartLink>
            </div>
            <div className="cnt-portfolio-video-text">
                <p>
                    At Marquee, we believe great construction begins <br />
                    with great design. Our construction design process <br />
                    merges creativity with precision to deliver structures <br />
                    that are both visually.
                </p>
            </div>
        </div>
    );
};

export default ConstructionPortfolioCard;