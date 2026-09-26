"use client";
import { testimonial_slide_active } from "@/constant/swiper";
import { TestimonialArrowIcon } from "@/svg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
const testimonials = [
    {
        id: 1,
        text: `Chaque opération est abordée avec une vision globale :
faire dialoguer le programme, les contraintes techniques,
les usages et les engagements de réalisation.`,
    },
    {
        id: 2,
        text: `Notre rôle est de donner à chaque projet un cadre clair,
de coordonner les expertises et de maintenir le cap
sur la qualité, les délais et le budget.`,
    },
    {
        id: 3,
        text: `ITEC construit des partenariats de confiance avec
les maîtres d’ouvrage, architectes et entreprises
pour faire émerger des projets utiles et durables.`,
    },
];

const ConstructionTestimonial = () => {
    return (
        <div className="ar-testimonial-area pb-200">
            <div className="container container-1350">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="ar-testimonial-slider-wrap p-relative">
                            {/* Shape */}
                            <div className="ar-testimonial-shape-1">
                                <Image className="img-fluid" width={750} height={374}
                                    src="/assets/img/update-2/testimonial/test-bg-1.png"
                                    alt="shape"
                                />
                            </div>

                            {/* Slider */}
                            <div className="ar-testimonial-active fix">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination]}
                                    {...testimonial_slide_active}
                                >
                                    {testimonials.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="ar-testimonial-item text-center">
                                                <p style={{ whiteSpace: "pre-line" }}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Pagination */}
                            <div className="fraction-wrapper d-none d-lg-block">
                                <div id="paginations"></div>
                                <div className="shop-slider-progress-bar">
                                    <span></span>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="ar-testimonial-arrow">
                                <button className="ar-testimonial-prev">
                                    <span>
                                        <TestimonialArrowIcon direction="left" />
                                    </span>
                                </button>

                                <button className="ar-testimonial-next">
                                    <span>
                                        <TestimonialArrowIcon direction="right" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTestimonial;
