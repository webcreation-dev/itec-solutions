"use client";
import { medicalPortfolioItems } from "@/data/portfolio-data-two";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const MedicalPortfolio = () => {
    const isDark = useIsDarkRoute();
    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";

    return (
        <div className="tp-portfolio-area tp-portfolio-md-border fix">
            <div className="container-fluid p-0">
                <div className="tp-portfolio-md-wrapper">
                    <div className="tp-portfolio-md-inner-wrap">
                        {medicalPortfolioItems.map((item) => (
                            <div key={item.id} className="tp-portfolio-md-item">
                                <div className="tp-portfolio-md-thumb not-hide-cursor mb-40" data-cursor="View<br>Demo">
                                    <SmartLink className="cursor-hide" href="/portfolio-details-two">
                                        <Image className="img-fluid" src={item.image} alt={item.title} width={600} height={400} />
                                    </SmartLink>
                                </div>
                                <div className="tp-portfolio-md-content">
                                    <span className={`tp-portfolio-md-tag tp-round-36 tp-ff-dm fw-600 ls-m-2 mb-10 d-inline-block ${textColor}`}>{item.tag}</span>
                                    <h4 className={`tp-portfolio-md-title tp-ff-familjen fs-32 lh-130-per ${textColor}`}>
                                        <SmartLink href="/portfolio-details-two" className="underline-black">{item.title}</SmartLink>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalPortfolio;
