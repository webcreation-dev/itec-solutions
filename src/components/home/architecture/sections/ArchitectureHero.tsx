import { HeroArrowRightIcon } from "@/svg";
import Link from "next/link";

const socialLinks = [
    { icon: "fa-linkedin", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-facebook", href: "#" },
];

const ArchitectureHero = () => {
    return (
        <div className="al-hero-archi-area al-hero-archi-ptb tp-section-spacing bg-position bg-position-md-left p-relative z-index-1"
            style={{ backgroundImage: `url(/assets/img/update/hero/archi/bg.jpg)` }}>
            <div className="container-fluid container-1750">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="al-hero-archi-shape d-none d-xl-block" data-lag="0.2" data-stagger="0.08" src="/assets/img/update/hero/archi/shape.png" alt="shape" />
                        <div className="al-hero-archi-title-wrapper">
                            <h2 className="al-hero-archi-title  mb-35">
                                <span>L&apos;INGÉNIERIE</span>
                                <span>AU SERVICE <Link href="#">DES PROJETS</Link></span>
                                <span>DURABLES</span>
                            </h2>
                            <Link className="al-hero-archi-link tp-left-right" href="/about-modern">
                                <span className="tp-rotate-text">Découvrir ITEC</span>
                                <span className="tp-arrow-angle">
                                    <HeroArrowRightIcon />
                                </span>
                            </Link>
                        </div>
                        <div className="al-hero-archi-social d-none d-xxl-block">
                            <ul>
                                <li>
                                    {socialLinks.map((item, i) => (
                                        <Link key={i} href={item.href}>
                                            <i className={`fa-brands ${item.icon}`}></i>
                                        </Link>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureHero;
