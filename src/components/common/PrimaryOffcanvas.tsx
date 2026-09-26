"use client";

import { BehanceIcon, CroseIcon, DribbleIcon, InstragramIcon, YoutubeIcon } from '@/svg';
import { PhotoProviderWrapper } from '../wrappers';
import useGlobalContext from '@/hooks/useContext';
import { PhotoView } from 'react-photo-view';
import { useIsDarkRoute } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
    { id: 1, imgSrc: "/assets/img/offcanvas/offcanvas-1.jpg" },
    { id: 2, imgSrc: "/assets/img/offcanvas/offcanvas-2.jpg" },
    { id: 3, imgSrc: "/assets/img/offcanvas/offcanvas-3.jpg" },
    { id: 4, imgSrc: "/assets/img/offcanvas/offcanvas-4.jpg" }
];

const PrimaryOffcanvas = () => {
    const { isMainSidebarOpen, toggleMainSidebar } = useGlobalContext();
    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // Class & Asset 
    // -------------------------------
    const offcanvasBackground = isDarkRoute ? "offcanvas-black-bg" : "";
    const brandLogo = isDarkRoute ? "/assets/img/logo/logo-white-2.png" : "/assets/img/logo/logo.png";
    // -------------------------------

    return (
        <>
            <div className="tp-offcanvas-area">
                <div className={`tp-offcanvas ${offcanvasBackground} ${isMainSidebarOpen ? "opened" : ""}`}>
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image width={150} height={36} src={brandLogo} alt="logo" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close-btn">
                            <button onClick={toggleMainSidebar} className="close-btn">
                                <CroseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-content d-none d-xl-block">
                        <h3 className="tp-offcanvas-title">Hello There!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                    <div className="tp-offcanvas-menu d-xl-none">
                        <nav>
                            {/* <MobileMenus /> */}
                        </nav>
                    </div>
                    <div className="tp-offcanvas-gallery d-none d-xl-block">
                        <div className="row gx-2">
                            <PhotoProviderWrapper>
                                {galleryImages.map((image) => (
                                    <div className="col-md-3 col-3" key={image.id}>
                                        <div className="tp-offcanvas-gallery-img fix">
                                            <PhotoView src={image.imgSrc}>
                                                <Image style={{ width: "auto", height: "auto" }} width={82} height={82} src={image.imgSrc} alt={`gallery image${image.id}`} />
                                            </PhotoView>
                                        </div>
                                    </div>
                                ))}
                            </PhotoProviderWrapper>
                        </div>
                    </div>
                    <div className="tp-offcanvas-contact">
                        <h3 className="tp-offcanvas-title sm">Information</h3>
                        <ul>
                            <li><Link href="tel:1245654">+ 4 20 7700 1007</Link></li>
                            <li><Link href="mailto:hello@aleric.com">hello@cunnet.com</Link></li>
                            <li><Link href="#">Avenue de Roma 158b, Lisboa</Link></li>
                        </ul>
                    </div>
                    <div className="tp-offcanvas-social">
                        <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                        <ul>
                            <li>
                                <Link href="#"><InstragramIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><DribbleIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><BehanceIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><YoutubeIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div
                onClick={toggleMainSidebar}
                className={`body-overlay ${isMainSidebarOpen ? "apply" : ""}`}
            />
        </>
    );
};

export default PrimaryOffcanvas;