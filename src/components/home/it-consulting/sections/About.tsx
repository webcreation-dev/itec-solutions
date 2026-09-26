import { CheckIcon } from "@/svg";
import { OutlineButton } from "@/components/ui";
import Image from "next/image";

interface AboutMainProps {
    listItems?: string[];
}

const About: React.FC<AboutMainProps> = ({
    listItems = [
        "Innovating for Future Growth",
        "Empowering Change with Strategy",
        "Driving Success Through Insight",
    ],
}) => {
    return (
        <section className="cst-about-ptb p-relative pt-170 pb-120">
            {/* Shape */}
            <div className="cst-about-shape d-none d-xxl-block" data-speed=".9">
                <Image
                    src="/assets/img/update-2/about/about-shape-1.png"
                    alt="About Shape"
                    width={488}
                    height={503}
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <div className="container container-1524">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-xxl-6 col-lg-6 offset-xxl-2">
                        <div className="cst-about-heading mb-40">
                            <h3 className="cst-section-title fs-32 mb-25 tp_fade_anim" data-delay=".3">
                                Transforming your business for <br className="d-none d-xxl-block" />
                                sustainable growth <span>
                                    <Image
                                        src="/assets/img/update-2/about/title-shape.png"
                                        alt="Title Shape"
                                        width={30}
                                        height={34}
                                    />
                                </span> and innovation <br className="d-none d-xxl-block" />
                                strategy Agency
                            </h3>
                            <div className="cst-about-text tp_fade_anim" data-delay=".5">
                                <p className="color-g mb-45">We empower achieve lasting success <span>strategic planning,</span> data <br />
                                    driven insights, innovative business models. Our expert team helps <br />
                                    you redefine goals optimize operations implement sustainable.</p>
                            </div>

                            {/* List */}
                            <div className="cst-about-list mb-50 tp_fade_anim" data-delay=".7">
                                <ul>
                                    {listItems.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <CheckIcon />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <div
                                className="cst-about-btn tp_fade_anim"
                                data-delay=".7"
                                data-fade-from="top"
                                data-ease="bounce"
                            >
                                <OutlineButton href="/about" className="cst-btn black-t" text="More Details" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-xxl-4 col-lg-6">
                        <div className="cst-about-right">
                            <div className="cst-about-text tp_fade_anim" data-delay=".5">
                                <p className="color-g mb-45">We empower achieve lasting success strategic planning, <br /> data
                                    driven insights, innovative business models. Our expert <br /> team helps
                                    you redefine goals optimize operations implement sustainable.</p>
                            </div>
                            <div className="cst-about-thumb fix">
                                <div className="tp_img_reveal">
                                    <Image
                                        src="/assets/img/update-2/about/thumb-1.jpg"
                                        alt="About Thumb"
                                        width={520}
                                        height={396}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;