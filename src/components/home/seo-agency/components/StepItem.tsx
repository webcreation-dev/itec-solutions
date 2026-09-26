import React from "react";
import { CheckIconLarge } from "@/svg";
import { StepItemDT } from "@/types";
import Image from "next/image";

interface StepItemProps {
    step: StepItemDT;
    index: number;
}

const StepItem: React.FC<StepItemProps> = ({ step, index }) => {
    return (
        <div key={step.number} className="col-xl-4 col-lg-4 col-md-4 mb-60">
            <div
                className={`al-step-wrap p-relative d-flex 
                                                justify-content-center 
                                                ${step.align === "start"
                        ? "justify-content-md-start"
                        : step.align === "end"
                            ? "justify-content-md-end"
                            : ""} tp_fade_anim`}
                data-delay={step.delay}>
                {/* Arrow Shape */}
                {step.arrow && (
                    <div
                        className={`al-step-arrow-shape-${index === 0 ? "1" : "2"
                            } d-none d-md-block`}
                    >
                        <Image
                            src={`/assets/img/update/step/${step.arrow}`}
                            alt="step arrow"
                            width={42}
                            height={18}
                        />
                    </div>
                )}
                <div
                    className={`al-step-item text-center ${step.active ? "active" : ""}`}>
                    <div className="al-step-icon p-relative">
                        <i className="al-step-number">{step.number}</i>
                        <span>
                            <i><CheckIconLarge /></i>
                        </span>
                    </div>
                    <h4 className="al-step-title-sm">
                        {step.title.split(/<br\s*\/?>/i).map((line, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <br />}
                                {line}
                            </React.Fragment>
                        ))}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default StepItem;