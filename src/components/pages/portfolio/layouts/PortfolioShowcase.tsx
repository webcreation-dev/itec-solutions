"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { SmartLink } from "@/components/common";

interface ShowcaseItem {
    id: number;
    title: string;
    category: string;
    year: string;
    img: string;
}

const sliderData: ShowcaseItem[] = [
    {
        id: 1,
        title: "Crafting Digital Experiences",
        category: "UI/UX Design",
        year: "2025",
        img: "/assets/img/portfolio/showcase/thumb.jpg",
    },
    {
        id: 2,
        title: "Polygona Arct Design",
        category: "UI/UX Design",
        year: "2025",
        img: "/assets/img/portfolio/showcase/thumb-2.jpg",
    },
    {
        id: 3,
        title: "Crafting Digital Experiences",
        category: "UI/UX Design",
        year: "2025",
        img: "/assets/img/portfolio/showcase/thumb-3.jpg",
    },
    {
        id: 4,
        title: "Epic Strategy App",
        category: "UI/UX Design",
        year: "2025",
        img: "/assets/img/portfolio/showcase/thumb-2.jpg",
    },
];

const PortfolioShowcase = () => {
    return (
        <main>
            <div className="tp-portfolio-showcase-spacing pre-header">
                <div className="container-fluid p-0 containers">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Navigation, Mousewheel, Keyboard]}
                                spaceBetween={24}
                                slidesPerView={1}
                                // loop={true}
                                allowTouchMove={true}
                                mousewheel={true}
                                centeredSlides={true}
                                speed={600}
                                keyboard={{
                                    enabled: true,
                                }}
                                navigation={{
                                    nextEl: ".tp-portfolio-showcase-next",
                                    prevEl: ".tp-portfolio-showcase-prev",
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                    },
                                    1200: {
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        slidesPerView: 2,
                                    },
                                }}
                                className="swiper-container tp-portfolio-showcase-slide-active"
                            >
                                {sliderData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="tp-portfolio-2-item">
                                            <div className="not-hide-cursor" data-cursor="View<br>Demo">
                                                <SmartLink
                                                    href="/portfolio-details-creative"
                                                    className="d-block tp-portfolio-2-thumb mb-20 cursor-hide"
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                    />
                                                </SmartLink>
                                            </div>
                                            <div className="tp-portfolio-2-content d-flex justify-content-between align-items-start">
                                                <div className="mb-5">
                                                    <h3 className="tp-portfolio-title tp-ff-funnel fw-600 fs-25 lh-36 mb-10 mr-20">
                                                        <SmartLink
                                                            className="underline-black"
                                                            href="/portfolio-details-creative"
                                                        >
                                                            {item.title}
                                                        </SmartLink>
                                                    </h3>
                                                    <div className="tp-portfolio-tag">
                                                        <span>{item.category}</span>
                                                    </div>
                                                </div>
                                                <div className="tp-portfolio-tag mt-5">
                                                    <span>{item.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="tp-portfolio-showcase-pagenation pb-20">
                    <div className="container-fluid container-1800">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-portfolio-showcase-nav">
                                    <span className="tp-portfolio-showcase-prev">
                                        <svg className="mr-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.32503 9.91054L0.279989 5.63362C0.194002 5.56483 0.123373 5.47086 0.0744866 5.36023C0.0256005 5.2496 0 5.12579 0 5C0 4.87421 0.0256005 4.7504 0.0744866 4.63977C0.123373 4.52914 0.194002 4.43518 0.279989 4.36638L6.32503 0.0894619C6.44282 0.0111909 6.57854 -0.0168364 6.71077 0.00979851C6.84301 0.0364334 6.96425 0.116215 7.05538 0.236567C7.1465 0.356918 7.20233 0.510993 7.21407 0.674501C7.2258 0.838009 7.19277 1.00165 7.12018 1.13963L5.36702 4.26665L24.4012 4.26665C24.56 4.26665 24.7123 4.34391 24.8246 4.48144C24.9369 4.61897 25 4.8055 25 5C25 5.1945 24.9369 5.38103 24.8246 5.51856C24.7123 5.65609 24.56 5.73335 24.4012 5.73335L5.36702 5.73335L7.12018 8.86038C7.19277 8.99835 7.2258 9.16199 7.21407 9.3255C7.20233 9.48901 7.1465 9.64308 7.05538 9.76343C6.96425 9.88378 6.84301 9.96357 6.71077 9.9902C6.57854 10.0168 6.44282 9.98881 6.32503 9.91054Z" fill="currentColor" />
                                        </svg>
                                        Previous
                                    </span>
                                    <span className="tp-portfolio-showcase-next">
                                        NEXT
                                        <svg className="ml-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioShowcase;
