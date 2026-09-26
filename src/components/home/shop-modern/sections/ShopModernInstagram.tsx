"use client";
import { PhotoProviderWrapper } from "@/components/wrappers";
import { PhotoView } from "react-photo-view";
import Image from "next/image";
import Link from "next/link";

const instagramData = [
    {
        id: 1,
        img: "/assets/img/update/instagram/shop/insta-1.jpg",
    },
    {
        id: 2,
        img: "/assets/img/update/instagram/shop/insta-2.jpg",
    },
    {
        id: 3,
        type: "banner",
    },
    {
        id: 4,
        img: "/assets/img/update/instagram/shop/insta-3.jpg",
    },
    {
        id: 5,
        img: "/assets/img/update/instagram/shop/insta-4.jpg",
    },
];

const ShopModernInstagram = () => {
    return (
        <div className="al-instagram-shop-area">
            <div className="container-fluid pl-20 pr-20">
                <div className="row row-cols-lg-5 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
                    <PhotoProviderWrapper>
                        {instagramData.map((item) => {
                            if (item.type === "banner") {
                                return (
                                    <div key="banner" className="col">
                                        <div className="al-instagram-shop-banner text-center">
                                            <div className="al-instagram-shop-banner-icon mb-40">
                                                <Link href="#">
                                                    <Image width={136} height={136}
                                                        src="/assets/img/update/instagram/shop/insta-icon.png"
                                                        alt="instagram icon"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="al-instagram-shop-banner-content">
                                                <span>Follow Us on</span>
                                                <Link href="#">Instagram</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <div key={item.id} className="col">
                                    <div className="al-instagram-shop-item-2 w-img">
                                        <img src={item.img} alt="" />
                                        <div className="al-instagram-shop-icon-2">
                                            <PhotoView src={item.img} >
                                                <a className="popup-image">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </PhotoView>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </PhotoProviderWrapper>
                </div>
            </div>
        </div>
    );
};

export default ShopModernInstagram;