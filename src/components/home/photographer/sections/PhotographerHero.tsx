import { BehanceIcon, DribbleIcon, GmailIcon, YoutubeIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        name: "gmail",
        href: "#",
        icon: <GmailIcon />,
    },
    {
        name: "dribble",
        href: "#",
        icon: <DribbleIcon width="18" height="17" />,
    },
    {
        name: "behance",
        href: "#",
        icon: <BehanceIcon width="17" height="11" />,
    },
    {
        name: "youtube",
        href: "#",
        icon: <YoutubeIcon />,
    },
];

const PhotographerHero = () => {
    return (
        <section
            className="al-hero-pg-area al-hero-pg-height fix al-hero-pg-overlay"
            style={{ backgroundColor: "#121314" }}
        >
            {/* Social Sidebar */}
            <div className="al-hero-pg-social-wrapper al-hero-pg-social-wrapper-2 d-none d-xxl-block">
                <span className="al-hero-pg-social-bar"></span>

                <div className="al-hero-pg-social">
                    {socialLinks.map((item, index) => (
                        <div key={index} className="parallax-wrap">
                            <div className="parallax-element">
                                <Link className={item.name} href={item.href}>
                                    {item.icon}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <span className="al-hero-pg-social-bar al-hero-pg-social-bar-2"></span>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="al-hero-pg-thumb-wrapper">
                            <span className="overlay"></span>

                            <div
                                className="al-hero-pg-thumb text-center"
                                data-lag="0.7"
                                data-speed="auto"
                            >
                                <Image
                                    src="/assets/img/update/hero/pg/hero-4.png"
                                    alt="Photographer Hero"
                                    width={926}
                                    height={898}
                                    className="img-fluid"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div
                            className="al-hero-pg-title-box p-relative z-index-5 text-center"
                            data-lag="0.5"
                            data-stagger="0.08"
                        >
                            <h2 className="al-hero-pg-title">
                                The best{" "}
                                <span className="p-relative">Photoshoot</span>
                                <br />
                                Studio
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographerHero;