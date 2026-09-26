import { SmartLink } from '@/components/common';
import { PlanDT } from '@/types';

const PricePlanItem: React.FC<PlanDT> = ({ name, price, description, features, active }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 mb-40">
            <div
                className={`al-price-pg-item p-relative ${active ? "active" : ""}`}>
                {/* Border Shapes */}
                <span className="al-price-pg-bdr-1 bdr-topleft"></span>
                <span className="al-price-pg-bdr-2 bdr-topright"></span>
                <span className="al-price-pg-bdr-3 bdr-bottomleft"></span>
                <span className="al-price-pg-bdr-4 bdr-bottomright"></span>
                <div className="al-price-pg-head">
                    <h4 className="al-price-pg-title">{name}</h4>
                    <span className="al-price-pg-price">{price}</span>
                    <p>{description}</p>
                </div>
                <div className="al-price-pg-btn">
                    <SmartLink className="al-btn-pg-price w-100" href="/contact">
                        BOOK NOW
                    </SmartLink>
                </div>
                <div className="al-price-pg-list">
                    <ul>
                        {features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PricePlanItem;