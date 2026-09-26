import { SmartLink } from '@/components/common';
import { useIsDarkRoute } from '@/hooks';
import { PortfolioItemProps } from '@/types';
import Image from 'next/image';

const StartupAgencyPortfolioItem: React.FC<PortfolioItemProps> = ({ img, thumbClass, title, categories, slug, type }) => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const portfolioItemStyles = {
        itemTitleColor: isDark ? "tp-text-common-white" : "",
        tagColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
        tagBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-white-2",
    };
    return (
        <div className="col-lg-6">
            <div className="tp-portfolio-sa-item mb-50 not-hide-cursor portfolio__item" data-cursor="View<br>Demo">
                <div className="tp-portfolio-sa-thumb mb-25">
                    <SmartLink href={`/portfolio-details/${type}/${slug}`} className="cursor-hide">
                        {img && (
                            <Image className={`w-100 img-fluid ${thumbClass ?? ""}`} src={img} alt={title} width={620} height={420} />
                        )}
                    </SmartLink>
                </div>
                <div className="tp-portfolio-sa-content">
                    <h4 className={`tp-portfolio-sa-item-title fs-25 lh-1 mb-15 ${portfolioItemStyles.itemTitleColor}`}>
                        <SmartLink className="underline-black" href={`/portfolio-details/${type}/${slug}`}>{title}</SmartLink>
                    </h4>
                    <span className={`tp-portfolio-sa-item-tag fw-700 fs-16 tp-ff-heading d-inline-block ${portfolioItemStyles.tagColor} ${portfolioItemStyles.tagBg}`}>{categories.join(", ")}</span>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyPortfolioItem;