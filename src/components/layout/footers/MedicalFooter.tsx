import MedicalFooterForm from "@/components/form/MedicalFooterForm";
import { CopyrightIcon, EmailIconThree } from "@/svg";
import { SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const workingHours = [
    { id: 1, label: "Mon - Fri:", time: "9.00am - 5.00pm" },
    { id: 2, label: "Saturday :", time: "10.00am - 6.00pm" },
    { id: 3, label: "Sunday :", time: "closed" },
];

const quickLinks = [
    { id: 1, label: "Company" },
    { id: 2, label: "About Us" },
    { id: 3, label: "Contact" },
];

const socialLinks = [
    { id: 1, icon: "fa-dribbble" },
    { id: 2, icon: "fa-behance" },
    { id: 3, icon: "fa-pinterest" },
    { id: 4, icon: "fa-linkedin" },
];

const copyrightLinks = [
    { id: 1, label: "Privacy Policy" },
    { id: 2, label: "Terms of Use" },
    { id: 3, label: "Site Map" },
];

const MedicalFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-footer-md-rounded bg-position pt-120" style={{ backgroundImage: "url('/assets/img/footer/md/bg.jpg')" }}>
                <div className="tp-footer-md-apoinment pb-80">
                    <div className="container-fluid container-1824">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="tp-footer-md-apoinment-content pt-50 mb-40">
                                    <h2 className="tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 tp-text-common-white mb-110">
                                        Your care, our priority built<br />
                                        on trust, understanding<br />
                                        and expertise
                                    </h2>
                                    <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                        <Link href="mailto:aleric@gmail.com" className="tp-footer-md-apoinment-btn tp-btn-md tp-bg-theme-1 d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                            <span className="tp-arrow-angle">
                                                <EmailIconThree />
                                            </span>
                                            <span className="td-text d-inline-block mr-5">aleric@gmail.com</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="tp-footer-md-apoinment-form mb-40">
                                    <MedicalFooterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-footer-md-wrap pt-120">
                    <div className="container-fluid container-1824">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-md-widget mb-40 tp_fade_anim" data-delay=".3">
                                    <Link className="mb-30 d-inline-block" href="/">
                                        <Image src="/assets/img/logo/logo-white-2.png" alt="logo" width={150} height={36} />
                                    </Link>
                                    <p className="tp-ff-dm fs-18 lh-140-per ls-m-2 tp-text-grey-1">
                                        There was a growing need in the healthcare<br />
                                        sector to develop new systems and enhance<br />
                                        existing operations.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-md-widget widget-2 mb-40 ml-35 tp_fade_anim" data-delay=".5">
                                    <h5 className="tp-ff-familjen fw-500 fs-18 ls-m-2 tp-text-common-white mb-35">Working Time</h5>
                                    <ul>
                                        {workingHours.map((item) => (
                                            <li key={item.id}>{item.label} <span>{item.time}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                                <div className="tp-footer-md-widget widget-2 mb-40 ml-95 tp_fade_anim" data-delay=".7">
                                    <h5 className="tp-ff-familjen fw-500 fs-18 ls-m-2 tp-text-common-white mb-35">Quick Links</h5>
                                    <ul>
                                        {quickLinks.map((item) => (
                                            <li key={item.id}><Link href="#">{item.label}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-md-widget widget-2 mb-40 tp_fade_anim" data-delay=".9">
                                    <h5 className="tp-ff-familjen fw-500 fs-18 ls-m-2 tp-text-common-white mb-35">Our Address</h5>
                                    <p className="tp-ff-dm fs-18 lh-140-per ls-m-2 tp-text-grey-1 mb-20">
                                        4517 Washington Ave. Manchester,<br /> Kentucky 39495
                                    </p>
                                    <div className="tp-footer-wd-social tp-footer-md-social d-flex mb-40">
                                        {socialLinks.map((item) => (
                                            <Link key={item.id} href="#"><i className={`fa-brands ${item.icon}`}></i></Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tp-footer-md-title-wrap lh-1 text-center mt-45 pb-80 tp_fade_anim fix p-relative" data-fade-from="top" data-delay=".7" data-ease="bounce">
                                    <h2 className="tp-footer-md-bigtitle tp-ff-familjen ls-m-4 fw-600 tp-text-grey-5">
                                        <Link href="/" className="text-scale-anim">Aleric</Link>
                                    </h2>
                                    <Image className="tp-footer-md-shape upslide img-fluid" src="/assets/img/footer/md/shape.png" alt="shape" width={234} height={325} />
                                    <Image className="tp-footer-md-shape-2 tp-live-anim-spin img-fluid w-auto h-auto" src="/assets/img/footer/md/shape-2.png" alt="shape" width={108} height={108} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-cst-bottom tp-footer-md-bottom fix p-relative z-index-1" style={{ backgroundColor: "#121A26" }}>
                        <div className="container-fluid container-1824">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <div className="tp-footer-copyright">
                                        <p className="tp-footer-it-copyright mb-10 tp-text-grey-5 tp-ff-inter">
                                            <span>
                                                <CopyrightIcon />
                                            </span>
                                            Copyright {getCurrentYear()} <SmartLink href="/" className="underline-white">ThemePure.</SmartLink> All Right Reserves.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="tp-footer-md-copyright-menu text-md-end mb-10">
                                        {copyrightLinks.map((item) => (
                                            <Link key={item.id} href="#" className="tp-text-grey-5 tp-ff-dm opacity-8 hover-text-white hover-opacity-1">{item.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MedicalFooter;
