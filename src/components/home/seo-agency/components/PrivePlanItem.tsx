import { SmartLink } from "@/components/common";
import { PlanDT } from "@/types";

const PrivePlanItem: React.FC<PlanDT> = ({ name, price, features, active }) => {
    return (
        <div
            className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className={`al-price-item ${active ? "active" : ""}`}>
                <div className="al-price-head mb-40">
                    <h5>{name}</h5>
                    <span><i>{price === "Free" ? "" : "$"}</i>{price}<em>{price === "Free" ? "" : "/ month"}</em></span>
                </div>
                <div className="al-price-list">
                    <ul>
                        {features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="al-price-btn">
                    <SmartLink
                        className="al-btn-blue sky-bg w-100 text-center"
                        href="/contact">
                        Get Started
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default PrivePlanItem;