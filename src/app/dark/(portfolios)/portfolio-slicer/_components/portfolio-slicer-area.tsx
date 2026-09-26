/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import Link from "next/link";

// Custom Swiper Slicer Effect Module
const EffectSlicer = ({ swiper, extendParams, on, emit }: { swiper: any; extendParams: any; on: any; emit: any }) => {
    extendParams({
        slicerEffect: {
            split: 5,
        },
    });

    let beforeLoop = false;

    const createClones = () => {
        swiper.slides.forEach((slide: any) => {
            if (slide.querySelector(".swiper-slicer-image-clones")) return;
            const img = slide.querySelector(".swiper-slicer-image") as HTMLImageElement;
            if (!img) return;
            const nextEl = img.nextElementSibling;
            const clonesContainer = document.createElement("div");
            clonesContainer.classList.add("swiper-slicer-image-clones");
            for (let i = 0; i < swiper.params.slicerEffect.split; i += 1) {
                const cloneWrapper = document.createElement("div");
                cloneWrapper.classList.add("swiper-slicer-image-clone");
                cloneWrapper.appendChild(img.cloneNode(true));
                clonesContainer.appendChild(cloneWrapper);
            }
            if (nextEl) {
                slide.insertBefore(clonesContainer, nextEl);
            } else {
                slide.appendChild(clonesContainer);
            }
        });
    };

    const styleClones = () => {
        swiper.slides.forEach((slide: any) => {
            slide.querySelectorAll(".swiper-slicer-image").forEach((img: any) => {
                img.style.width = `${swiper.width}px`;
                img.style.height = `${swiper.height}px`;
            });
        });
        swiper.slides.forEach((slide: any) => {
            slide.querySelectorAll(".swiper-slicer-image-clone").forEach((clone: any, idx: number) => {
                const img = clone.querySelector(".swiper-slicer-image") as HTMLImageElement;
                if (!img) return;
                if (swiper.params.direction === "horizontal") {
                    clone.style.height = 100 / swiper.params.slicerEffect.split + "%";
                    clone.style.top = (100 / swiper.params.slicerEffect.split) * idx + "%";
                    img.style.top = `-${100 * idx}%`;
                } else {
                    clone.style.width = 100 / swiper.params.slicerEffect.split + "%";
                    clone.style.left = (100 / swiper.params.slicerEffect.split) * idx + "%";
                    img.style.left = `-${100 * idx}%`;
                }
            });
        });
    };

    const runTransition = (transitionDuration: number) => {
        swiper.slides.forEach((slide: any) => {
            const clones = slide.querySelectorAll(".swiper-slicer-image-clone");
            const slideContent = slide.querySelector(".slide-content") as HTMLElement;
            if (slideContent) {
                slideContent.style.transitionDuration = `${transitionDuration}ms`;
            }
            clones.forEach((clone: any, idx: number) => {
                if (transitionDuration === 0) {
                    clone.style.transitionTimingFunction = "ease-out";
                    clone.style.transitionDuration = beforeLoop
                        ? "0ms"
                        : `${swiper.params.speed + (swiper.params.speed / (clones.length - 1)) * (clones.length - idx - 1)}ms`;
                } else {
                    clone.style.transitionTimingFunction = "";
                    clone.style.transitionDuration = `${transitionDuration + (transitionDuration / (clones.length - 1)) * (clones.length - idx - 1)
                        }ms`;
                }
            });
        });

        if (transitionDuration !== 0) {
            let transitionTriggered = false;
            const activeSlide = swiper.slides[swiper.activeIndex];
            const firstClone = activeSlide?.querySelector(".swiper-slicer-image-clone:nth-child(1)") as HTMLElement;
            if (!firstClone) return;
            const onTransitionEnd = (e: TransitionEvent) => {
                if (e.target !== firstClone) return;
                firstClone.removeEventListener("transitionend", onTransitionEnd);
                if (transitionTriggered) return;
                if (!swiper || swiper.destroyed) return;
                transitionTriggered = true;
                swiper.animating = false;
                const customEvent = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true,
                });
                swiper.wrapperEl.dispatchEvent(customEvent);
            };
            firstClone.addEventListener("transitionend", onTransitionEnd);
        }
    };

    on("beforeLoopFix", () => {
        beforeLoop = true;
    });

    on("loopFix", () => {
        beforeLoop = false;
    });

    on("setTranslate", () => {
        if (swiper.params.effect !== "slicer") return;
        const axis = swiper.params.direction === "vertical" ? "Y" : "X";
        swiper.slides.forEach((slide: any, idx: number) => {
            slide.style.transform = `translate${axis}(-${100 * idx}%)`;
            const progress = slide.progress;
            const slideContent = slide.querySelector(".slide-content") as HTMLElement;
            if (slideContent) {
                slideContent.style.transform = `translate${axis}(${swiper.size * -progress * 1.2}px)`;
            }
            slide.querySelectorAll(".swiper-slicer-image-clone").forEach((clone: any) => {
                const s = -progress;
                clone.style.transform = `translate${axis}(${100 * s}%)`;
            });
        });
    });

    on("setTransition", (s: any, duration: number) => {
        if (swiper.params.effect === "slicer") {
            runTransition(duration);
        }
    });

    on("slidesLengthChange", () => {
        createClones();
        styleClones();
    });

    on("beforeInit", () => {
        if (swiper.params.effect !== "slicer") return;
        swiper.classNames.push("swiper-slicer");
        const defaultParams = {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
        };
        Object.assign(swiper.params, defaultParams);
        Object.assign(swiper.originalParams, defaultParams);
    });

    on("init", () => {
        if (swiper.params.effect === "slicer") {
            createClones();
            emit("setTranslate", swiper, swiper.translate);
        }
    });

    on("resize init", () => {
        if (swiper.params.effect === "slicer") {
            styleClones();
        }
    });
};

const sliderData = [
    {
        id: 1,
        img: "/assets/img/portfolio/slicer/thumb.jpg",
        category: "Branding",
        title: "Minimalist",
        link: "/portfolio-details-creative"
    },
    {
        id: 2,
        img: "/assets/img/portfolio/slicer/thumb-2.jpg",
        category: "Design",
        title: "Nature",
        link: "/portfolio-details-creative"
    },
    {
        id: 3,
        img: "/assets/img/portfolio/slicer/thumb-3.jpg",
        category: "Development",
        title: "Geometric",
        link: "/portfolio-details-creative"
    },
    {
        id: 4,
        img: "/assets/img/portfolio/slicer/thumb-4.jpg",
        category: "Branding",
        title: "Showcase",
        link: "/portfolio-details-creative"
    }
];

const PortfolioSlicerArea = () => {
    return (
        <div className="tp-portfolio-slicer-area">
            <div className="tp-portfolio-slicer-area-inner">
                <div id="app" className="tp-portfolio-slicer-slider">
                    <Swiper
                        modules={[EffectSlicer, Navigation, Pagination, Mousewheel]}
                        effect="slicer"
                        loop={true}
                        direction="vertical"
                        speed={600}
                        mousewheel={{ releaseOnEdges: true }}
                        navigation={{
                            nextEl: ".tp-portfolio-slicer-button-next",
                            prevEl: ".tp-portfolio-slicer-button-prev",
                        }}
                        pagination={{
                            el: ".tp-portfolio-slicer-pagination",
                            clickable: true,
                        }}
                        className="swiper tp-portfolio-slicer-active"
                    >
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <img className="swiper-slicer-image" src={item.img} alt={item.title} />
                                <div className="slide-content">
                                    <div className="container-fluid container-1800">
                                        <span className="tp-portfolio-slicer-category">{item.category}</span>
                                        <h2 className="tp-portfolio-slicer-title">
                                            <Link href={item.link}>{item.title}</Link>
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="slider-nav-box overflow-hidden">
                        <div className="container-fluid container-1800">
                            <div className="slider-nav">
                                <div className="tp-portfolio-slicer-button-prev nav-icon has_fade_anim" data-fade-from="left" data-on-scroll="0" data-delay="0.30">
                                    <i className="fa-solid fa-angle-left"></i>Prev
                                </div>
                                <div className="tp-portfolio-slicer-button-next nav-icon has_fade_anim" data-fade-from="right" data-on-scroll="0" data-delay="0.30">
                                    Next<i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-portfolio-slicer-pagination has_fade_anim" data-fade-from="bottom" data-fade-offset="0" data-on-scroll="0" data-delay="0.45"></div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSlicerArea;
