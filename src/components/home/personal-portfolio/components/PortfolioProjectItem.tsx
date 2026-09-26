import { useIsDarkRoute } from "@/hooks";
import { PortfolioItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PortfolioProjectItem: React.FC<PortfolioItemProps> = ({ img, title, categories, year, type, slug }) => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const projectItemStyles = {
        cardBg: isDark ? "tp-bg-common-black" : "tp-bg-common-white",
    };
    // -------------------------------

    return (
        <div className={`tp-portfolio-2-item mb-65 tp-panel-pin ${projectItemStyles.cardBg}`}>
            <div className="not-hide-cursor" data-cursor="View<br/>Demo">
                <Link
                    href={`/portfolio-details/${type}/${slug}`}
                    className="d-block tp-portfolio-2-thumb mb-20 cursor-hide"
                >
                    {img && (
                        <Image width={759} height={450} className="w-100 img-fluid" src={img} alt="image" />
                    )}
                </Link>
            </div>
            <div className="tp-portfolio-2-content tp-portfolio-pp-content d-flex justify-content-between align-items-start">
                <div className="mb-5">
                    <h3 className="tp-portfolio-title fw-700 fs-25 lh-36 mb-10 mr-20">
                        <Link className="underline-black" href={`/portfolio-details/${type}/${slug}`}>
                            {title}
                        </Link>
                    </h3>
                    <div className="tp-portfolio-tag positions">
                        {categories.map((cat: string, i: number) => (
                            <span key={i} style={{ marginRight: "5px" }}>{cat}</span>
                        ))}
                    </div>
                </div>
                <div className="tp-portfolio-tag mt-5">
                    <span>{year}</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioProjectItem;