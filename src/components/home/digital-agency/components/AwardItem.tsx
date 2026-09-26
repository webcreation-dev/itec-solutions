import { awardItemDt } from "@/types";

const AwardItem:React.FC<awardItemDt> = ({ id, className, icon, title, year }) => {
    return (
        <div key={id} className={className}>
            <img className="mr-30" src={icon} alt={title} />
            <div>
                <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">
                    {title}
                </span>
            </div>
            <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">
                {year}
            </span>
        </div>
    );
};

export default AwardItem;