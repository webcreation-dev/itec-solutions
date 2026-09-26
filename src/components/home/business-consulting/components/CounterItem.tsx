import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import React from "react";

interface CounterItemProps {
    Icon: React.ElementType;
    end: number;
    suffix: string;
    title: string;
    alignClass?: string;
    border?: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({
    Icon,
    end,
    suffix,
    title,
    alignClass = "",
    border = true,
}) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={`tp-counter-cst-item ${border ? "borders" : ""} mb-40`}>
                <div className={`tp-counter-cst-item-inner d-flex ${alignClass}`}>
                    <span className="tp-counter-2-icon mt-10 d-inline-block mr-25">
                        <Icon />
                    </span>
                    <div>
                        <h2 className="tp-ff-dm tp-text-grey-5 fw-700 fs-62 text-uppercase">
                            <AnimatedCounter min={0} max={end} />
                            {suffix}
                        </h2>

                        <span className="fs-500 fs-18 tp-ff-dm tp-text-grey-6">
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterItem;