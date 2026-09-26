import AiAgencyFeatureItem from "../components/AiAgencyFeatureItem";
import { serviceData } from "@/data/service-data";
import Image from "next/image";
import Link from "next/link";

const AIAgencyFeature = () => {
    // Retrieve ai agency service items for rendering
    const services = serviceData.aiAgency;

    return (
        <div className="ais-feature-ptb p-relative app-feature-border-style pb-140">
            <div className="container container-1350">

                {/* Heading */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ais-feature-heading text-center p-relative mb-50">
                            <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">
                                Experience a unified AI ecosystem built
                            </span>
                            <h4 className="ais-section-title tp_fade_anim" data-delay=".5">
                                Combining advanced AI engineering <br /> smart automation.
                            </h4>
                            <div className="ais-feature-shape" data-speed-x="-.2">
                                <Image width={116} height={109} src="/assets/img/update-2/service/file.png" alt="file image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="app-feature-bg tp_fade_anim" data-delay=".7">
                    <div className="row gx-10">
                        {services.map((item) => (
                            <AiAgencyFeatureItem key={item.id} {...item} type="aiAgency" />
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="app-feature-bottom text-center mt-20 tp_fade_anim" data-delay=".9">
                            <p>
                                <span className="bg-blue">Hurray</span>
                                {" "}Upgrade with <Link href="#">Aleric and receive</Link> special discounts instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgencyFeature;