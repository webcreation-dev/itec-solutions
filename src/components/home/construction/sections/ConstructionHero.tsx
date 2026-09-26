import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { PropertyApartment, PropertyArea, PropertyFloor, PropertyParking } from "@/svg";
import { SmartLink } from "@/components/common";
import { ArrowIconThree } from "@/svg";
import Image from "next/image";

const ConstructionHero = () => {
    const projectStats = [
        { value: 3, label: "métiers complémentaires", Icon: PropertyFloor },
        { value: 2, label: "continents d’intervention", Icon: PropertyApartment },
        { value: 1, label: "interlocuteur projet", Icon: PropertyParking },
        { value: 360, label: "vision du projet", Icon: PropertyArea },
    ];
    return (
        <div className="cnt-hero-area p-relative">
            <div className="cnt-hero-shape tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                <Image className="img-fluid" width={202} height={117} src="/assets/img/update-2/hero/hero-2/vector.png" alt="vector" />
            </div>
            <div className="container container-1824">
                <div className="ar-hero-bg"
                    style={{ backgroundImage: `url(/assets/img/update-2/hero/hero-2/hero-bg-shape.png)` }}>
                    <div className="row align-items-end">
                        <div className="col-xl-4 col-lg-6">
                            <div className="cnt-hero-title-box cnt-hero-ptb">
                                <h2 className="cnt-hero-title tp_fade_anim" data-delay=".3">
                                    Construire <br /> et développer{" "}
                                    <span className="d-none d-xxl-inline-block">
                                        <Image width={160} height={103} className="cnt-hero-shape-1 d-none d-md-inline-block img-fluid" src="/assets/img/update-2/hero/hero/hero-shape-1.png" alt="shape" />
                                    </span>
                                    des lieux durables.
                                </h2>
                                <div className="cnt-hero-btn tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <SmartLink className="upd-btn-black-square cnt-btn-style style-2" href="/contact">
                                        <i>
                                            <ArrowIconThree />
                                            <ArrowIconThree />
                                        </i>
                                        <span>
                                            <span className="text-1">Parler de votre projet</span>
                                            <span className="text-2">Parler de votre projet</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="cnt-hero-main-thumb tp_fade_anim" data-delay=".5">
                                <Image className="img-fluid" width={708} height={920} src="/assets/img/update-2/hero/hero-2/hero-thumb-1.png" alt="hero thumb" />
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="cnt-hero-list-wrap mb-80 z-index-1 p-relative">
                                {projectStats.map((item, index) => {
                                    const { value, label, Icon } = item;
                                    const isLast = index === projectStats.length - 1;
                                    return (
                                        <div
                                            key={index}
                                            className={`cnt-hero-list ${!isLast ? "mb-30" : ""}`}
                                        >
                                            <div className="cnt-hero-list-left d-flex align-items-center">
                                                <h3 className="cnt-hero-list-num purecounter">
                                                    <AnimatedCounter min={0} max={value} />
                                                </h3>
                                                <h3 className="cnt-hero-list-name">{label}</h3>
                                            </div>
                                            <div className="cnt-hero-list-icon">
                                                <span>
                                                    <Icon />
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionHero;
