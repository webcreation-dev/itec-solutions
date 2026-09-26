"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperModule } from "swiper/types";
import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface BrandItem {
    src: string;
    width: number;
    height: number;
}

interface BrandLogoProps {
    itemClass?: string;
    swiperOptions?: SwiperOptions;
    data: BrandItem[];
    imageClass?: string;
    modules?: SwiperModule[];
    useLink?: boolean;
}

const BrandLogoSlider: React.FC<BrandLogoProps> = ({
    itemClass = "",
    swiperOptions,
    data,
    imageClass = "",
    modules = [Autoplay],
    useLink
}) => {
    return (
        <Swiper modules={modules} {...swiperOptions}>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className={itemClass}>
                        {useLink ? (
                            <Link href="#">
                                <Image
                                    src={item.src}
                                    width={item.width}
                                    height={item.height}
                                    className={imageClass}
                                    alt={`Brand ${index + 1}`}
                                />
                            </Link>
                        ) : (
                            <Image
                                src={item.src}
                                width={item.width}
                                height={item.height}
                                className={imageClass}
                                alt={`Brand ${index + 1}`}
                            />
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BrandLogoSlider;