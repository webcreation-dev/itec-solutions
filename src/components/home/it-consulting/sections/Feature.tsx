import {
    ProvenExpertiseIcon,
    RiskReductionIcon,
    TrustedGuidanceIcon,
} from "@/svg";
import Link from "next/link";

const features = [
    {
        title: "Trusted Guidance",
        description: "Powerful features to help you manage money smarter.",
        Icon: TrustedGuidanceIcon,
        bgColor: "#7CEBFF",
        delay: ".3",
    },
    {
        title: "Proven Expertise",
        description: "Powerful features to help you manage money smarter.",
        Icon: ProvenExpertiseIcon,
        bgColor: "#FFF5CF",
        delay: ".5",
    },
    {
        title: "Risk Reduction",
        description: "Powerful features to help you manage money smarter.",
        Icon: RiskReductionIcon,
        bgColor: "#FFD7FC",
        delay: ".7",
    },
];

const Feature = () => {
    return (
        <div className="cst-feature-ptb pb-120">
            <div className="container container-1524">
                {/* Top Section */}
                <div className="cst-feature-top">
                    <div className="row">
                        {features.map(({ title, description, Icon, bgColor, delay }, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div
                                    className="cst-feature-item mb-30 tp_fade_anim"
                                    data-delay={delay}
                                >
                                    <div className="cst-feature-item-icon">
                                        <span style={{ backgroundColor: bgColor }}>
                                            <Icon />
                                        </span>
                                    </div>

                                    <div className="cst-feature-item-content">
                                        <h5 className="cst-feature-item-title">{title}</h5>
                                        <p className="color-g mb-0">{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="cst-feature-bottom pt-40">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h4
                                className="cst-feature-text text-center tp_fade_anim"
                                data-delay=".9"
                            >
                                <span>Hurray</span> Subscribe{" "}
                                <Link href="#">Aleric application</Link> and get a special
                                discount.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;