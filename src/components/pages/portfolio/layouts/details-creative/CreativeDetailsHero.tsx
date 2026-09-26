import React from "react";
import { SmartLink } from "@/components/common";

const CreativeDetailsHero = () => {
    return (
        <div className="tp-pd-3-hero-area pre-header">
            <div className="tp-pd-3-hero-style">
                <div className="container-fluid">
                    <div className="des-portfolio-item p-relative mb-30">
                        <div className="des-portfolio-thumb anim-zoomin-wrap p-relative">
                            <img className="w-100 anim-zoomin" src="/assets/img/portfolio/details/creative/portfolio-1.jpg" alt="Electro Hub" />
                        </div>
                        <div className="des-portfolio-category d-none d-lg-block">
                            <span>Web Design</span>
                            <span>Web Development</span>
                        </div>
                        <div className="des-portfolio-category portfolio-meta d-none d-lg-block">
                            <span>2025</span>
                        </div>
                        <div className="des-portfolio-content">
                            <h2 className="des-portfolio-title tp-text-revel-anim">
                                <SmartLink href="#">Electro Hub</SmartLink>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeDetailsHero;
